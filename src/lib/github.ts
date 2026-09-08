import 'server-only';
import { z } from 'zod';

export interface CalendarDay {
  date: Date;
  count: number;
  level: number;
}

export interface ContributionCalendar {
  weeks: CalendarDay[][];
  total: number;
}

const FETCH_TIMEOUT_MS = 8000;
/** Refresh the calendar at most every 6 hours (ISR where supported). */
const REVALIDATE_SECONDS = 6 * 60 * 60;

/* ─── GitHub GraphQL response validation ─────────────────────────────── */
const ContributionDaySchema = z.object({
  date: z.string(),
  contributionCount: z.number(),
});

const CalendarResponseSchema = z.object({
  data: z.object({
    user: z
      .object({
        contributionsCollection: z.object({
          contributionCalendar: z.object({
            totalContributions: z.number(),
            weeks: z.array(
              z.object({ contributionDays: z.array(ContributionDaySchema) }),
            ),
          }),
        }),
      })
      .nullable(),
  }),
});

const CALENDAR_QUERY = /* GraphQL */ `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

function levelFor(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

/**
 * Fetch the real contribution calendar from GitHub's GraphQL API.
 *
 * Safety properties:
 * - Runs server-side only (`server-only` import fails the build otherwise).
 * - Token comes from `GITHUB_TOKEN` env (never `NEXT_PUBLIC_*`, never client).
 * - 8s timeout so a hung API can't stall the build or page.
 * - Response validated with zod; anything unexpected → null.
 * - Returns null (caller falls back to placeholder) on any failure —
 *   missing token, network error, bad status, invalid shape.
 */
export async function getContributionCalendar(
  username: string,
): Promise<ContributionCalendar | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token || !username) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: CALENDAR_QUERY, variables: { login: username } }),
      signal: controller.signal,
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) return null;

    const parsed = CalendarResponseSchema.safeParse(await res.json());
    if (!parsed.success) return null;

    const calendar = parsed.data.data.user?.contributionsCollection.contributionCalendar;
    if (!calendar) return null;

    const weeks: CalendarDay[][] = calendar.weeks.map((week) =>
      week.contributionDays.map((day) => ({
        date: new Date(`${day.date}T00:00:00`),
        count: day.contributionCount,
        level: levelFor(day.contributionCount),
      })),
    );

    if (weeks.length === 0) return null;

    return { weeks, total: calendar.totalContributions };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/* ─── Deterministic fallback (used when the API is unreachable) ───────── */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildFallbackCalendar(): ContributionCalendar {
  const rand = mulberry32(20260707);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setDate(start.getDate() - (52 * 7 + start.getDay()));

  const days: CalendarDay[] = [];
  const cursor = new Date(start);
  while (cursor <= today) {
    const r = rand();
    const weekday = cursor.getDay();
    const weekend = weekday === 0 || weekday === 6;
    const count = Math.floor(
      (weekend ? r * r * 4 : r * r * 14) + (r > 0.94 ? 6 : 0),
    );
    days.push({ date: new Date(cursor), count, level: levelFor(count) });
    cursor.setDate(cursor.getDate() + 1);
  }

  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  const total = days.reduce((sum, d) => sum + d.count, 0);
  return { weeks, total };
}

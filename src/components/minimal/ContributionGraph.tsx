import { getContributionCalendar, buildFallbackCalendar } from '@/lib/github';
import { profile } from '@/data/portfolio';

const LEVELS = ['#1b1b1b', '#2e2e2e', '#525252', '#909090', '#ededed'];

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export default async function ContributionGraph() {
  const real = await getContributionCalendar(profile.githubUsername).catch(
    () => null,
  );
  const { weeks, total } = real ?? buildFallbackCalendar();

  return (
    <section className="mt-12">
      <h2 className="text-[15px] font-medium text-white">Performance</h2>

      <div className="mt-4 overflow-x-auto pb-1">
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => {
            const firstOfMonth = week.find((d) => d.date.getDate() <= 7);
            const showLabel =
              firstOfMonth &&
              (wi === 0 ||
                week[0].date.getMonth() !== weeks[wi - 1][0].date.getMonth());
            return (
              <div key={wi} className="flex flex-col gap-[3px]">
                <div className="h-[14px] whitespace-nowrap text-[10px] leading-[14px] text-neutral-500">
                  {showLabel ? MONTHS[firstOfMonth.date.getMonth()] : ''}
                </div>
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={`${day.count} contributions on ${day.date.toDateString()}`}
                    className="h-[11px] w-[11px] rounded-[2px]"
                    style={{ backgroundColor: LEVELS[day.level] }}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-2 text-[13px] text-neutral-500">
        {total.toLocaleString()} in the last year
      </p>
    </section>
  );
}

import { profile } from '@/data/portfolio';

export default function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-neutral-900 pt-6">
      <div className="flex flex-col gap-1.5 text-[12px] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <p>{profile.location}</p>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-neutral-300"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}

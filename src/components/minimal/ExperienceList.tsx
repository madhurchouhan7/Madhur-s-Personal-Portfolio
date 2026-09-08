'use client';

import { useState } from 'react';
import {
  FlaskConical,
  Smartphone,
  Radio,
  ChevronDown,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import { experience } from '@/data/portfolio';

const icons: Record<string, LucideIcon> = {
  'IIT Indore': FlaskConical,
  'GDSC AITR': Smartphone,
  'IEEE APS': Radio,
};

export default function ExperienceList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-[15px] font-medium text-white">Experience</h2>

      <div className="mt-3">
        {experience.map((item, i) => {
          const Icon = icons[item.org] ?? FlaskConical;
          const isOpen = open === i;
          return (
            <div key={item.org} className="border-b border-neutral-900 last:border-0">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-3 rounded-lg py-3 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                  <Icon size={16} className="text-neutral-300" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-[14px] font-medium text-white">
                    {item.org}
                    {item.link && (
                      <ExternalLink size={12} className="shrink-0 text-neutral-600" />
                    )}
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] text-neutral-500">
                    {item.role}
                  </span>
                </span>
                <span className="hidden shrink-0 text-[12px] text-neutral-500 sm:block">
                  {item.period}
                </span>
                <ChevronDown
                  size={14}
                  className={`shrink-0 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="pb-4 pl-12 pr-2">
                  <p className="text-[12px] text-neutral-500 sm:hidden">{item.period}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-neutral-400">
                    {item.description}{' '}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-neutral-700 underline-offset-4 hover:text-white"
                      >
                        iiti.ac.in
                      </a>
                    )}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

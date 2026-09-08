import {
  Radio,
  ScanLine,
  Stethoscope,
  Zap,
  Syringe,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { projects } from '@/data/portfolio';

const icons: LucideIcon[] = [Radio, ScanLine, Stethoscope, Zap, Syringe];

export default function ProjectsList() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-[15px] font-medium text-white">Projects</h2>

      <div className="mt-3">
        {projects.map((project, i) => {
          const Icon = icons[i % icons.length];
          return (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 rounded-lg border-b border-neutral-900 py-3 transition-colors last:border-0 hover:bg-white/[0.03]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                <Icon size={16} className="text-neutral-300" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium text-white">
                  {project.title}
                </span>
                <span className="mt-0.5 block truncate text-[13px] text-neutral-500">
                  {project.description}
                </span>
              </span>
              <ArrowUpRight
                size={14}
                className="shrink-0 text-neutral-600 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

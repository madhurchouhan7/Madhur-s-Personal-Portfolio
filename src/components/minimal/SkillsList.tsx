'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Flame,
  Brain,
  Eye,
  Terminal,
  Braces,
  Feather,
  Coffee,
  Smartphone,
  Database,
  Layers,
  Server,
  Globe,
  GitBranch,
  Container,
  Workflow,
  Code2,
  Send,
  Figma,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';
import { skillGroups } from '@/data/portfolio';

const skillIcons: Record<string, LucideIcon> = {
  PyTorch: Flame,
  'Scikit-Learn': Brain,
  OpenCV: Eye,
  'Computer Vision': Eye,
  Python: Terminal,
  JavaScript: Braces,
  Dart: Feather,
  Java: Coffee,
  Flutter: Smartphone,
  Firebase: Flame,
  Riverpod: Layers,
  Firestore: Database,
  'Node.js': Server,
  Express: Globe,
  MongoDB: Database,
  'REST APIs': Globe,
  Git: GitBranch,
  Docker: Container,
  Linux: Terminal,
  'GitHub Actions': Workflow,
  'VS Code': Code2,
  Postman: Send,
  Figma: Figma,
  Jupyter: BookOpen,
};

const VISIBLE_COUNT = 4;

export default function SkillsList() {
  const [showAll, setShowAll] = useState(false);
  const groups = showAll ? skillGroups : skillGroups.slice(0, VISIBLE_COUNT);

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-medium text-white">Skills</h2>
        {skillGroups.length > VISIBLE_COUNT && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-[13px] text-neutral-400 transition-colors hover:text-white"
          >
            {showAll ? 'See less' : 'See more'}
            <ChevronDown
              size={14}
              className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      <div className="mt-4 space-y-3.5">
        {groups.map((group) => (
          <div key={group.label} className="grid grid-cols-[92px_1fr] gap-3">
            <p className="pt-px text-[13px] text-neutral-500">{group.label}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 text-[13px] text-neutral-300"
                  >
                    {Icon ? (
                      <Icon size={12} className="text-neutral-500" />
                    ) : (
                      <span className="h-1 w-1 rounded-full bg-neutral-600" />
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

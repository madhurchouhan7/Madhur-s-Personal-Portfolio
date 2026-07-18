'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  FlaskConical,
  Smartphone,
  Users,
  Radio,
  Github,
} from 'lucide-react';

interface Milestone {
  step: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  type: 'education' | 'skill' | 'research' | 'achievement' | 'future';
}

const milestones: Milestone[] = [
  {
    step: '01',
    date: 'May 2026 - July 2026',
    title: 'Research Intern',
    subtitle: 'Indian Institute of Technology, Indore',
    description:
      'Working on ML-based Spectrum Sensing using USRP & RTL-SDR for Cognitive Radio in IoT environments.',
    icon: FlaskConical,
    type: 'research',
  },
  {
    step: '02',
    date: 'Oct 2025 - Present',
    title: 'App Developer',
    subtitle: 'GDSC AITR',
    description:
      'Developing cross-platform mobile applications using Flutter, Firebase, and Google Cloud Functions. Working with the tech core team to deliver real-world projects.',
    icon: Smartphone,
    type: 'skill',
  },
  {
    step: '03',
    date: 'Dec 2025 - Present',
    title: 'Student Member',
    subtitle: 'IEEE Antennas and Propagation Society',
    description:
      'Active member participating in society events and expanding knowledge in antennas and propagation technologies.',
    icon: Radio,
    type: 'education',
  },
];

const typeColor: Record<string, string> = {
  education: '#93c5fd',
  skill: '#86efac',
  research: '#c4b5fd',
  achievement: '#fbbf24',
  future: '#f9a8d4',
};

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const Icon = milestone.icon;
  const color = typeColor[milestone.type];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.65,
        ease: 'easeOut',
      }}
      className="relative flex flex-col"
    >
      {/* Connector line (mobile vertical, desktop horizontal) */}
      {index < milestones.length - 1 && (
        <>
          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-6 top-14 bottom-0 w-px bg-[#242424]" />
        </>
      )}

      {/* Card */}
      <div className="group relative rounded-2xl border border-[#242424] bg-[#141414] p-8 hover:border-[#3F3F46] transition-all duration-300 h-full">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0"
          style={{ background: `${color}12`, border: `1px solid ${color}25` }}
        >
          <Icon className="h-6 w-6" style={{ color }} />
        </div>

        {/* Step + Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#6B7280] tabular-nums">{milestone.step}</span>
          <span
            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono"
            style={{
              background: `${color}10`,
              border: `1px solid ${color}20`,
              color: color,
            }}
          >
            {milestone.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-satoshi font-bold text-white text-lg leading-tight mb-1.5">
          {milestone.title}
        </h3>
        <p className="text-xs text-[#6B7280] font-mono mb-4 leading-relaxed">{milestone.subtitle}</p>

        {/* Description */}
        <p className="text-base text-[#A3A3A3] leading-relaxed">{milestone.description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <AnimatedSection variant="fadeUp" className="mb-16">
          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
            — Journey So Far
          </p>
          <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white">
            Experience &amp; Milestones
          </h2>
        </AnimatedSection>

        {/* Desktop: horizontal connector */}
        <div className="hidden lg:flex items-center justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#242424] to-transparent" />
          {milestones.map((m, i) => {
            const color = typeColor[m.type];
            return (
              <div key={m.step} className="relative z-10">
                <div
                  className="w-3 h-3 rounded-full border-2"
                  style={{ borderColor: color, background: '#090909' }}
                />
              </div>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {milestones.map((milestone, i) => (
            <MilestoneCard key={milestone.step} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

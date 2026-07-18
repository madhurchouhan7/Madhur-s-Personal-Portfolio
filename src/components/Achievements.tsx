'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 10,
    suffix: '+',
    label: 'Projects',
    description: 'AI/ML systems built end-to-end',
  },
  {
    value: 2,
    suffix: '+',
    label: 'Research Papers',
    description: 'Academic publications in AI & Signal Processing',
  },
  {
    value: 1,
    suffix: '',
    label: 'Research Internship',
    description: 'IIT Indore — Spectrum Sensing & SDR',
  },
  {
    value: 500,
    suffix: '+',
    label: 'LeetCode Problems',
    description: 'Algorithmic problem solving',
  },
];

function CountUp({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isVisible || hasStarted.current) return;
    hasStarted.current = true;

    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-bold text-white tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative">
        <AnimatedSection variant="fadeUp" className="mb-16">
          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
            — By The Numbers
          </p>
          <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white">
            Impact &amp; Achievements
          </h2>
        </AnimatedSection>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative rounded-2xl border border-[#242424] bg-[#141414] p-5 md:p-8 hover:border-[#3F3F46] transition-colors duration-300 overflow-hidden group"
            >
              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at top right, rgba(255,255,255,0.04) 0%, transparent 60%)',
                }}
              />

              <div className="mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} isVisible={isInView} />
              </div>
              <p className="font-satoshi font-semibold text-white text-base mb-1">{stat.label}</p>
              <p className="text-xs text-[#6B7280] leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

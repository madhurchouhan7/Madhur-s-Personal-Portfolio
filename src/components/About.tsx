'use client';

import AnimatedSection, { StaggerContainer } from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '1+', label: 'Research Papers' },
  { value: '1', label: 'Paper Submitted' },
];

const highlights = [
  {
    tag: 'Machine Learning',
    text: 'Designing and training ML models for real-world signal processing and classification tasks.',
  },
  {
    tag: 'Computer Vision',
    text: 'Building deep learning pipelines for medical image analysis and object recognition.',
  },
  {
    tag: 'LLMs & GenAI',
    text: 'Developing AI-powered applications using large language models and multimodal systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* LEFT — Portrait Placeholder */}
          <AnimatedSection variant="slideLeft">
            <div className="relative">
              {/* Subtle background glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(96,165,250,0.05) 0%, transparent 70%)',
                }}
              />

              {/* Portrait card */}
              <div
                className="relative rounded-2xl overflow-hidden border border-[#242424] aspect-[4/5] max-w-xs sm:max-w-sm mx-auto lg:mx-0"
                style={{ background: 'linear-gradient(135deg, #111111, #141414, #111111)' }}
              >
                {/* Noise texture */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                  }}
                />

                {/* Profile Picture */}
                <Image
                  src="/images/my-pfp.jpeg"
                  alt="Madhur Chouhan"
                  fill
                  className="object-cover object-center"
                />

                {/* Subtle gradient overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#242424]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-satoshi font-semibold text-sm">
                        Research Intern
                      </p>
                      <p className="text-[#6B7280] text-xs mt-0.5">IIT Indore</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats strip */}
              <div className="mt-4 grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-3 rounded-xl border border-[#242424] bg-[#141414] text-center"
                  >
                    <p className="font-satoshi font-bold text-xl text-white">{value}</p>
                    <p className="text-[10px] text-[#6B7280] mt-0.5 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT — Content */}
          <AnimatedSection variant="fadeUp" delay={0.15}>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
                  — About Me
                </p>
                <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Engineer. Researcher.
                  <br />
                  <span className="text-[#A3A3A3]">AI Builder.</span>
                </h2>
                <div className="space-y-4 text-[#A3A3A3] text-base leading-relaxed">
                  <p>
                    I'm <span className="text-white">Madhur Chouhan</span>, a B.Tech ECE student at{' '}
                    <span className="text-white">
                      Acropolis Institute of Technology and Research, Indore
                    </span>
                    , with a deep passion for building intelligent systems that bridge theory and
                    real-world impact.
                  </p>
                  <p>
                    <span className="text-white font-medium">
                      Completed a Research Internship at IIT Indore
                    </span>
                    , where I worked on{' '}
                    <span className="text-white font-medium">
                      Machine Learning-based Spectrum Sensing using Software Defined Radios (USRP &
                      RTL-SDR)
                    </span>{' '}
                    for Cognitive Radio in IoT environments. This is an ongoing research project exploring the intersection of telecommunications and AI.
                  </p>
                </div>
              </div>

              {/* Highlight cards */}
              <div className="space-y-3">
                {highlights.map(({ tag, text }, i) => (
                  <div
                    key={tag}
                    className="flex gap-4 p-4 rounded-xl border border-[#242424] bg-[#141414] hover:border-[#3F3F46] transition-colors duration-300 group"
                  >
                    <span className="px-2.5 py-1 rounded-md border border-[#242424] bg-[#111111] text-[11px] font-mono text-[#6B7280] uppercase tracking-wider shrink-0 group-hover:border-[#3F3F46] transition-colors">
                      {tag}
                    </span>
                    <p className="text-[#A3A3A3] text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <a
                href="#research"
                className="inline-flex items-center gap-2 text-sm text-white font-medium group"
              >
                View my research
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

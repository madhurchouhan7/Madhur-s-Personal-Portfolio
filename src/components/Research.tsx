'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const researchDimensions = [
  {
    label: 'Primary Focus',
    value: 'ML-Based Spectrum Sensing',
    sublabel: 'Cognitive Radio for IoT',
  },
  {
    label: 'Hardware',
    value: 'USRP & RTL-SDR',
    sublabel: 'Software Defined Radio',
  },
  {
    label: 'Platform',
    value: 'GNU Radio',
    sublabel: 'Signal Processing Framework',
  },
  {
    label: 'Institution',
    value: 'IIT Indore',
    sublabel: 'May – July 2026',
  },
];

const techPills = [
  'Python',
  'GNU Radio',
  'USRP B210',
  'RTL-SDR',
  'PyTorch',
  'Scikit-learn',
  'Signal Processing',
  'CR-IoT',
  'FFT',
  'Energy Detection',
  'ML Classification',
  'Dataset Collection',
];

export default function Research() {
  return (
    <section id="research" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="mb-16">
          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
            — Current Research
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
              Spectrum Sensing with{' '}
              <span className="text-[#A3A3A3]">Machine Learning</span>
            </h2>
            <a
              href="#publications"
              className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-white transition-colors group shrink-0"
            >
              View publication
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </AnimatedSection>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT — Description */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="h-full rounded-2xl border border-[#242424] bg-[#141414] p-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs text-blue-400 font-mono uppercase tracking-wider">
                  Research Internship — IIT Indore
                </span>
              </div>

              <div className="space-y-4 text-[#A3A3A3] leading-relaxed">
                <p>
                  Cognitive Radio (CR) addresses spectrum scarcity by dynamically assigning
                  underutilized frequency bands to secondary users. My research applies{' '}
                  <span className="text-white font-medium">machine learning</span> to{' '}
                  <span className="text-white font-medium">spectrum sensing</span> — detecting
                  primary user activity in real-time using SDR hardware.
                </p>
                <p>
                  Using <span className="text-white">USRP B210</span> and{' '}
                  <span className="text-white">RTL-SDR</span> hardware with{' '}
                  <span className="text-white">GNU Radio</span> as the signal processing
                  backbone, I capture, process, and label radio frequency signals to build
                  robust multi-label datasets.
                </p>
                <p>
                  These datasets train classification models that outperform traditional
                  energy-detection methods, especially under low{' '}
                  <span className="text-white">SNR</span> conditions — enabling smarter
                  spectrum usage in{' '}
                  <span className="text-white">CR-IoT</span> networks.
                </p>
              </div>

              {/* Tech pills */}
              <div className="pt-2">
                <p className="text-[10px] text-[#6B7280] uppercase tracking-wider font-mono mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {techPills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-[#242424] text-[#6B7280] bg-[#111111] hover:border-[#3F3F46] hover:text-[#A3A3A3] transition-colors"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT — Spec cards + diagram */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="space-y-4">
              
              {/* IIT Indore Logo */}
              <div className="relative w-full h-24 sm:h-32 md:h-40 rounded-xl overflow-hidden border border-[#242424] bg-white flex items-center justify-center p-3 sm:p-4">
                <div className="relative w-full h-full max-w-[180px]">
                  <Image 
                    src="/images/iit-indore.jpg"
                    alt="IIT Indore Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Spec cards */}
              <div className="grid grid-cols-2 gap-4">
                {researchDimensions.map(({ label, value, sublabel }) => (
                  <div
                    key={label}
                    className="p-5 rounded-xl border border-[#242424] bg-[#141414] hover:border-[#3F3F46] transition-colors"
                  >
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider font-mono mb-2">
                      {label}
                    </p>
                    <p className="font-satoshi font-bold text-white text-base leading-tight">
                      {value}
                    </p>
                    <p className="text-[11px] text-[#6B7280] mt-1">{sublabel}</p>
                  </div>
                ))}
              </div>

              {/* Flow diagram — research pipeline */}
              <div className="rounded-2xl border border-[#242424] bg-[#111111] p-6">
                <p className="text-[10px] text-[#6B7280] uppercase tracking-widest font-mono mb-5">
                  Research Pipeline
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {[
                    { step: '01', label: 'Signal Capture', sub: 'USRP / RTL-SDR' },
                    { step: '02', label: 'Processing', sub: 'GNU Radio' },
                    { step: '03', label: 'Feature Ext.', sub: 'FFT / PSD' },
                    { step: '04', label: 'ML Model', sub: 'Classification' },
                    { step: '05', label: 'Decision', sub: 'CR Allocation' },
                  ].map((item, i, arr) => (
                    <div key={item.step} className="flex items-center gap-2 shrink-0">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center mb-1.5">
                          <span className="text-[10px] text-blue-400 font-mono">{item.step}</span>
                        </div>
                        <p className="text-[10px] text-white font-medium whitespace-nowrap">
                          {item.label}
                        </p>
                        <p className="text-[9px] text-[#6B7280] whitespace-nowrap">{item.sub}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-5 flex items-center justify-center mb-5">
                          <div className="w-full h-px bg-[#242424]" />
                          <div className="absolute w-1 h-1 rounded-full bg-blue-400/50" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div
                className="rounded-xl p-5 border"
                style={{
                  background: 'linear-gradient(135deg, rgba(96,165,250,0.05) 0%, transparent 60%)',
                  borderColor: 'rgba(96,165,250,0.15)',
                }}
              >
                <p className="text-[10px] text-blue-400 font-mono uppercase tracking-wider mb-2">
                  Outcome
                </p>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    Submitted to{' '}
                    <span className="text-white font-medium">Springer ICCIS 2026</span>, presenting a
                    machine learning-based spectrum sensing framework for Cognitive Radio IoT
                    (CR-IoT) that improves low-SNR signal detection over traditional energy
                    detection methods.
                  </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

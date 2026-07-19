'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowUpRight, BookOpen, Award } from 'lucide-react';

const publications = [
  {
    id: 'springer-iccis-2026-lung-nodule',
    type: 'Research Paper',
    status: 'Submitted',
    year: '2026',
    title:
      'Lung Nodule Malignancy Classification from CT Scan Images using Radiomics-Deep Learning Fusion',
    conference: 'Springer International Conference on Computing and Information Sciences (ICCIS 2026)',
    venue: 'Acropolis Institute of Technology and Research',
    abstract:
      'This paper presents a hybrid framework for lung nodule malignancy classification by combining handcrafted radiomics features with deep learning representations extracted from CT scans. Leveraging the LIDC-IDRI dataset and multi-radiologist consensus annotations, the proposed fusion approach improves classification performance while enhancing robustness and clinical interpretability for computer-aided diagnosis.',
    doi: '#',
    tags: ['Computer Vision', 'Medical Imaging', 'Deep Learning', 'Radiomics', 'LIDC-IDRI', 'PyTorch'],
  },
  {
    id: 'spectrum-sensing-research',
    type: 'Ongoing Research',
    status: 'In Progress',
    year: '2026',
    title: 'Spectrum Sensing with Machine Learning',
    venue: 'IIT Indore',
    abstract:
      'Ongoing research exploring the application of machine learning algorithms for spectrum sensing to optimize frequency band utilization.',
    doi: '#',
    tags: ['Machine Learning', 'Spectrum Sensing', 'Cognitive Radio'],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="mb-16">
          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
            — Academic Work
          </p>
          <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white">
            Publications
          </h2>
        </AnimatedSection>

        {/* Publications list */}
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.id} variant="fadeUp" delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-[#242424] bg-[#141414] p-8 hover:border-[#3F3F46] transition-all duration-300">
                {/* Subtle hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 60% at 10% 20%, rgba(96,165,250,0.04) 0%, transparent 60%)',
                  }}
                />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Type badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#242424] bg-[#111111] text-[11px] font-mono text-[#6B7280] uppercase tracking-wider">
                        <BookOpen className="h-3 w-3" />
                        {pub.type}
                      </span>

                      {/* Status badge */}
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider"
                        style={{
                          background: 'rgba(34,197,94,0.08)',
                          border: '1px solid rgba(34,197,94,0.2)',
                          color: '#4ade80',
                        }}
                      >
                        <span className="w-1 h-1 rounded-full bg-green-400" />
                        {pub.status}
                      </span>

                      {/* Year */}
                      <span className="text-[11px] font-mono text-[#6B7280]">{pub.year}</span>
                    </div>

                    {/* Award icon */}
                    <Award className="h-5 w-5 text-[#6B7280] group-hover:text-[#A3A3A3] transition-colors shrink-0" />
                  </div>

                  {/* Title */}
                  <h3 className="font-satoshi text-xl md:text-2xl font-bold text-white leading-snug mb-3">
                    {pub.title}
                  </h3>

                  {/* Conference */}
                  {pub.conference && (
                    <p className="text-sm text-[#A3A3A3] mb-1">{pub.conference}</p>
                  )}
                  <p className="text-xs text-[#6B7280] font-mono mb-6">{pub.venue}</p>

                  {/* Abstract */}
                  <div className="rounded-xl border border-[#242424] bg-[#111111] p-4 md:p-5 mb-6">
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider font-mono mb-3">
                      Abstract
                    </p>
                    <p className="text-xs md:text-sm text-[#A3A3A3] leading-relaxed">{pub.abstract}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-[#242424] text-[#6B7280] bg-[#111111]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#242424]">
                    <div>
                      <p className="text-[10px] text-[#6B7280] font-mono uppercase tracking-wider mb-0.5">
                        DOI
                      </p>
                      <p className="text-xs font-mono text-[#A3A3A3]">Pending assignment</p>
                    </div>

                    <a
                      href={pub.doi}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#242424] bg-[#111111] text-sm text-white font-medium hover:border-[#3F3F46] hover:bg-[#141414] transition-all group/btn"
                    >
                      Read Paper
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty state hint */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="mt-8">
          <div className="rounded-xl border border-dashed border-[#242424] p-6 text-center">
            <p className="text-sm text-[#6B7280]">
              More publications in progress.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

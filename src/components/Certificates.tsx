'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Trophy, Award, Calendar, Building2, ArrowUpRight } from 'lucide-react';

interface Honor {
  id: string;
  title: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  highlights: string[];
  badge?: string;
  link?: string;
}

const honors: Honor[] = [
  {
    id: 'hacksagon-2026',
    title: 'Top Performer – Mobile App Development Track',
    category: 'Hackathon Award',
    date: 'Apr 2026',
    organization: 'ABV-IIITM IEEE Student Branch at IIITM Gwalior',
    badge: 'National Level',
    description:
      'Awarded the Top Performer Position in the Mobile App Development Track at HACKSAGON 2026, a national-level software & hardware hackathon organized by the ABV-IIITM IEEE Student Branch at Atal Bihari Vajpayee Indian Institute of Information Technology and Management.',
    highlights: [
      'Recognized for innovation, problem-solving, and mobile application development contributions as part of Team Synapse.',
      'Developed real-world, high-impact cross-platform mobile solutions under competitive hackathon constraints.',
    ],
    link: '/images/hackathon-cert.jpg',
  },
  {
    id: 'postman-api-expert',
    title: 'Postman API Fundamentals Student Expert',
    category: 'Certification',
    date: 'Jul 2025',
    organization: 'Canvas Credentials (Badgr)',
    badge: 'API & Backend',
    description:
      'Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and applications.',
    highlights: [
      'Credential ID: 6877e338a226e42c8dbd4be7',
      'Demonstrated expertise in RESTful APIs, request routing, and API testing workflows.',
    ],
    link: 'https://badgr.com/public/assertions/jBtOnwmhRESbSeyqRo2PHg',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <AnimatedSection variant="fadeUp" className="mb-16">
          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
            — Honors &amp; Certifications
          </p>
          <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white">
            Certificates &amp; Achievements
          </h2>
        </AnimatedSection>

        {/* List of Honors */}
        <div className="space-y-6">
          {honors.map((item, i) => (
            <AnimatedSection key={item.id} variant="fadeUp" delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-[#242424] bg-[#141414] p-6 sm:p-8 hover:border-[#3F3F46] transition-all duration-300 overflow-hidden">
                {/* Subtle top-right glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(251,191,36,0.06) 0%, transparent 70%)',
                  }}
                />

                <div className="relative space-y-6">
                  {/* Top Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                        <Trophy className="h-5 w-5 text-amber-400" />
                      </div>

                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                          <Award className="h-3 w-3" />
                          {item.category}
                        </span>
                      </div>

                      {item.badge && (
                        <span className="px-2.5 py-1 rounded-full border border-[#242424] bg-[#111111] text-[11px] font-mono text-[#6B7280] uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#6B7280] bg-[#111111] px-3 py-1.5 rounded-lg border border-[#242424]">
                      <Calendar className="h-3.5 w-3.5 text-[#6B7280]" />
                      {item.date}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="font-satoshi text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                      <Building2 className="h-4 w-4 text-[#6B7280] shrink-0" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="rounded-xl border border-[#242424] bg-[#111111] p-5 space-y-3">
                    <p className="text-sm md:text-base text-[#A3A3A3] leading-relaxed">
                      {item.description}
                    </p>
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-2 pt-2 border-t border-[#1e1e1e]">
                        {item.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#8E8E93]">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Certificate Link */}
                  {item.link && (
                    <div className="pt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#242424] bg-[#0c0c0c] text-sm font-medium text-white hover:border-[#3F3F46] hover:bg-[#1a1a1a] transition-all group/btn"
                      >
                        View Certificate
                        <ArrowUpRight className="h-4 w-4 text-[#A3A3A3] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

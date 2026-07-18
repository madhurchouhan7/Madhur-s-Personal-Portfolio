'use client';

import AnimatedSection, { StaggerContainer } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'AI & Machine Learning',
    pills: [
      'PyTorch',
      'Scikit-Learn',
      'Transfer Learning',
      'Convolutional Neural Networks (CNNs)',
      'Computer Vision',
      'Model Evaluation',
      'Data Augmentation',
    ],
  },
  {
    label: 'Research',
    pills: [
      'Signal Processing',
      'Spectrum Sensing',
      'Cognitive Radio Networks',
      'Feature Engineering',
      'Cross Validation',
      'Statistical Analysis',
    ],
  },
  {
    label: 'Programming Languages',
    pills: ['Python', 'JavaScript', 'Java', 'Dart'],
  },
  {
    label: 'Backend & Cloud',
    pills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Google Cloud Platform'],
  },
  {
    label: 'DevOps & Tools',
    pills: ['Git', 'Docker', 'Linux', 'GitHub Actions', 'CI/CD', 'Nginx'],
  },
  {
    label: 'Mobile Development',
    pills: ['Flutter', 'Riverpod', 'Firebase Auth', 'Firestore', 'REST APIs'],
  },
  {
    label: 'Development Tools',
    pills: ['VS Code', 'Jupyter Notebook', 'Postman', 'Figma', 'Google Cloud Console'],
  },
];

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  }),
};

export default function TechStack() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="mb-16">
          <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
            — Technology
          </p>
          <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white">
            Tech Stack
          </h2>
        </AnimatedSection>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat, catIndex) => (
            <AnimatedSection key={cat.label} variant="fadeUp" delay={catIndex * 0.08}>
              <div>
                {/* Category label */}
                <div className="flex items-center gap-4 mb-5">
                  <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest whitespace-nowrap">
                    {cat.label}
                  </p>
                  <div className="flex-1 h-px bg-[#242424]" />
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.pills.map((pill, pillIndex) => (
                    <motion.span
                      key={pill}
                      custom={catIndex * 8 + pillIndex}
                      variants={pillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      className="inline-flex items-center px-4 py-2 rounded-full border border-[#242424] bg-[#141414] text-sm font-medium text-[#A3A3A3] cursor-default select-none"
                      whileHover={{
                        borderColor: '#3F3F46',
                        color: '#ffffff',
                        transition: { duration: 0.15 },
                      }}
                    >
                      {pill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

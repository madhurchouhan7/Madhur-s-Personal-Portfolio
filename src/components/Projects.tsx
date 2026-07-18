'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { StaggerContainer } from '@/components/ui/AnimatedSection';
import { ArrowUpRight, X, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  link: string;
  codeLink: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'spectrum-sensing',
    title: 'ML-Based Spectrum Sensing',
    subtitle: 'IIT Indore Research Project',
    description:
      'Multi-label spectrum sensing using USRP & RTL-SDR for Cognitive Radio in IoT. Building robust datasets and evaluating ML models for real-time signal classification.',
    longDescription:
      'Cognitive Radio (CR) addresses spectrum scarcity by dynamically assigning underutilized frequency bands to secondary users. This research applies machine learning to spectrum sensing — detecting primary user activity in real-time using SDR hardware.\n\nUsing USRP B210 and RTL-SDR hardware with GNU Radio as the signal processing backbone, we captured, processed, and labeled radio frequency signals to build robust multi-label datasets. These datasets trained classification models that outperform traditional energy-detection methods, especially under low SNR conditions.\n\nThis research was published at IEEE ICCIS 2026, demonstrating how ML-based sensing enables smarter spectrum usage in CR-IoT networks.',
    tags: ['Python', 'GNU Radio', 'SDR', 'PyTorch', 'USRP', 'RTL-SDR', 'Scikit-learn', 'Signal Processing'],
    category: 'Research',
    link: '#',
    codeLink: '#',
    image: '/images/spectrum-sensing.png',
    featured: true,
  },
  {
    id: 'lung-cancer',
    title: 'Lung Cancer Classification',
    subtitle: 'Radiomics + Deep Learning Fusion',
    description:
      'Multi-radiologist consensus learning with radiomics and EfficientNetV2 for accurate lung nodule malignancy prediction from CT scans.',
    longDescription:
      'This project develops a robust lung cancer classification pipeline that fuses traditional radiomics features with state-of-the-art deep learning to predict malignancy of lung nodules from CT scans.\n\nThe core innovation is a multi-radiologist consensus learning approach, where annotations from multiple radiologists are aggregated to reduce label noise and inter-observer variability. EfficientNetV2 serves as the deep learning backbone, enhanced with handcrafted radiomics features (shape, texture, intensity) extracted via PyRadiomics.\n\nThe system achieves significantly higher accuracy compared to single-reader annotation baselines, making it a practical tool for aiding radiologists in early-stage lung cancer detection.',
    tags: ['Python', 'PyTorch', 'EfficientNetV2', 'Radiomics', 'OpenCV', 'PyRadiomics', 'NumPy', 'Pandas'],
    category: 'Computer Vision',
    link: '#',
    codeLink: '#',
    image: '/images/lung-ct-scan.png',
  },
  {
    id: 'ai-medical-assistant',
    title: 'AI Medical Assistant',
    subtitle: 'Flutter + Gemini API',
    description:
      'AI-powered telehealth assistant with symptom analysis, medical insights, and intelligent recommendations powered by Google Gemini and Vertex AI.',
    longDescription:
      'A cross-platform AI-powered telehealth assistant built with Flutter, designed to bridge the gap between patients and medical information. The app leverages Google Gemini for natural language understanding and Vertex AI for advanced medical reasoning.\n\nKey features include intelligent symptom analysis with follow-up questioning, personalized health recommendations, medication reminders, and appointment scheduling. The backend is powered by Firebase with real-time Firestore sync, ensuring a seamless and responsive user experience.\n\nThe app integrates secure Firebase Auth for user management and follows strict data privacy principles. It is designed to be a helpful first-line assistant, not a replacement for medical professionals.',
    tags: ['Flutter', 'Gemini API', 'Firebase', 'Vertex AI', 'Dart', 'Firestore', 'Riverpod', 'Cloud Functions'],
    category: 'GenAI',
    link: '#',
    codeLink: 'https://github.com/madhurchouhan7',
    image: '/images/ai-medical-assistant.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: 'easeOut' as const,
    },
  }),
};

const categoryColor: Record<string, string> = {
  Research: '#60a5fa',
  'Computer Vision': '#4ade80',
  GenAI: '#c084fc',
};

/* ─── MODAL ─────────────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const color = categoryColor[project.category] ?? '#60a5fa';

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(0,0,0,0.75)' }}
      >
        {/* Modal Panel */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.94, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 32 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#2a2a2a] bg-[#111111] shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#6B7280] hover:text-white hover:border-[#3F3F46] transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-3xl bg-[#0a0a0a]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

            {/* Category badge over image */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest border"
                style={{
                  background: `${color}15`,
                  borderColor: `${color}30`,
                  color,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400 font-mono uppercase tracking-wider">
                  Featured
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Title block */}
            <div>
              <h2 className="font-satoshi text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-[#6B7280] tracking-widest">{project.subtitle}</p>
            </div>

            {/* Long description */}
            <div className="space-y-3">
              {project.longDescription.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#A3A3A3] text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-[#242424]" />

            {/* Tech stack */}
            <div>
              <p className="text-[10px] font-mono text-[#6B7280] uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-[12px] font-mono border border-[#242424] text-[#A3A3A3] bg-[#141414] hover:border-[#3F3F46] hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#242424]" />

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {project.codeLink && project.codeLink !== '#' ? (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#090909] font-semibold text-sm hover:bg-white/90 transition-all duration-200 active:scale-95"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1a1a1a] text-[#6B7280] font-semibold text-sm border border-[#242424] cursor-not-allowed select-none">
                  <Github className="h-4 w-4" />
                  Private Repository
                </span>
              )}

              {project.link && project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#242424] text-white font-semibold text-sm hover:border-[#3F3F46] hover:bg-[#141414] transition-all duration-200 active:scale-95"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#242424] text-[#6B7280] font-semibold text-sm cursor-not-allowed select-none">
                  <ExternalLink className="h-4 w-4" />
                  No Live Demo
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── CARD ───────────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const color = categoryColor[project.category] ?? '#60a5fa';

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="group relative flex flex-col rounded-2xl border border-[#242424] bg-[#141414] overflow-hidden hover:border-[#3F3F46] cursor-pointer transition-all duration-300"
      whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-[220px] overflow-hidden bg-[#111] border-b border-[#242424]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
      </div>

      {/* Category label */}
      <div className="px-6 pt-5 pb-0">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest" style={{ color }}>
          <span className="w-1 h-1 rounded-full" style={{ background: color }} />
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 space-y-4">
        <div>
          <h3 className="font-satoshi text-xl font-bold text-white leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-[11px] text-[#6B7280] font-mono">{project.subtitle}</p>
        </div>

        <p className="text-[#A3A3A3] text-sm leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-[#242424] text-[#6B7280] bg-[#111111]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-[#242424] text-[#6B7280] bg-[#111111]">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 flex items-center justify-between border-t border-[#242424] pt-4">
        <span className="text-xs text-[#6B7280]">
          {project.codeLink !== '#' ? 'GitHub available' : 'Private repo'}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-white font-medium">
          View Details
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400 font-mono uppercase tracking-wider">
            Featured
          </span>
        </div>
      )}
    </motion.div>
  );
}

/* ─── SECTION ────────────────────────────────────────────────────────────── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <AnimatedSection variant="fadeUp" className="mb-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-mono text-[#6B7280] uppercase tracking-widest mb-4">
                — Selected Work
              </p>
              <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white">
                Featured Projects
              </h2>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 text-sm text-[#6B7280]">
              Click any card to explore
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </AnimatedSection>

        {/* Project grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </StaggerContainer>

        {/* Mobile hint */}
        <div className="mt-8 flex justify-center md:hidden">
          <span className="text-sm text-[#6B7280]">
            Tap any card to explore details
          </span>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

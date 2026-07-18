'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Github, Linkedin, BookOpen } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: 'tween' },
  },
} as const;

const socialLinks = [
  {
    href: 'https://github.com/madhurchouhan7',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/madhur-chouhan07/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:madhurchouhan7@gmail.com',
    label: 'Email',
    icon: Mail,
  },
  {
    href: '#',
    label: 'Google Scholar',
    icon: BookOpen,
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(96,165,250,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full pt-24 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[85vh]">
          {/* LEFT — Content */}
          <motion.div
            className="space-y-8 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#242424] bg-[#141414] text-xs font-medium text-[#A3A3A3] tracking-widest uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"
                  aria-hidden="true"
                />
                AI Engineer &amp; Researcher
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-satoshi text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[96px] font-bold leading-[1.05] tracking-tight text-white"
            >
              Building{' '}
              <span className="text-[#A3A3A3]">Intelligent</span>
              <br />
              Systems with{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 60%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#A3A3A3] text-base md:text-lg leading-relaxed max-w-xl"
            >
              <span className="text-white font-medium">Conducted research at IIT Indore</span> on{' '}
              <span className="text-white font-medium">
                Machine Learning-based Spectrum Sensing using Software Defined Radios (SDR)
              </span>
              , resulting in an IEEE conference publication. Currently building intelligent
              applications in Computer Vision and Large Language Models.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#090909] font-semibold text-sm hover:bg-white/90 transition-all duration-200 active:scale-95 group"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#242424] text-white font-semibold text-sm hover:border-[#3F3F46] hover:bg-[#141414] transition-all duration-200 active:scale-95"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <span className="text-xs text-[#6B7280] tracking-wider uppercase">Connect</span>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 text-[#6B7280] hover:text-white transition-colors duration-200 rounded-lg hover:bg-[#141414]"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — AI Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center w-full"
          >
            {/* Outer glow ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(96,165,250,0.06) 0%, transparent 70%)',
              }}
            />

            {/* Image container */}
            <div
              className="relative w-full rounded-2xl overflow-hidden border border-[#242424] h-[60vh] max-h-[640px] xl:max-h-[700px] bg-[#0a0a0a]"
            >
              <Image
                src="/hero-image.jpg"
                alt="AI Neural Network Face"
                fill
                priority
                className="object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
              />

              {/* Corner labels */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-widest">
                  Neural Intelligence
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/40 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-widest">
                  Active
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-[#6B7280] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#6B7280] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

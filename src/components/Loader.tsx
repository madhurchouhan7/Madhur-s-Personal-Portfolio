'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_MESSAGES = [
  'INITIALIZING NEURAL NETWORK CORE...',
  'ESTABLISHING COGNITIVE PIPELINES...',
  'OPTIMIZING INTERACTION PARADIGMS...',
  'SYSTEM READY.',
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Handle progress counter
  useEffect(() => {
    const duration = 2200; // Total loading time in ms
    const intervalTime = 22; // Smooth steps
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Cycle status messages
  useEffect(() => {
    if (progress >= 100) {
      setStatusIndex(STATUS_MESSAGES.length - 1);
      return;
    }

    const currentMsgIndex = Math.min(
      Math.floor((progress / 100) * STATUS_MESSAGES.length),
      STATUS_MESSAGES.length - 2
    );
    setStatusIndex(currentMsgIndex);
  }, [progress]);

  // Handle completion timeout
  useEffect(() => {
    if (progress === 100) {
      const delay = setTimeout(() => {
        setIsVisible(false);
        // Wait for exit animation to complete
        const exitDelay = setTimeout(() => {
          onComplete();
        }, 600);
        return () => clearTimeout(exitDelay);
      }, 400);

      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  // Prevent scroll during loading
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20, 
            filter: 'blur(10px)',
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#090909] select-none pointer-events-auto"
        >
          {/* Subtle neural network grid in background of loader */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="w-[300px] sm:w-[380px] px-6 text-left relative z-10">
            {/* Status logs */}
            <div className="h-6 mb-3 overflow-hidden">
              <motion.p
                key={statusIndex}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] font-mono text-[#6B7280] tracking-wider uppercase"
              >
                {STATUS_MESSAGES[statusIndex]}
              </motion.p>
            </div>

            {/* Progress bar container */}
            <div className="h-[2px] w-full bg-[#1A1A1A] rounded-full overflow-hidden mb-3 relative">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ type: 'tween', ease: 'easeOut' }}
              />
            </div>

            {/* Percentage counter */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
              <span>M.CHOUHAN // AI.SYS</span>
              <span className="tabular-nums text-white font-medium">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
}

export function AnimatedItem({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  animation = 'fadeIn'
}: AnimatedItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  // Базовые анимации
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    rotate: {
      initial: { opacity: 0, rotate: -10 },
      animate: { opacity: 1, rotate: 0 }
    }
  };

  const selectedAnimation = animations[animation];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={selectedAnimation.initial}
        animate={inView ? selectedAnimation.animate : selectedAnimation.initial}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
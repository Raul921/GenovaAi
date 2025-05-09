import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  direction = 'up'
}: AnimatedSectionProps) {
  // Хук для отслеживания элемента в области видимости
  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация произойдет только один раз
    threshold: 0.1, // Порог видимости элемента
    rootMargin: '-50px 0px', // Отступ для триггера
  });

  // Определяем начальное состояние анимации в зависимости от направления
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 70, opacity: 0 };
      case 'down':
        return { y: -70, opacity: 0 };
      case 'left':
        return { x: 70, opacity: 0 };
      case 'right':
        return { x: -70, opacity: 0 };
      case 'none':
        return { opacity: 0 };
      default:
        return { y: 70, opacity: 0 };
    }
  };

  // Конечное состояние анимации
  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'none':
        return { opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <div ref={ref} className={`bg-white ${className}`}>
      <motion.div
        initial={getInitialPosition()}
        animate={inView ? getAnimatePosition() : getInitialPosition()}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Плавная функция замедления
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
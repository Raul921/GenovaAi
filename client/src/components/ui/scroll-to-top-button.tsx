import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Обработчик события прокрутки
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Показываем кнопку, когда прокрутили страницу на 300px вниз
      setIsVisible(scrollPosition > 300);
    };

    // Добавляем обработчик события скролла
    window.addEventListener('scroll', handleScroll);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
            aria-label="Прокрутить вверх"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
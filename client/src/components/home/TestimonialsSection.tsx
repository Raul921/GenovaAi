import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Типы данных для отзывов
interface Testimonial {
  id: number;
  text: string;
  name: string;
  position: string;
  image: string;
}

export default function TestimonialsSection() {
  // Данные о отзывах
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Imperdiet et sed fringilla arcu egestas enim duis arcu viverra. Accumsan cursus leo cursus interdum in ac mattis arcu consectetur. Sit aliquam in feugiat eget tortor placerat sit aliquam.",
      name: "Иванов Иван Иванович",
      position: "Главный врач, МЦ Здоровье",
      image: "https://placehold.co/541x662/182E45/FFFFFF?text=Отзыв+1"
    },
    {
      id: 2,
      text: "Современная медицина требует инновационных подходов. Благодаря GENOVA наша клиника смогла существенно повысить точность диагностики и качество лечения пациентов. Рекомендую данное решение всем медицинским учреждениям.",
      name: "Петрова Елена Сергеевна",
      position: "Директор, Клиника современной медицины",
      image: "https://placehold.co/541x662/206EF3/FFFFFF?text=Отзыв+2"
    },
    {
      id: 3,
      text: "Использование системы GENOVA позволило нам сократить время диагностики на 40%. Пациенты довольны скоростью и точностью результатов. Отдельно хочу отметить качество технической поддержки и обучения персонала.",
      name: "Сидоров Алексей Петрович",
      position: "Руководитель отдела диагностики, МЦ Нейрон",
      image: "https://placehold.co/541x662/3444E4/FFFFFF?text=Отзыв+3"
    },
    {
      id: 4,
      text: "Лучшее решение для современной клиники. Мы внедрили GENOVA год назад и уже видим значительное улучшение в работе наших специалистов. Интерфейс интуитивно понятен, а результаты всегда точны.",
      name: "Козлова Мария Александровна",
      position: "Заместитель главврача, МЦ Медика",
      image: "https://placehold.co/541x662/9A90F4/FFFFFF?text=Отзыв+4"
    },
    {
      id: 5,
      text: "Качество программного обеспечения GENOVA превзошло все наши ожидания. Мы смогли интегрировать систему с существующими решениями, что позволило создать единую информационную среду в нашей клинике.",
      name: "Новиков Дмитрий Владимирович",
      position: "IT-директор, Медицинский холдинг Вита",
      image: "https://placehold.co/541x662/182E45/FFFFFF?text=Отзыв+5"
    },
  ];

  // Состояние для текущего отзыва
  const [currentIndex, setCurrentIndex] = useState(0);
  // Состояние для анимации таймера
  const [timerSeconds, setTimerSeconds] = useState(15);
  // Флаг, играет ли видео
  const [isPlaying, setIsPlaying] = useState(false);
  // Направление анимации: 1 - вперед, -1 - назад
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  // Варианты для анимации изображения
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.2,
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        duration: 0.5,
      }
    })
  };
  
  // Варианты для анимации текста
  const textVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.2,
        delay: 0.2
      }
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.4
      }
    })
  };

  // Эффект для анимации таймера видео
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          // Уменьшаем секунды
          const newSeconds = prev - 1;
          // Если дошли до 0, возвращаемся к 15
          if (newSeconds < 0) {
            return 15;
          }
          return newSeconds;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Форматирование времени
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Обработчик нажатия на кнопку плей
  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  // Обработчик нажатия на стрелки для навигации
  const handleNavigation = (direction: 'prev' | 'next') => {
    const newDirection = direction === 'next' ? 1 : -1;
    setSlideDirection(newDirection);
    
    if (direction === 'prev') {
      setCurrentIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1));
    } else {
      setCurrentIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }
  };

  // Получаем текущий отзыв
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1376px] mx-auto relative">
          {/* Основной контейнер */}
          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Левая часть с изображением */}
            <div className="relative w-full md:w-[541px] h-[662px] overflow-hidden">
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={slideDirection}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <img 
                    className="w-full h-[662px] rounded-[30px] object-cover" 
                    src={currentTestimonial.image} 
                    alt={`Отзыв от ${currentTestimonial.name}`} 
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Блок с таймером видео */}
              <div className="absolute left-[40px] top-[40px] bg-white rounded-[50px] h-12 w-28 flex items-center justify-center group cursor-pointer hover:bg-gray-50 transition-colors z-10" onClick={togglePlay}>
                <div className={`w-4 h-4 mr-2 ${isPlaying ? 'opacity-60' : ''} transition-opacity`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {isPlaying ? (
                      // Пауза иконка
                      <path d="M5.33333 3.33333H7.33333V12.6667H5.33333V3.33333ZM8.66667 3.33333H10.6667V12.6667H8.66667V3.33333Z" stroke="#666666" />
                    ) : (
                      // Плей иконка
                      <path d="M4.33333 4.39331V11.5999C4.33333 12.1599 4.93333 12.4933 5.4 12.2266L11.0667 8.62664C11.5333 8.35997 11.5333 7.69331 11.0667 7.42664L5.4 3.82664C4.93333 3.52664 4.33333 3.85997 4.33333 4.39331Z" stroke="#666666" />
                    )}
                  </svg>
                </div>
                <span className={`text-zinc-900 text-base font-normal ${isPlaying ? 'animate-pulse' : ''}`}>
                  {isPlaying ? formatTime(timerSeconds) : "02:15"}
                </span>
              </div>
              
              {/* Кнопка воспроизведения */}
              <div className="absolute right-[40px] bottom-[40px] flex items-center z-10">
                <button 
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative hover:bg-gray-50 transition-colors"
                  onClick={togglePlay}
                >
                  <div className={`w-16 h-16 absolute inset-0 opacity-20 rounded-full border border-white ${isPlaying ? 'animate-none' : 'animate-ping'}`}></div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {isPlaying ? (
                      // Пауза иконка
                      <path d="M8 5H10V19H8V5ZM14 5H16V19H14V5Z" stroke="#182E45" strokeWidth="2" />
                    ) : (
                      // Плей иконка, направлена вправо
                      <path d="M8 5V19L19 12L8 5Z" stroke="#182E45" strokeWidth="2" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Правая часть с текстом отзыва */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-gray-950 mb-16">Отзывы клиентов</h2>
              
              {/* Навигация слайдера */}
              <div className="flex items-center mb-12">
                <button 
                  className="w-12 h-12 rounded-full border border-zinc-900/10 flex items-center justify-center mr-4 hover:bg-gray-100 transition-colors transform active:scale-95"
                  onClick={() => handleNavigation('prev')}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M5.94 2.72L10.72 7.5L5.94 12.28" stroke="#182E45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button 
                  className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4 hover:bg-indigo-700 transition-colors transform active:scale-95"
                  onClick={() => handleNavigation('next')}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.94 2.72L10.72 7.5L5.94 12.28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="text-zinc-900 text-base font-normal group transition-opacity">
                  <span className="group-hover:text-indigo-600 transition-colors">{currentIndex + 1}</span>
                  <span className="text-zinc-900/50">/{testimonials.length}</span>
                </span>
              </div>
              
              {/* Блок с текстом отзыва */}
              <div className="bg-gray-100 rounded-[30px] p-12 relative overflow-hidden">
                <div className="absolute top-16 left-16 opacity-10">
                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.84V24H11.2V12.84H3.73333C3.73333 5.72 9.33333 1.8 11.2 0H5.6C2.24 2.4 0 7.56 0 12.84ZM16.8 12.84V24H28V12.84H20.5333C20.5333 5.72 26.1333 1.8 28 0H22.4C19.04 2.4 16.8 7.56 16.8 12.84Z" fill="#333333" />
                  </svg>
                </div>
                
                <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                  <motion.div 
                    key={currentIndex}
                    custom={slideDirection}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-center max-w-[541px] mx-auto relative"
                  >
                    <p className="text-lg text-zinc-900/70 mb-14 leading-relaxed">
                      {currentTestimonial.text}
                    </p>
                    <div className="text-lg text-zinc-900/70">
                      <p className="font-medium">{currentTestimonial.name}</p>
                      <p>{currentTestimonial.position}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute bottom-16 right-16 opacity-10">
                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.84V24H11.2V12.84H3.73333C3.73333 5.72 9.33333 1.8 11.2 0H5.6C2.24 2.4 0 7.56 0 12.84ZM16.8 12.84V24H28V12.84H20.5333C20.5333 5.72 26.1333 1.8 28 0H22.4C19.04 2.4 16.8 7.56 16.8 12.84Z" fill="#333333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
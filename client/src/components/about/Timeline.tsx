import React from 'react';
import { AnimatedItem } from '@/components/ui/animated-item';
import { AnimatedSection } from '@/components/ui/animated-section';

// Интерфейс для определения типа достижения
interface Achievement {
  year: string;
  title: string;
  items: string[];
}

export default function Timeline() {
  // Массив достижений по годам
  const achievements: Achievement[] = [
    {
      year: '2020',
      title: 'Достижения 2020 года',
      items: [
        'Запустили первый ИИ-сервис для анализа медицинских изображений',
        'Провели пилотный проект с 5 медицинскими учреждениями',
        'Получили первый патент на технологию обработки медицинских изображений'
      ]
    },
    {
      year: '2021',
      title: 'Достижения 2021 года',
      items: [
        'Расширили линейку продуктов до 3 сервисов',
        'Начали сотрудничество с 15 клиниками по всей России',
        'Привлекли первые инвестиции на развитие технологий'
      ]
    },
    {
      year: '2022',
      title: 'Достижения 2022 года',
      items: [
        'Создали технологию для 3D-моделирования медицинских изображений',
        'Получили сертификацию ISO для наших продуктов',
        'Запустили образовательную программу для врачей'
      ]
    },
    {
      year: '2023',
      title: 'Достижения 2023 года',
      items: [
        'Расширили присутствие на международный рынок',
        'Обработали более 1 миллиона исследований',
        'Выпустили мобильное приложение для врачей'
      ]
    },
    {
      year: '2024',
      title: 'Достижения 2024 года',
      items: [
        'Обновили платформу с использованием новейших технологий ИИ',
        'Достигли показателя в 21 регион присутствия',
        'Запустили центр инноваций и исследований'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#182E45] mb-4 font-['Poppins']">
              5 лет создаём инновации
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Наша история - это путь непрерывного развития и внедрения передовых технологий в медицину
            </p>
          </div>
          
          {/* Временная шкала */}
          <div className="relative">
            {/* Горизонтальная линия */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-200 z-0"></div>
            
            {/* Мобильная вертикальная линия */}
            <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-gray-200 z-0"></div>
            
            {/* Годы с достижениями */}
            <div className="flex flex-col md:flex-row md:justify-between relative z-10">
              {achievements.map((achievement, index) => (
                <AnimatedItem 
                  key={achievement.year} 
                  animation="fadeIn" 
                  delay={0.2 * index}
                  className="mb-16 md:mb-0 relative"
                >
                  <div className="flex md:flex-col items-start md:items-center">
                    {/* Год с кружком на линии */}
                    <div className="flex flex-col items-center relative">
                      <div className="w-16 h-16 rounded-full bg-[#3444E4] text-white flex items-center justify-center text-2xl font-bold mb-2 md:mb-4 transform hover:scale-110 transition-transform duration-300">
                        {achievement.year}
                      </div>
                      
                      {/* Вертикальная линия до контента на мобильных устройствах */}
                      <div className="md:hidden absolute top-16 left-8 w-1 h-full bg-gray-200 -z-10"></div>
                    </div>
                    
                    {/* Контент с достижениями - для мобильных смещен вправо */}
                    <div className="ml-8 md:ml-0 md:max-w-[260px]">
                      <h3 className="text-xl font-bold text-[#182E45] mb-4 mt-2 md:mt-0 md:text-center">
                        {achievement.title}
                      </h3>
                      <ul className="space-y-2 list-disc pl-5">
                        {achievement.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedItem } from '@/components/ui/animated-item';

export default function RegistrySection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-[1376px] h-96 mx-auto relative">
          <div className="w-full h-96 absolute bg-[#182E45] rounded-[30px]" />
          
          {/* Реестр ПО */}
          <AnimatedItem animation="slideUp" delay={0.1}>
            <div className="left-[68px] top-[70px] absolute text-white text-5xl font-bold font-['Poppins']">Реестр ПО</div>
          </AnimatedItem>
          
          <AnimatedItem animation="slideUp" delay={0.3}>
            <div className="w-[515px] left-[68px] top-[160px] absolute opacity-70 text-white text-lg font-normal font-['Poppins'] leading-relaxed">
              Компания внедрила и активно использует ИИ-сервисы для анализа медицинских изображений, включая маммограммы, флюорограммы, рентгенограммы, а также данные компьютерной томографии.
            </div>
          </AnimatedItem>
          
          <AnimatedItem animation="slideUp" delay={0.5}>
            <div className="w-40 h-12 left-[68px] top-[300px] absolute bg-white rounded-[100px] border border-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-300 group">
              <span className="text-gray-950 text-base font-normal font-['Inter'] leading-relaxed mr-2">Подробнее</span>
              <ArrowRight className="w-4 h-4 text-gray-950 transition-transform duration-300 transform group-hover:translate-x-1" />
            </div>
          </AnimatedItem>
          
          {/* Сертификат ISO */}
          <AnimatedItem animation="slideUp" delay={0.2}>
            <div className="left-[766px] top-[70px] absolute text-white text-5xl font-bold font-['Poppins']">Сертификат ISO</div>
          </AnimatedItem>
          
          <AnimatedItem animation="slideUp" delay={0.4}>
            <div className="w-[515px] left-[766px] top-[160px] absolute opacity-70 text-white text-lg font-normal font-['Poppins'] leading-relaxed">
              Продукты компании, оснащенные регистрационными удостоверениями, успешно включены в перечень рекомендованных отечественных медицинских изделий на основе искусственного интеллекта.
            </div>
          </AnimatedItem>
          
          <AnimatedItem animation="slideUp" delay={0.6}>
            <div className="w-40 h-12 left-[766px] top-[300px] absolute bg-white rounded-[100px] border border-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-300 group">
              <span className="text-gray-950 text-base font-normal font-['Inter'] leading-relaxed mr-2">Подробнее</span>
              <ArrowRight className="w-4 h-4 text-gray-950 transition-transform duration-300 transform group-hover:translate-x-1" />
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
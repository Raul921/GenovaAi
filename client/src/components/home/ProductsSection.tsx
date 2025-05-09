import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-[1376px] mx-auto">
          {/* Верхний ряд */}
          <div className="flex gap-6 mb-8">
            {/* Заголовок с вертикальной линией */}
            <div className="flex items-start relative mr-10">
              <div className="w-2 h-36 rounded-full bg-gradient-to-b from-[#206EF3] to-[#39B8D8]"></div>
              <div className="ml-6">
                <h2 className="text-5xl font-bold">Продукты</h2>
                <h2 className="text-5xl font-bold text-[#206EF3]">GENOVA™</h2>
              </div>
            </div>
            
            {/* Основная панель с текстом */}
            <div className="relative flex-1">
              <div className="bg-[#E7F0EE] rounded-[30px] p-8 relative z-10 w-[541px] h-[341px] ml-60 transition-all duration-500 hover:shadow-xl group overflow-hidden">
                <div className="absolute w-[300px] h-[300px] bg-[#4F46E5] rounded-full -bottom-[200px] -right-[150px] opacity-0 group-hover:opacity-5 transition-all duration-700 group-hover:scale-150"></div>
                <div className="absolute w-[100px] h-[100px] bg-[#6366F1] rounded-full -top-[50px] -left-[50px] opacity-0 group-hover:opacity-10 transition-all duration-700 group-hover:scale-150"></div>
                <p className="text-lg text-gray-700 max-w-[480px]">
                  ИИ-сервисы помогают достичь стратегических целей, выполняя показатели по Национальному проекту, сокращая финансовые затраты за счет улучшения качества диагностики и ухода, а также экономя время специалистов путем автоматизации измерений.
                </p>
                <button className="mt-8 flex items-center justify-center gap-2 bg-[#4F46E5] text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.5)] group/btn relative overflow-hidden">
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-[-2px]">Подробнее</span>
                  <div className="relative z-10 overflow-hidden w-4">
                    <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-[5px] group-hover/btn:opacity-0" />
                    <ArrowRight className="h-4 w-4 transition-all duration-300 absolute top-0 translate-x-[-20px] opacity-0 group-hover/btn:translate-x-[0px] group-hover/btn:opacity-100" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] via-[#4038c7] to-[#3730a3] group-hover/btn:bg-[length:200%_100%] transition-all duration-700 group-hover/btn:bg-[position:100%_0] bg-[position:0_0] bg-[length:100%_100%]"></div>
                </button>
              </div>
              
              {/* Рамка убрана */}
            </div>
            
            {/* Синяя панель стратегических целей */}
            <div className="w-[262px] h-[341px] bg-[#4F46E5] rounded-[30px] p-6 text-white relative transition-all duration-500 hover:shadow-xl group overflow-hidden">
              <div className="absolute w-20 h-20 rounded-full bg-white/10 top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute w-32 h-32 rounded-full bg-white/5 -bottom-10 -left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>
              <div className="absolute w-full h-full bg-[#3d37b3] top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-[-1] rounded-[30px]"></div>
              <h3 className="text-xl font-bold mt-4 text-center">Стратегические<br/>цели</h3>
              <p className="text-center mt-4 mb-4">
                Ускоряет и повышает<br/>точность анализа<br/>данных.
              </p>
              <div className="mt-4 flex justify-center group/circle">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-500 group-hover/circle:shadow-[0_0_20px_rgba(255,255,255,0.3)] relative">
                  <div className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover/circle:scale-100 transition-transform duration-500 origin-center"></div>
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center absolute top-0 left-0 group-hover/circle:animate-ping opacity-0 group-hover/circle:opacity-30"></div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500 group-hover/circle:rotate-180 relative z-10">
                    <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="#182E45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Нижний ряд с карточками */}
          <div className="grid grid-cols-5 gap-6">
            {/* Карточка 1 */}
            <div className="bg-gray-100 rounded-[30px] p-6 text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">5 лет на рынке<br/>на рынке</h3>
              <p className="text-gray-600">
                Разрабатываем и<br/>внедряем<br/>ИИ-сервисы
              </p>
            </div>
            
            {/* Карточка 2 */}
            <div className="bg-gray-100 rounded-[30px] p-6 text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">+5000<br/>врачей</h3>
              <p className="text-gray-600">
                Используют<br/>продукты<br/>компании
              </p>
            </div>
            
            {/* Карточка 3 */}
            <div className="bg-gray-100 rounded-[30px] p-6 text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">10.000.000<br/>исследований</h3>
              <p className="text-gray-600">
                Обработали<br/>ИИ-алгоритмы
              </p>
            </div>
            
            {/* Карточка 4 */}
            <div className="bg-gray-100 rounded-[30px] p-6 text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">6<br/>ИИ-сервисов</h3>
              <p className="text-gray-600">
                Комплексная<br/>диагностика и уход<br/>за пациентом
              </p>
            </div>
            
            {/* Карточка 5 */}
            <div className="bg-gray-100 rounded-[30px] p-6 text-center relative">
              <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold mb-4">14<br/>регионов</h3>
              <p className="text-gray-600">
                Повышает качество<br/>учреждений с<br/>ИИ-сервисами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
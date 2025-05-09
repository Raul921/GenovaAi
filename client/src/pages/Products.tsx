import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  BarChart, 
  Users, 
  Calendar, 
  ShoppingCart, 
  Mail, 
  Shield, 
  Check,
  Plus,
  X
} from 'lucide-react';
import { AnimatedItem } from '@/components/ui/animated-item';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from '@/components/common/ContactForm';


export default function Products() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with breadcrumb */}
      <div className="w-full px-4 pt-3 pb-16">
        <div className="max-w-[1376px] mx-auto">
          <div className="relative w-full rounded-[30px] overflow-hidden bg-[#182E45] p-8 md:p-12 h-[640px]">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Круглые элементы */}
              <div className="animate-float absolute w-16 h-16 rounded-full bg-white opacity-3 top-[15%] left-[10%]"></div>
              <div className="animate-float-delay absolute w-24 h-24 rounded-full bg-white opacity-3 top-[45%] left-[25%]"></div>
              <div className="animate-float-slow absolute w-20 h-20 rounded-full bg-white opacity-3 top-[20%] right-[15%]"></div>
              <div className="animate-float-slower absolute w-14 h-14 rounded-full bg-white opacity-3 top-[70%] right-[10%]"></div>
              <div className="animate-pulse-slow absolute w-32 h-32 rounded-full bg-white opacity-3 bottom-[10%] left-[5%]"></div>
              
              {/* Медицинские элементы - новые анимации */}
              {/* Стетоскоп */}
              <div className="absolute top-[25%] right-[30%] w-24 h-24 opacity-5">
                <svg width="96" height="96" viewBox="0 0 24 24" fill="white">
                  <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17Z" />
                  <path d="M12,3C10.73,3 9.6,3.8 9.18,5H5A2,2 0 0,0 3,7V13A2,2 0 0,0 5,15H7V17A2,2 0 0,0 9,19H15A2,2 0 0,0 17,17V15H19A2,2 0 0,0 21,13V7A2,2 0 0,0 19,5H14.82C14.4,3.8 13.27,3 12,3Z" />
                </svg>
              </div>
              
              {/* Медицинский крест - пульсирующий */}
              <div className="animate-pulse-slow absolute top-[60%] left-[20%] opacity-5">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
                  <path d="M9,7V11H5V13H9V17H11V13H15V11H11V7H9Z" />
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                </svg>
              </div>
              
              {/* Таблетка - вращающаяся */}
              <div className="animate-rotate-slow absolute top-[15%] left-[35%] opacity-5">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                  <path d="M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.56 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.56,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29Z" />
                  <path d="M7.05,14.5L14.5,7.05L16.95,9.5L9.5,16.95L7.05,14.5Z" fill="#3444E4" />
                </svg>
              </div>
              
              {/* Микроскоп */}
              <div className="absolute top-[10%] left-[60%] opacity-5">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                  <path d="M12,17V15H13.5A1.5,1.5 0 0,0 15,13.5A1.5,1.5 0 0,0 13.5,12H9.5A1.5,1.5 0 0,0 8,13.5A1.5,1.5 0 0,0 9.5,15H11V17H7A2,2 0 0,0 5,19V21H19V19A2,2 0 0,0 17,17H12M9.5,9C12,9 14,11 14,13.5C14,14.31 13.76,15.07 13.35,15.73L15.81,18.19L14.39,19.61L11.93,17.15C11.27,17.55 10.5,17.81 9.7,17.81C7.2,17.81 5.2,15.81 5.2,13.31C5.2,10.81 7.2,9 9.5,9M9.5,11C8.33,11 7.2,12.12 7.2,13.5C7.2,14.88 8.32,16 9.7,16C11.08,16 12.2,14.88 12.2,13.5C12.2,12.12 11.07,11 9.5,11Z" />
                </svg>
              </div>
              
              {/* ДНК анимация */}
              <div className="absolute bottom-[20%] right-[15%] w-24 h-48 opacity-5">
                <div className="animate-float-slow absolute w-full h-full">
                  {[...Array(10)].map((_, i) => (
                    <div key={i}>
                      <div className="absolute h-1 bg-white rounded-full"
                        style={{
                          width: i % 2 === 0 ? '50%' : '50%',
                          left: i % 2 === 0 ? '0' : '50%',
                          top: `${i * 10}%`,
                          transform: `rotate(${i % 2 === 0 ? '-15deg' : '15deg'})`
                        }}
                      ></div>
                      <div 
                        className="absolute w-2 h-2 rounded-full bg-white"
                        style={{
                          left: i % 2 === 0 ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                          top: `calc(${i * 10}% - 4px)`
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Медицинская диаграмма */}
              <div className="absolute top-[42%] right-[12%] w-32 h-32 opacity-5">
                <svg width="128" height="128" viewBox="0 0 24 24" fill="white">
                  <path d="M19,3H14V5H19V18L14,18V20H19A2,2 0 0,0 21,18V5A2,2 0 0,0 19,3M10,8H5V10H10V20L5,20V22H10A2,2 0 0,0 12,20V10A2,2 0 0,0 10,8Z" />
                </svg>
              </div>
            </div>
            
            {/* Breadcrumb navigation */}
            <div className="absolute top-6 left-6">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 rounded-full bg-[#3948E5] mr-2"></div>
                <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Главная
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-black font-medium">Продукты</span>
              </div>
            </div>
            
            <div className="flex flex-col items-start justify-between h-full relative pt-16 md:pt-20">
              <AnimatedItem animation="fadeIn" delay={0.3}>
                <div className="mt-auto">
                  <h1 className="font-['Poppins'] text-[48px] md:text-[52px] font-bold leading-tight text-white mb-6">
                    Инновационная<br/> медицина с <br/> использованием ИИ
                  </h1>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto mb-6">
                  <div className="w-60 h-48 relative group overflow-hidden">
                    {/* Фоновая анимация с волнами */}
                    <div className="absolute inset-0 opacity-10">
                      {/* Волнистые линии */}
                      <div className="animate-wave-1 absolute w-full h-[10px] bg-white/40 top-[20%] rounded-full"></div>
                      <div className="animate-wave-2 absolute w-full h-[8px] bg-white/30 top-[40%] rounded-full"></div>
                      <div className="animate-wave-3 absolute w-full h-[12px] bg-white/50 top-[60%] rounded-full"></div>
                      <div className="animate-wave-4 absolute w-full h-[6px] bg-white/20 top-[80%] rounded-full"></div>
                      
                      {/* Базовая анимация */}
                      <div className="animate-pulse absolute w-20 h-20 rounded-full bg-white top-[-20px] left-[-20px]"></div>
                      <div className="animate-pulse-slow absolute w-16 h-16 rounded-full bg-white bottom-[-10px] right-[-10px]"></div>
                    </div>
                    
                    <div className="w-60 h-48 left-0 top-0 absolute bg-[#3444E4] rounded-[30px] group-hover:bg-[#2a36b7] transition-all duration-300 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-transparent">
                      {/* Анимированные круги при наведении */}
                      <div className="absolute w-32 h-32 rounded-full bg-[#4450e9]/20 top-[-100px] right-[-50px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-20"></div>
                      <div className="absolute w-40 h-40 rounded-full bg-[#4450e9]/20 bottom-[-120px] left-[-80px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-[-30px]"></div>
                    </div>
                    <div className="w-56 left-[24px] top-[24px] absolute justify-start text-white text-2xl font-bold font-['Poppins'] leading-[140%]">
                      Узнать подробнее<br/>о нашей компании
                    </div>
                    
                    {/* Центрированная стрелка */}
                    <div className="absolute right-6 bottom-6 flex items-center justify-center">
                      <div className="w-10 h-10 opacity-10 rounded-[100px] border border-white"></div>
                      <div className="absolute transition-transform duration-300 group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <Link href="/about" className="absolute inset-0" aria-label="Узнать подробнее о нашей компании"></Link>
                  </div>
                  
                  <div className="w-60 h-48 relative group overflow-hidden">
                    {/* Фоновая анимация с точками */}
                    <div className="absolute inset-0 opacity-5">
                      {/* Сетка точек */}
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex justify-around">
                          {[...Array(5)].map((_, j) => (
                            <div 
                              key={j} 
                              className="w-2 h-2 rounded-full bg-white opacity-60"
                              style={{
                                position: 'absolute',
                                top: `${i * 20 + 10}%`,
                                left: `${j * 20 + 10}%`,
                                animation: `pulse ${2 + (i+j)/2}s infinite alternate`
                              }}
                            />
                          ))}
                        </div>
                      ))}
                      
                      {/* Базовая анимация */}
                      <div className="animate-float-delay absolute w-20 h-20 rounded-full bg-white top-[10%] left-[10%]"></div>
                      <div className="animate-float-slow absolute w-14 h-14 rounded-full bg-white bottom-[10%] right-[10%]"></div>
                    </div>
                    
                    <div className="w-60 h-48 left-0 top-0 absolute bg-white/10 hover:bg-white/15 rounded-[30px] backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:border-white/50 overflow-hidden">
                      {/* Анимированные круги при наведении */}
                      <div className="absolute w-32 h-32 rounded-full bg-white/10 top-[-100px] right-[-50px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-20"></div>
                      <div className="absolute w-40 h-40 rounded-full bg-white/10 bottom-[-120px] left-[-80px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-[-30px]"></div>
                    </div>
                    <div className="w-44 left-[24px] top-[24px] absolute justify-start text-white text-2xl font-bold font-['Poppins'] leading-[140%]">
                      Связаться<br/>с нами
                    </div>
                    
                    {/* Центрированная стрелка */}
                    <div className="absolute right-6 bottom-6 flex items-center justify-center">
                      <div className="w-10 h-10 opacity-10 rounded-[100px] border border-white"></div>
                      <div className="absolute transition-transform duration-300 group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <Link href="/contact" className="absolute inset-0" aria-label="Связаться с нами"></Link>
                  </div>
                </div>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>

      {/* ИИ-сервисы помогают */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[38px] font-bold font-['Poppins'] mb-10">
              <span className="text-[#3444E4]">ИИ-сервисы</span> помогают
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Карточка 1 */}
            <div className="bg-gray-50 rounded-[20px] p-8 text-center flex flex-col items-center min-h-[260px]">
              <div className="w-[50px] h-[50px] bg-[#3444E4] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Экономия время специалистов</h3>
              <p className="text-gray-600 text-center">
                автоматизируют измерения, контроль качества, оформление протоколов и направление пациентов.
              </p>
            </div>
            
            {/* Карточка 2 */}
            <div className="bg-gray-50 rounded-[20px] p-8 text-center flex flex-col items-center min-h-[260px]">
              <div className="w-[50px] h-[50px] bg-[#3444E4] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Сократить финансовые затраты</h3>
              <p className="text-gray-600 text-center">
                Повышают качество диагностики и ухода, снижая лишние затраты.
              </p>
            </div>
            
            {/* Карточка 3 */}
            <div className="bg-gray-50 rounded-[20px] p-8 text-center flex flex-col items-center min-h-[260px]">
              <div className="w-[50px] h-[50px] bg-[#3444E4] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Показывают точный результат</h3>
              <p className="text-gray-600 text-center">
                направлены на модернизацию системы здравоохранения и внедрение передовых технологий
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Продукты GENOVA™ */}
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
                  {/* Анимационные элементы для Рентгенографии */}
                  <div className="absolute w-[300px] h-[300px] bg-[#4F46E5] rounded-full -bottom-[200px] -right-[150px] opacity-0 group-hover:opacity-5 transition-all duration-700 group-hover:scale-150"></div>
                  <div className="absolute w-[100px] h-[100px] bg-[#6366F1] rounded-full -top-[50px] -left-[50px] opacity-0 group-hover:opacity-10 transition-all duration-700 group-hover:scale-150"></div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none" style={{ 
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='10' y='10' width='80' height='80' fill='none' stroke='%234F46E5' stroke-width='2'/%3E%3Cline x1='10' y1='40' x2='90' y2='40' stroke='%234F46E5' stroke-width='1'/%3E%3Cline x1='10' y1='60' x2='90' y2='60' stroke='%234F46E5' stroke-width='1'/%3E%3C/svg%3E\")",
                    backgroundSize: "50px",
                    backgroundRepeat: "repeat"
                  }}></div>
                  <h3 className="text-2xl font-bold text-[#182E45] mb-4">Рентгенография ОГК и флюорография</h3>
                  <p className="text-lg text-gray-700 max-w-[480px]">
                    Более детальное исследование, при котором с помощью рентгеновских лучей создается двухмерное изображение органов грудной клетки. Применяется для диагностики заболеваний легких, сердца, ребер и сосудов.
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
              </div>
              
              {/* Синяя панель КТ органов грудной клетки */}
              <div className="w-[262px] h-[341px] bg-[#4F46E5] rounded-[30px] p-6 text-white relative transition-all duration-500 hover:shadow-xl group overflow-hidden">
                {/* Анимационные элементы для КТ */}
                <div className="absolute w-20 h-20 rounded-full bg-white/10 top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute w-32 h-32 rounded-full bg-white/5 -bottom-10 -left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>
                <div className="absolute w-full h-full bg-[#3d37b3] top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-[-1] rounded-[30px]"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none" style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='white' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='35' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='15' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
                  backgroundSize: "80px",
                  backgroundRepeat: "repeat"
                }}></div>
                <h3 className="text-xl font-bold mt-4 text-center">КТ органов<br/>грудной клетки</h3>
                <p className="text-center mt-4 mb-4">
                  Это высокоточный метод диагностики, использующий рентгеновские лучи и компьютерную обработку для создания детальных послойных изображений.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Карточка 1 - КТ головного мозга */}
              <div className="bg-gray-100 rounded-[30px] p-6 text-center relative group">
                <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 2a8 8 0 0 0-8 8v1a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-1a8 8 0 0 0-8-8Z" />
                    <path d="M12 16v4" />
                    <path d="M8 20h8" />
                    <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gray-100 rounded-[30px] p-6 z-[-1] transition-all duration-300 group-hover:bg-gray-200"></div>
                <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 group-hover:opacity-5 transition-all duration-300" style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 75c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35z' fill='%234F46E5'/%3E%3Cpath d='M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 55c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z' fill='%234F46E5'/%3E%3C/svg%3E\")"
                }}></div>
                <h3 className="text-xl font-bold mb-4">КТ головного<br/>мозга</h3>
                <p className="text-gray-600">
                  Разрабатываем и<br/>внедряем<br/>ИИ-сервисы
                </p>
              </div>
              
              {/* Карточка 2 - Маммография */}
              <div className="bg-gray-100 rounded-[30px] p-6 text-center relative group">
                <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M6 11V9a6 6 0 0 1 12 0v2" />
                    <path d="M14 17.5V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.5" />
                    <path d="M18 11h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6Z" />
                    <path d="M4 11H2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-6Z" />
                    <path d="M6 17h12" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gray-100 rounded-[30px] p-6 z-[-1] transition-all duration-300 group-hover:bg-gray-200"></div>
                <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 group-hover:opacity-5 transition-all duration-300" style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='40' r='15' fill='%234F46E5' opacity='0.2'/%3E%3Ccircle cx='50' cy='40' r='10' fill='%234F46E5' opacity='0.3'/%3E%3Cpath d='M45 55c-10 5-20 20-20 30h50c0-10-10-25-20-30' fill='%234F46E5' opacity='0.1'/%3E%3C/svg%3E\")"
                }}></div>
                <h3 className="text-xl font-bold mb-4">Маммография</h3>
                <p className="text-gray-600">
                  Обнаружения<br/>опухолей, кист и<br/>кальцинатов
                </p>
              </div>
              
              {/* Карточка 3 - Платформа для врачей */}
              <div className="bg-gray-100 rounded-[30px] p-6 text-center relative group">
                <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gray-100 rounded-[30px] p-6 z-[-1] transition-all duration-300 group-hover:bg-gray-200"></div>
                <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 group-hover:opacity-5 transition-all duration-300" style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 70l10-40h5l5 20h5l5-20h5l10 40' stroke='%234F46E5' stroke-width='2' fill='none'/%3E%3Ccircle cx='30' cy='30' r='10' fill='%234F46E5' opacity='0.1'/%3E%3Ccircle cx='70' cy='30' r='10' fill='%234F46E5' opacity='0.1'/%3E%3C/svg%3E\")"
                }}></div>
                <h3 className="text-xl font-bold mb-4">Платформа для<br/>врачей</h3>
                <p className="text-gray-600">
                  Консультации и<br/>вопросы между<br/>врачами
                </p>
              </div>
              
              {/* Карточка 4 - Мониторинг */}
              <div className="bg-gray-100 rounded-[30px] p-6 text-center relative group">
                <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" />
                    <path d="M12 19v.01" />
                    <path d="M12 5v.01" />
                    <path d="M5 12h.01" />
                    <path d="M19 12h.01" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gray-100 rounded-[30px] p-6 z-[-1] transition-all duration-300 group-hover:bg-gray-200"></div>
                <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 group-hover:opacity-5 transition-all duration-300" style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%234F46E5' stroke-width='2' fill='none'/%3E%3Cpath d='M50 30v20l10 10' stroke='%234F46E5' stroke-width='2' fill='none'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%234F46E5'/%3E%3C/svg%3E\")"
                }}></div>
                <h3 className="text-xl font-bold mb-4">Мониторинг</h3>
                <p className="text-gray-600">
                  ИИ на основе<br/>анализа палаты<br/>пациентов
                </p>
              </div>
              
              {/* Карточка 5 - Лабораторная диагностика */}
              <div className="bg-gray-100 rounded-[30px] p-6 text-center relative group">
                <div className="w-12 h-12 mx-auto mb-6 bg-[#4F46E5] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M5 21h14" />
                    <path d="M6 18h2" />
                    <path d="M12 18h6" />
                    <path d="M6 14h2" />
                    <path d="M12 14h6" />
                    <path d="M6 10h2" />
                    <path d="M12 10h6" />
                    <path d="M6 6h2" />
                    <path d="M12 6h6" />
                    <path d="M14 3a2 2 0 0 0-2 2" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gray-100 rounded-[30px] p-6 z-[-1] transition-all duration-300 group-hover:bg-gray-200"></div>
                <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 group-hover:opacity-5 transition-all duration-300" style={{ 
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='10' fill='%234F46E5' opacity='0.1'/%3E%3Cpath d='M40 35h-10v40h40v-40h-10' stroke='%234F46E5' stroke-width='2' fill='none'/%3E%3Cpath d='M45 45v20m10-20v20m-20-20v20' stroke='%234F46E5' stroke-width='1' stroke-dasharray='2,2'/%3E%3C/svg%3E\")"
                }}></div>
                <h3 className="text-xl font-bold mb-4">Лабораторная<br/>диагностика</h3>
                <p className="text-gray-600">
                  ИИ анализ на мазке<br/>крови и костного<br/>мозга
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Инновационные технологии для точной диагностики" */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row max-w-[1280px] mx-auto">
            <div className="w-full lg:w-1/3 pr-10 relative">
              <div className="w-1 h-[120px] absolute left-0 top-0 origin-top-left bg-slate-800"></div>
              <div className="pt-8 pl-10">
                <h2 className="text-gray-950 text-4xl font-bold font-['Poppins'] leading-[50.40px]">
                  Инновационные технологии<br/>
                  <span className="text-blue-600">для точной диагностики</span>
                </h2>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
              <Accordion type="single" collapsible className="w-full rounded-lg overflow-hidden">
                <AccordionItem value="item-1" className="border-b bg-gray-50 mb-2">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-xl font-bold text-left">Инновации в диагностике</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Наша ИИ-платформа GENOVA использует передовые алгоритмы машинного обучения, 
                      обработавшие более 10 миллионов исследований. Это позволяет выявлять патологии 
                      на ранних стадиях с точностью до 96%, что значительно превосходит средние показатели 
                      традиционных методов диагностики.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b bg-gray-50 mb-2">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-xl font-bold text-left">Доступность для врачей</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Мы сделали нашу систему интуитивно понятной для медицинских специалистов любого уровня компьютерной грамотности. 
                      Врач может начать использовать GENOVA в своей практике без длительного обучения, 
                      получая результаты анализа исследований в течение нескольких минут, а не часов или дней.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b bg-gray-50 mb-2">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-xl font-bold text-left">Клиническая безопасность</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Безопасность пациентов — наш абсолютный приоритет. Вся наша система соответствует 
                      международным стандартам защиты медицинских данных (GDPR, HIPAA) и имеет сертификацию ISO 13485 
                      для медицинских изделий. Каждый алгоритм проходит многоэтапную клиническую валидацию 
                      в ведущих медицинских учреждениях.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b bg-gray-50">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-xl font-bold text-left">Постоянное совершенствование</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Наша система непрерывно обучается на новых данных, повышая точность диагностики. 
                      Квартальные обновления алгоритмов увеличивают спектр выявляемых патологий и 
                      улучшают специфичность результатов. Мы тесно сотрудничаем с медицинским сообществом, 
                      интегрируя современные научные открытия в нашу платформу.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Product 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 mb-4">
                Бизнес-аналитика
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Аналитическая платформа "BI Pro"</h2>
              <p className="text-lg text-gray-700 mb-6">
                Комплексное решение для анализа бизнес-данных, которое поможет вам принимать 
                взвешенные решения на основе актуальной информации.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Интерактивные дашборды с ключевыми показателями</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Автоматические отчеты и уведомления</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Анализ трендов и прогнозирование</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Интеграция с CRM, ERP и другими системами</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="BI Pro Analytics Platform" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-first">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Project Management System" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 mb-4">
                Управление проектами
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Система "ProjectFlow"</h2>
              <p className="text-lg text-gray-700 mb-6">
                Эффективная система для планирования, контроля и управления проектами любой сложности и масштаба.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Гибкое планирование и распределение задач</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Контроль сроков и ресурсов</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Совместная работа и коммуникация</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Расширенная аналитика и отчетность</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 mb-4">
                Управление клиентами
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CRM-система "ClientMaster"</h2>
              <p className="text-lg text-gray-700 mb-6">
                Современное решение для эффективного управления взаимоотношениями с клиентами и оптимизации продаж.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Управление контактами и сделками</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Автоматизация маркетинга и продаж</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Анализ клиентского пути и воронки продаж</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Интеграция с email, телефонией и веб-формами</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Запросить демо <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="CRM System" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Solutions by Industry */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Решения по отраслям</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Специализированные продукты, разработанные с учетом специфики различных отраслей бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Розничная торговля</h3>
              <p className="text-gray-700 mb-4">
                Комплексные решения для управления товарными запасами, автоматизации продаж и анализа
                потребительского поведения.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Подробнее</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Образование</h3>
              <p className="text-gray-700 mb-4">
                Инновационные платформы для дистанционного обучения, управления учебным процессом
                и оценки прогресса учащихся.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Подробнее</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гостиничный бизнес</h3>
              <p className="text-gray-700 mb-4">
                Системы управления бронированиями, автоматизации обслуживания гостей и аналитики
                эффективности бизнеса.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Подробнее</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Финансовый сектор</h3>
              <p className="text-gray-700 mb-4">
                Решения для управления финансовыми операциями, анализа рисков и автоматизации
                бизнес-процессов в финансовых организациях.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Подробнее</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Маркетинг и реклама</h3>
              <p className="text-gray-700 mb-4">
                Инструменты для автоматизации маркетинговых кампаний, аналитики эффективности и
                управления клиентскими коммуникациями.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Подробнее</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Информационная безопасность</h3>
              <p className="text-gray-700 mb-4">
                Продукты для защиты корпоративных данных, мониторинга безопасности и обеспечения
                соответствия нормативным требованиям.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Подробнее</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Гибкие тарифные планы</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Выберите оптимальный тарифный план, который подходит для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Стартовый</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">5 000 ₽</span>
                  <span className="text-gray-600 ml-2">/месяц</span>
                </div>
                <p className="text-gray-700">Для малого бизнеса и стартапов</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">До 5 пользователей</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Базовые функции</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">5GB хранилища</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Email-поддержка</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Выбрать план</Link>
                </Button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="border rounded-lg overflow-hidden shadow-lg border-primary">
              <div className="p-6 bg-primary">
                <h3 className="text-xl font-semibold text-white mb-2">Профессиональный</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">15 000 ₽</span>
                  <span className="text-white/80 ml-2">/месяц</span>
                </div>
                <p className="text-white/80">Для растущих компаний</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">До 25 пользователей</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Расширенные функции</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">25GB хранилища</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">API интеграция</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Выбрать план</Link>
                </Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Корпоративный</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">По запросу</span>
                </div>
                <p className="text-gray-700">Для крупных организаций</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Неограниченное число пользователей</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Все функции</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Неограниченное хранилище</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">24/7 премиум-поддержка</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Индивидуальная настройка</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Готовы начать?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Свяжитесь с нами сегодня, чтобы узнать больше о наших продуктах и получить индивидуальное предложение.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Связаться с нами <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Секция с формой обратной связи */}
      <ContactForm />

    </div>
  );
}
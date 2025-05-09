import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  Users, Building, BarChart, Target, Clock, ArrowRight, 
  ShoppingCart, Calendar, Mail, Shield, Check, Plus, X,
  ChevronDown, Phone
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedItem } from '@/components/ui/animated-item';
import ContactForm from '@/components/common/ContactForm';

export default function About() {
  return (
    <div>
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
                <span className="text-black font-medium">О компании</span>
              </div>
            </div>
            
            <div className="flex flex-col items-start justify-between h-full relative pt-16 md:pt-20">
              <AnimatedItem animation="fadeIn" delay={0.3}>
                <div className="mt-auto">
                  <h1 className="font-['Poppins'] text-[48px] md:text-[52px] font-bold leading-tight text-white mb-6">
                    О нашей<br />компании
                  </h1>
                  <p className="font-['Poppins'] text-xl font-bold leading-snug text-white/90 mb-10 max-w-xl">
                    Мы создаем инновационные решения, которые трансформируют бизнес-процессы и
                    помогают компаниям достигать новых высот.
                  </p>
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
                      Наши<br/>решения
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
                    
                    <Link href="/products" className="absolute inset-0" aria-label="Наши решения"></Link>
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
                            ></div>
                          ))}
                        </div>
                      ))}
                    </div>
                    
                    <div className="w-60 h-48 left-0 top-0 absolute bg-[#9A90F4] rounded-[30px] group-hover:bg-[#8178e2] transition-all duration-300 overflow-hidden">
                      {/* Анимированные круги при наведении */}
                      <div className="absolute w-32 h-32 rounded-full bg-[#a59bf7]/20 top-[-100px] right-[-50px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-20"></div>
                      <div className="absolute w-40 h-40 rounded-full bg-[#a59bf7]/20 bottom-[-120px] left-[-80px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-[-30px]"></div>
                    </div>
                    <div className="w-56 left-[24px] top-[24px] absolute justify-start text-white text-2xl font-bold font-['Poppins'] leading-[140%]">
                      Свяжитесь<br/>с нами
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
                    
                    <Link href="/contact" className="absolute inset-0" aria-label="Свяжитесь с нами"></Link>
                  </div>
                </div>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>

      {/* Статистические данные */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Результаты нашей работы в цифрах
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Статистика 1 */}
            <div className="w-[303px] h-[216px] rounded-[30px] bg-gray-100 flex flex-col items-center justify-center p-6">
              <div className="w-[48px] h-[46px] rounded-full bg-[#404CE5] flex items-center justify-center mb-4">
                <span className="text-white font-['Poppins'] font-bold text-[20px]">1</span>
              </div>
              <div className="text-center">
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">10.000.000</p>
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">исследований</p>
              </div>
            </div>

            {/* Статистика 2 */}
            <div className="w-[303px] h-[216px] rounded-[30px] bg-gray-100 flex flex-col items-center justify-center p-6">
              <div className="w-[48px] h-[46px] rounded-full bg-[#404CE5] flex items-center justify-center mb-4">
                <span className="text-white font-['Poppins'] font-bold text-[20px]">2</span>
              </div>
              <div className="text-center">
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">21</p>
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">регион</p>
              </div>
            </div>

            {/* Статистика 3 */}
            <div className="w-[303px] h-[216px] rounded-[30px] bg-gray-100 flex flex-col items-center justify-center p-6">
              <div className="w-[48px] h-[46px] rounded-full bg-[#404CE5] flex items-center justify-center mb-4">
                <span className="text-white font-['Poppins'] font-bold text-[20px]">3</span>
              </div>
              <div className="text-center">
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">7</p>
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">продуктов</p>
              </div>
            </div>

            {/* Статистика 4 */}
            <div className="w-[303px] h-[216px] rounded-[30px] bg-gray-100 flex flex-col items-center justify-center p-6">
              <div className="w-[48px] h-[46px] rounded-full bg-[#404CE5] flex items-center justify-center mb-4">
                <span className="text-white font-['Poppins'] font-bold text-[20px]">4</span>
              </div>
              <div className="text-center">
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">Победитель</p>
                <p className="font-['Poppins'] font-bold text-[20px] leading-[140%]">конкурса инноваций</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Инновационные технологии для точной диагностики" */}
      <section className="py-16 bg-white">
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
                <AccordionItem value="item-1" className="border-b bg-white mb-2">
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
                
                <AccordionItem value="item-2" className="border-b bg-white mb-2">
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
                
                <AccordionItem value="item-3" className="border-b bg-white mb-2">
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
                
                <AccordionItem value="item-4" className="border-b bg-white">
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

      {/* Секция "Объединяем IT и медицину" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[48px] font-bold font-['Poppins'] leading-[140%] mb-6">
              Объединяем IT и медицину
            </h2>
            <p className="text-[#B9B9B9] text-[20px] font-bold font-['Poppins'] leading-[140%]">
              Дополняем знания и опыт друг друга, чтобы разрабатывать качественные и удобные ИИ-решения
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Соединяющие линии между кругами - треугольник */}
            <div className="absolute w-full h-full inset-0 z-0 pointer-events-none">
              <div className="absolute left-1/2 top-[15%] -translate-x-1/2 w-[600px] h-[300px]">
                <svg width="100%" height="100%" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Линии соединения */}
                  <path d="M150 60 L300 200 L450 60" stroke="#6366F1" strokeWidth="3" strokeOpacity="0.15" />
                  
                  {/* Круги соединения (дополнительные маленькие точки) */}
                  <circle cx="150" cy="60" r="5" fill="#6366F1" fillOpacity="0.2" />
                  <circle cx="300" cy="200" r="5" fill="#6366F1" fillOpacity="0.2" />
                  <circle cx="450" cy="60" r="5" fill="#6366F1" fillOpacity="0.2" />
                  
                  {/* Декоративные элементы */}
                  <circle cx="180" cy="90" r="3" fill="#6366F1" fillOpacity="0.1" />
                  <circle cx="220" cy="130" r="3" fill="#6366F1" fillOpacity="0.1" />
                  <circle cx="260" cy="170" r="3" fill="#6366F1" fillOpacity="0.1" />
                  <circle cx="340" cy="170" r="3" fill="#6366F1" fillOpacity="0.1" />
                  <circle cx="380" cy="130" r="3" fill="#6366F1" fillOpacity="0.1" />
                  <circle cx="420" cy="90" r="3" fill="#6366F1" fillOpacity="0.1" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-48 h-48 bg-[#6366F1] rounded-full mx-auto mb-6 flex items-center justify-center">
                  {/* Placeholder for photo if available */}
                </div>
                <h3 className="text-xl font-bold mb-1">София Бадей</h3>
                <p className="text-gray-500">Сооснователь и руководитель стратегического развития</p>
              </div>
              
              {/* Team Member 2 - центральный круг (наверху) */}
              <div className="text-center order-first md:order-none">
                <div className="transform md:-translate-y-12 mb-6">
                  <div className="w-48 h-48 bg-[#6366F1] rounded-full mx-auto flex items-center justify-center">
                    {/* Placeholder for photo if available */}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Раул Ахвердиев</h3>
                <p className="text-gray-500">Основатель и генеральный директор</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-48 h-48 bg-[#6366F1] rounded-full mx-auto mb-6 flex items-center justify-center">
                  {/* Placeholder for photo if available */}
                </div>
                <h3 className="text-xl font-bold mb-1">Амади Бар</h3>
                <p className="text-gray-500">Технический директор, отвечающий за разработку ИИ-алгоритмов</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция "Научный совет" */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[48px] font-bold font-['Poppins'] leading-[140%] mb-6">
              Курируют научную деятельность
            </h2>
            <p className="text-[#B9B9B9] text-[20px] font-bold font-['Poppins'] leading-[140%]">
              Научный совет
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Scientific Council Member 1 */}
              <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Профессор Иванов" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">Профессор Иванов А.С.</h3>
                  <p className="text-gray-600 mb-2">Руководитель отдела медицинских исследований</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                    <li>Доктор медицинских наук, профессор</li>
                    <li>Автор 120+ научных публикаций в области медицинской диагностики</li>
                    <li>Руководитель 5 успешных исследовательских проектов в области нейрорадиологии</li>
                    <li>Член Американской ассоциации радиологов</li>
                    <li>Награждён премией "За вклад в развитие медицинской диагностики"</li>
                  </ul>
                </div>
              </div>
              
              {/* Scientific Council Member 2 */}
              <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Доктор Петрова" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">Доктор Петрова Е.М.</h3>
                  <p className="text-gray-600 mb-2">Директор по клиническим исследованиям</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                    <li>Кандидат медицинских наук</li>
                    <li>Специалист в области рентгенологии и компьютерной томографии</li>
                    <li>Автор методики ранней диагностики новообразований лёгких</li>
                    <li>Участник международных конференций по медицинской диагностике</li>
                    <li>Руководитель клинических испытаний диагностических систем</li>
                  </ul>
                </div>
              </div>
              
              {/* Scientific Council Member 3 */}
              <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Доктор Смирнов" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">Доктор Смирнов В.П.</h3>
                  <p className="text-gray-600 mb-2">Научный консультант</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                    <li>Доктор технических наук</li>
                    <li>Эксперт в области медицинской визуализации</li>
                    <li>Автор 3 патентов в области обработки медицинских изображений</li>
                    <li>Руководитель лаборатории искусственного интеллекта в медицине</li>
                    <li>Консультант ведущих медицинских центров</li>
                  </ul>
                </div>
              </div>
              
              {/* Scientific Council Member 4 */}
              <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden">
                <div className="w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Профессор Козлова" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">Профессор Козлова Н.А.</h3>
                  <p className="text-gray-600 mb-2">Руководитель направления нейрорадиологии</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                    <li>Доктор медицинских наук, профессор</li>
                    <li>Заведующий кафедрой лучевой диагностики</li>
                    <li>Автор учебника "Нейрорадиология: современные методы диагностики"</li>
                    <li>Награждена государственной премией за вклад в науку</li>
                    <li>Член редколлегии международного журнала по радиологии</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold font-['Poppins'] mb-6 text-[#182E45]">Научные кураторы</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Научный куратор 1 */}
                <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden">
                  <div className="w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Академик Соколов" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-bold font-['Poppins'] mb-2 text-[#182E45]">Академик Соколов А.В.</h3>
                    <p className="text-gray-600 font-['Poppins'] mb-2">Научный руководитель GENOVA</p>
                    <ul className="text-sm text-gray-700 font-['Poppins'] space-y-1 list-disc pl-4">
                      <li>Академик РАН, доктор медицинских и технических наук</li>
                      <li>Автор революционного метода компьютерной обработки медицинских изображений</li>
                      <li>Руководитель национальной программы по развитию ИИ в медицине</li>
                      <li>Опубликовал более 300 научных работ</li>
                      <li>Обладатель 12 международных патентов</li>
                    </ul>
                  </div>
                </div>
                
                {/* Научный куратор 2 */}
                <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden">
                  <div className="w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Профессор Громова" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-bold font-['Poppins'] mb-2 text-[#182E45]">Профессор Громова М.И.</h3>
                    <p className="text-gray-600 font-['Poppins'] mb-2">Ведущий научный консультант</p>
                    <ul className="text-sm text-gray-700 font-['Poppins'] space-y-1 list-disc pl-4">
                      <li>Доктор медицинских наук, профессор</li>
                      <li>Ведущий эксперт в области нейровизуализации</li>
                      <li>Руководитель кафедры радиологии</li>
                      <li>Автор методологии анализа диагностических изображений</li>
                      <li>Участник международных исследовательских групп</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блог секция */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold font-['Poppins'] leading-[140%] mb-6">
              Публикации и статьи
            </h2>
            <p className="text-[#B9B9B9] text-[20px] font-bold font-['Poppins'] leading-[140%]">
              Узнайте больше о нашей работе и достижениях
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Статья 1 */}
            <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/3444E4/FFFFFF?text=GENOVA" 
                  alt="Инновационная диагностика" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    Инновации
                  </span>
                  <span className="text-gray-500 text-sm">15 марта 2025</span>
                </div>
                <h3 className="text-xl font-bold font-['Poppins'] mb-3 text-[#182E45]">
                  Инновационные подходы к диагностике с помощью ИИ
                </h3>
                <p className="text-gray-600 mb-4">
                  Как искусственный интеллект меняет подходы к медицинской диагностике и помогает врачам принимать решения.
                </p>
                <a href="/blog" className="inline-flex items-center text-[#404CE5] font-medium hover:underline">
                  Читать статью <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Статья 2 */}
            <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/9A90F4/FFFFFF?text=Медицина" 
                  alt="ИИ в здравоохранении" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                    Исследования
                  </span>
                  <span className="text-gray-500 text-sm">5 марта 2025</span>
                </div>
                <h3 className="text-xl font-bold font-['Poppins'] mb-3 text-[#182E45]">
                  Врачи подтверждают: ИИ-ассистенты ускоряют диагностику
                </h3>
                <p className="text-gray-600 mb-4">
                  Согласно новому исследованию, использование систем ИИ сокращает время постановки диагноза на 47%.
                </p>
                <a href="/blog" className="inline-flex items-center text-[#404CE5] font-medium hover:underline">
                  Читать статью <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Статья 3 */}
            <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/182E45/FFFFFF?text=GENOVA" 
                  alt="Сотрудничество с клиниками" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
                    Партнерство
                  </span>
                  <span className="text-gray-500 text-sm">28 февраля 2025</span>
                </div>
                <h3 className="text-xl font-bold font-['Poppins'] mb-3 text-[#182E45]">
                  GENOVA расширяет сотрудничество с ведущими клиниками
                </h3>
                <p className="text-gray-600 mb-4">
                  Пять новых медицинских центров в разных регионах страны начали использовать ПО GENOVA для диагностики.
                </p>
                <a href="/blog" className="inline-flex items-center text-[#404CE5] font-medium hover:underline">
                  Читать статью <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                Все публикации <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция партнеров */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold font-['Poppins'] leading-[140%] mb-6">
              Развиваем медицинские технологии
            </h2>
            <p className="text-[#B9B9B9] text-[28px] font-bold font-['Poppins'] leading-[140%]">
              вместе с ведущими компаниями
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Верхний ряд партнеров */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H20V10Z" fill="#182E45"/>
                  <path d="M30 10H25V30H30V10Z" fill="#182E45"/>
                  <path d="M45 10H35V15H45V10Z" fill="#182E45"/>
                  <path d="M35 17.5H40V30H45V17.5H35Z" fill="#182E45"/>
                  <path d="M60 10H50V30H55V19H60V30H65V10H60Z" fill="#182E45"/>
                  <path d="M75 10H70V30H80V25H75V10Z" fill="#182E45"/>
                  <path d="M90 10C87.5 10 85 12.5 85 15V25C85 27.5 87.5 30 90 30H95C97.5 30 100 27.5 100 25V15C100 12.5 97.5 10 95 10H90ZM95 25H90V15H95V25Z" fill="#182E45"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10L10 20L20 30H30L20 20L30 10H20Z" fill="#3444E4"/>
                  <path d="M45 10H35V30H40V22.5H45C47.5 22.5 50 20 50 16.25C50 12.5 47.5 10 45 10ZM45 17.5H40V15H45V17.5Z" fill="#3444E4"/>
                  <path d="M65 10H55V30H65C70 30 75 25 75 20C75 15 70 10 65 10ZM65 25H60V15H65C67.5 15 70 17.5 70 20C70 22.5 67.5 25 65 25Z" fill="#3444E4"/>
                  <path d="M80 10V30H85V10H80Z" fill="#3444E4"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10C12.5 10 10 12.5 10 15V25C10 27.5 12.5 30 15 30H25C27.5 30 30 27.5 30 25V15C30 12.5 27.5 10 25 10H15ZM25 25H15V15H25V25Z" fill="#206EF3"/>
                  <path d="M45 10H35V30H40V22.5H45C47.5 22.5 50 20 50 16.25C50 12.5 47.5 10 45 10ZM45 17.5H40V15H45V17.5Z" fill="#206EF3"/>
                  <path d="M60 10H50V30H60V25H55V22.5H60V17.5H55V15H60V10Z" fill="#206EF3"/>
                  <path d="M70 10H65V30H70V10Z" fill="#206EF3"/>
                  <path d="M85 10H75V30H80V22.5H85V30H90V10H85Z" fill="#206EF3"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H15V17L25 30H30V10H25V23L15 10H20Z" fill="#9A90F4"/>
                  <path d="M45 10H35V15H40V30H45V15H50V10H45Z" fill="#9A90F4"/>
                  <path d="M62.5 10H55V30H60V22.5H62.5C67.5 22.5 72.5 20 72.5 16.25C72.5 12.5 67.5 10 62.5 10ZM62.5 17.5H60V15H62.5C63.75 15 65 15.625 65 16.25C65 16.875 63.75 17.5 62.5 17.5Z" fill="#9A90F4"/>
                </svg>
              </div>
            </div>
            
            {/* Средний ряд партнеров */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H15V17L25 30H30V10H25V23L15 10H20Z" fill="#3444E4"/>
                  <path d="M35 10V30H40V10H35Z" fill="#3444E4"/>
                  <path d="M45 10V30H50V10H45Z" fill="#3444E4"/>
                  <path d="M55 10V30H65C70 30 75 25 75 20C75 15 70 10 65 10H55ZM65 25H60V15H65C67.5 15 70 17.5 70 20C70 22.5 67.5 25 65 25Z" fill="#3444E4"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H15V22.5H20C22.5 22.5 25 20 25 16.25C25 12.5 22.5 10 20 10ZM20 17.5H15V15H20V17.5Z" fill="#206EF3"/>
                  <path d="M35 10H30V30H35V22.5H40V30H45V10H40V17.5H35V10Z" fill="#206EF3"/>
                  <path d="M50 10V30H55V10H50Z" fill="#206EF3"/>
                  <path d="M67.5 10H60V30H65V22.5H67.5C72.5 22.5 77.5 20 77.5 16.25C77.5 12.5 72.5 10 67.5 10ZM67.5 17.5H65V15H67.5C68.75 15 70 15.625 70 16.25C70 16.875 68.75 17.5 67.5 17.5Z" fill="#206EF3"/>
                  <path d="M90 10H80V30H85V22.5H90C92.5 22.5 95 20 95 16.25C95 12.5 92.5 10 90 10ZM90 17.5H85V15H90V17.5Z" fill="#206EF3"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H20C25 30 30 25 30 20C30 15 25 10 20 10ZM20 25H15V15H20C22.5 15 25 17.5 25 20C25 22.5 22.5 25 20 25Z" fill="#FF4D4D"/>
                  <path d="M40 10H35V30H40V10Z" fill="#FF4D4D"/>
                  <path d="M55 10H45V15H55V10Z" fill="#FF4D4D"/>
                  <path d="M45 17.5H50V30H55V17.5H45Z" fill="#FF4D4D"/>
                  <path d="M80 10H60V15H67.5V30H72.5V15H80V10Z" fill="#FF4D4D"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 10H10V30H15V22.5H17.5C22.5 22.5 27.5 20 27.5 16.25C27.5 12.5 22.5 10 17.5 10ZM17.5 17.5H15V15H17.5C18.75 15 20 15.625 20 16.25C20 16.875 18.75 17.5 17.5 17.5Z" fill="#FF9D42"/>
                  <path d="M37.5 10H30V30H35V22.5H37.5C42.5 22.5 47.5 20 47.5 16.25C47.5 12.5 42.5 10 37.5 10ZM37.5 17.5H35V15H37.5C38.75 15 40 15.625 40 16.25C40 16.875 38.75 17.5 37.5 17.5Z" fill="#FF9D42"/>
                  <path d="M55 10H50V30H55V10Z" fill="#FF9D42"/>
                  <path d="M70 10H60V30H70V25H65V22.5H70V17.5H65V15H70V10Z" fill="#FF9D42"/>
                  <path d="M75 10V30H80V10H75Z" fill="#FF9D42"/>
                </svg>
              </div>
            </div>
            
            {/* Нижний ряд партнеров */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 10H15C12.5 10 10 12.5 10 15V25C10 27.5 12.5 30 15 30H25C27.5 30 30 27.5 30 25V15C30 12.5 27.5 10 25 10ZM25 25H15V15H25V25Z" fill="#3AC2E8"/>
                  <path d="M42.5 10H35V30H40V22.5H42.5C47.5 22.5 52.5 20 52.5 16.25C52.5 12.5 47.5 10 42.5 10ZM42.5 17.5H40V15H42.5C43.75 15 45 15.625 45 16.25C45 16.875 43.75 17.5 42.5 17.5Z" fill="#3AC2E8"/>
                  <path d="M65 10H55V30H65C70 30 75 25 75 20C75 15 70 10 65 10ZM65 25H60V15H65C67.5 15 70 17.5 70 20C70 22.5 67.5 25 65 25Z" fill="#3AC2E8"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H15V17L25 30H30V10H25V23L15 10H20Z" fill="#00D6C6"/>
                  <path d="M40 10H35V30H40V10Z" fill="#00D6C6"/>
                  <path d="M45 10V30H50V10H45Z" fill="#00D6C6"/>
                  <path d="M65 10H55V15H65V10Z" fill="#00D6C6"/>
                  <path d="M55 17.5H60V30H65V17.5H55Z" fill="#00D6C6"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H15V22.5H20C22.5 22.5 25 20 25 16.25C25 12.5 22.5 10 20 10ZM20 17.5H15V15H20V17.5Z" fill="#20D67B"/>
                  <path d="M35 10H30V30H35V10Z" fill="#20D67B"/>
                  <path d="M45 10H40V30H45V22.5H50V30H55V10H50V17.5H45V10Z" fill="#20D67B"/>
                  <path d="M65 10H60V30H65V10Z" fill="#20D67B"/>
                  <path d="M80 10H70V30H75V17L85 30H90V10H85V23L75 10H80Z" fill="#20D67B"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10H10V30H15V22.5H20C22.5 22.5 25 20 25 16.25C25 12.5 22.5 10 20 10ZM20 17.5H15V15H20V17.5Z" fill="#3948E5"/>
                  <path d="M40 10H30V15H40V10Z" fill="#3948E5"/>
                  <path d="M30 17.5H35V30H40V17.5H30Z" fill="#3948E5"/>
                  <path d="M50 10H45V30H50V10Z" fill="#3948E5"/>
                  <path d="M55 10V30H60V10H55Z" fill="#3948E5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с формой обратной связи */}
      <ContactForm />

    </div>
  );
}
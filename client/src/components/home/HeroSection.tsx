import { Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-5rem)] w-full overflow-hidden relative bg-white flex items-start pt-0 mt-0">
      <div className="container mx-auto px-6 pt-2">
        <div className="max-w-[1376px] mx-auto flex flex-col lg:flex-row gap-6">
          {/* Left side with text and background */}
          <div className="w-full lg:w-1/2 relative">
            <div style={{width: '710px', height: '640px', background: '#F0F1F3', borderRadius: '30px'}} className="p-6 relative overflow-hidden">
              {/* Дополнительные частицы пыли на сером фоне */}
              <div className="absolute inset-0 z-0">
                {/* Создаем больше частиц пыли разного размера в разных местах - увеличенный размер и видимость */}
                <div className="absolute top-[8%] left-[30%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-50 animate-dust-bg-1"></div>
                <div className="absolute top-[15%] right-[40%] w-[5px] h-[5px] bg-[#6A97FF] rounded-full opacity-45 animate-dust-bg-2"></div>
                <div className="absolute bottom-[22%] left-[65%] w-[7px] h-[7px] bg-[#6A97FF] rounded-full opacity-50 animate-dust-bg-3"></div>
                <div className="absolute bottom-[35%] right-[25%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-40 animate-dust-bg-4"></div>
                <div className="absolute top-[42%] left-[75%] w-[5px] h-[5px] bg-[#6A97FF] rounded-full opacity-50 animate-dust-bg-5"></div>
                <div className="absolute top-[55%] right-[55%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-45 animate-dust-bg-6"></div>
                <div className="absolute bottom-[12%] left-[42%] w-[5px] h-[5px] bg-[#6A97FF] rounded-full opacity-50 animate-dust-bg-7"></div>
                <div className="absolute top-[30%] left-[12%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-40 animate-dust-bg-8"></div>
                <div className="absolute bottom-[48%] right-[10%] w-[5px] h-[5px] bg-[#6A97FF] rounded-full opacity-45 animate-dust-bg-9"></div>
                <div className="absolute top-[70%] right-[32%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-50 animate-dust-bg-10"></div>
                
                {/* Добавляем еще 5 частиц для достижения 15 шт */}
                <div className="absolute top-[25%] left-[55%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-45 animate-dust-bg-11"></div>
                <div className="absolute top-[60%] left-[25%] w-[7px] h-[7px] bg-[#6A97FF] rounded-full opacity-50 animate-dust-bg-12"></div>
                <div className="absolute bottom-[60%] right-[70%] w-[5px] h-[5px] bg-[#6A97FF] rounded-full opacity-45 animate-dust-bg-13"></div>
                <div className="absolute top-[75%] left-[85%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-40 animate-dust-bg-14"></div>
                <div className="absolute bottom-[28%] right-[60%] w-[7px] h-[7px] bg-[#6A97FF] rounded-full opacity-50 animate-dust-bg-15"></div>
              </div>
              
              {/* Rating badge */}
              <div className="inline-flex items-center bg-white rounded-full py-2 px-4 shadow-sm mb-6 absolute top-6 left-6 z-10">
                <div className="text-[#FFD700] mr-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 13.333L3.333 16 4.667 10.667 0 6.667 5.333 6 8 1.333 10.667 6 16 6.667 11.333 10.667 12.667 16z" fill="#FFD700"/>
                  </svg>
                </div>
                <span className="text-[#17191E]">4.5</span>
                <span className="text-[rgba(23,25,30,0.5)]">/5</span>
              </div>
            
              {/* Blue Sphere Background */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Concentric circles */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Static concentric circles */}
                  {[600, 450, 300, 150].map((size, idx) => (
                    <div 
                      key={idx}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white rounded-full opacity-10"
                      style={{ 
                        width: size, 
                        height: size,
                        transform: 'translate(-50%, -50%) rotate(15deg)'
                      }}
                    />
                  ))}
                </div>
                
                {/* Blue sphere image */}
                <div className="absolute left-0 top-0 w-full h-full z-0">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative flex items-center justify-center">
                        {/* Большой синий шар как на референсе */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center">
                          {/* Эффект синей пыли вокруг шара */}
                          <div className="absolute">
                            <div className="absolute w-[520px] h-[520px] rounded-full">
                              {/* Частицы синей пыли */}
                              <div className="absolute top-[5%] left-[10%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-60 animate-dust-1"></div>
                              <div className="absolute top-[15%] right-[8%] w-[8px] h-[8px] bg-[#6A97FF] rounded-full opacity-70 animate-dust-2"></div>
                              <div className="absolute bottom-[12%] left-[15%] w-[7px] h-[7px] bg-[#6A97FF] rounded-full opacity-65 animate-dust-3"></div>
                              <div className="absolute bottom-[8%] right-[12%] w-[5px] h-[5px] bg-[#6A97FF] rounded-full opacity-75 animate-dust-4"></div>
                              <div className="absolute top-[45%] left-[3%] w-[4px] h-[4px] bg-[#6A97FF] rounded-full opacity-80 animate-dust-5"></div>
                              <div className="absolute top-[40%] right-[5%] w-[6px] h-[6px] bg-[#6A97FF] rounded-full opacity-70 animate-dust-6"></div>
                            </div>
                          </div>
                          
                          {/* Внешний шар - темный контур с плавным движением */}
                          <div 
                            className="absolute w-[480px] h-[480px] bg-[#2D4999] rounded-full animate-float-very-slow"
                          ></div>
                          
                          {/* Основной синий шар с волновым эффектом */}
                          <div 
                            className="absolute w-[470px] h-[470px] bg-[#3158D9] animate-liquid-wave"
                          ></div>
                          
                          {/* Внутренний слой с более светлым оттенком */}
                          <div 
                            className="absolute w-[450px] h-[450px] bg-[#4571EA] animate-liquid-wave-delay"
                          ></div>

                          {/* Светящееся пятно, которое двигается */}
                          <div className="absolute w-[450px] h-[450px] overflow-hidden animate-liquid-wave">
                            <div className="absolute top-[15%] left-[20%] w-[250px] h-[200px] bg-[#6A97FF] blur-xl opacity-40 rounded-full animate-float-fast"></div>
                            <div className="absolute bottom-[25%] right-[25%] w-[150px] h-[150px] bg-[#6A97FF] blur-xl opacity-50 rounded-full animate-float"></div>
                          </div>
                          
                          {/* Эффект свечения сверху слева */}
                          <div className="absolute top-[10%] left-[15%] w-[230px] h-[170px] bg-white blur-2xl opacity-20 rounded-full"></div>
                          
                          {/* Блики для эффекта объема */}
                          <div className="absolute top-[20%] left-[25%] w-[120px] h-[50px] bg-white rounded-full blur-lg opacity-25"></div>
                          <div className="absolute top-[15%] right-[35%] w-[60px] h-[30px] bg-white rounded-full blur-lg opacity-15"></div>

                          {/* Дополнительный эффект свечения */}
                          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#6A97FF] blur-3xl opacity-10 animate-pulse-slow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Services inside left block */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[13px] gap-y-[13px]">
                  <ServiceCard 
                    title="КТ головного мозга"
                    background="white"
                    textColor="#182E45"
                  />
                  <ServiceCard 
                    title="Рентгенография ОГК и флюорография"
                    background="linear-gradient(136deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0) 100%)"
                    textColor="#182E45"
                    isGlass={true}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side with title and services */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between pl-8">
            <h1 className="pt-0 font-['Poppins'] font-bold text-[42px] leading-[63px]" style={{ width: '550px', marginBottom: '10px', marginLeft: '30px' }}>
              <span className="text-[#070A11]">Инновационная</span><br/>
              <span className="text-[#070A11]">медицина</span><br/>
              <span className="text-[#070A11]">с </span>
              <span className="text-[#206EF3]">использованием ИИ</span>
            </h1>
            
            {/* Services grid */}
            <div className="relative ml-[30px]">
              <div className="absolute left-0" style={{ width: '270px', height: '200px', top: '0' }}>
                <ServiceCard 
                  title="КТ органов грудной клетки"
                  background="#F0F1F3"
                  textColor="#182E45"
                />
              </div>
              <div className="absolute" style={{ width: '270px', height: '200px', top: '0', left: 'calc(270px + 16px)' }}>
                <ServiceCard 
                  title="Мониторинг"
                  background="#F0F1F3"
                  textColor="#182E45"
                />
              </div>
              <div className="absolute" style={{ width: '270px', height: '200px', top: 'calc(200px + 16px)', left: '0' }}>
                <ServiceCard 
                  title="Врачебная платформа"
                  background="#F0F1F3"
                  textColor="#182E45"
                />
              </div>
              <div className="absolute" style={{ width: '270px', height: '200px', top: 'calc(200px + 16px)', left: 'calc(270px + 16px)' }}>
                <ServiceCard 
                  title="Клиническая лабораторная диагностика"
                  background="linear-gradient(138deg, #3D4AE5 0%, #9088F2 100%)"
                  textColor="white"
                  isHighlighted={true}
                />
              </div>
              <div style={{ height: 'calc(200px * 2 + 16px)', width: 'calc(270px * 2 + 16px)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  background: string;
  textColor: string;
  isHighlighted?: boolean;
  isGlass?: boolean;
}

function ServiceCard({ title, background, textColor, isHighlighted, isGlass }: ServiceCardProps) {
  let cardStyle = {};
  let isAnimated = false;
  let isGlassAnimated = false;
  let isGradientAnimated = false;
  let isWhiteCardAnimated = false;
  
  if (title === "КТ органов грудной клетки" || title === "Мониторинг" || title === "Врачебная платформа") {
    cardStyle = { width: '270px', height: '200px', background: '#F0F1F3', borderRadius: '30px' };
    isAnimated = true;
  } else if (title === "Клиническая лабораторная диагностика") {
    cardStyle = { width: '270px', height: '200px', background: 'linear-gradient(138deg, #3D4AE5 0%, #9088F2 100%)', borderRadius: '30px' };
    isGradientAnimated = true;
  } else if (title === "Рентгенография ОГК и флюорография") {
    cardStyle = { 
      width: '290px', 
      height: '200px', 
      background: 'linear-gradient(137deg, rgba(255, 255, 255, 0.47) 0%, rgba(255, 255, 255, 0) 100%)', 
      borderRadius: '30px', 
      outline: '1px white solid', 
      backdropFilter: 'blur(21px)'
    };
    isGlassAnimated = true;
  } else if (title === "КТ головного мозга") {
    cardStyle = { width: '290px', height: '200px', background: 'white', borderRadius: '30px' };
    isWhiteCardAnimated = true;
  }
  
  // Убираем ширину и высоту из стиля, так как они уже заданы в родительском контейнере
  if (title === "КТ органов грудной клетки" || title === "Мониторинг" || title === "Врачебная платформа" || 
      title === "Клиническая лабораторная диагностика") {
    const { width, height, ...restStyle } = cardStyle as any;
    cardStyle = { ...restStyle, width: '100%', height: '100%' };
  }
  
  return (
    <div 
      className={`p-6 relative flex flex-col justify-between overflow-hidden ${
        isGlass ? 'backdrop-blur-xl border border-white' : ''
      } ${isAnimated || isGlassAnimated || isGradientAnimated || isWhiteCardAnimated ? 'cursor-pointer group' : ''}`}
      style={{ 
        ...cardStyle
      }}
    >
      {/* Синий градиентный круг, появляющийся при наведении для обычных карточек */}
      {isAnimated && (
        <div className="absolute -right-[100px] -top-[100px] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#206EF3] to-[#3D4AE5] opacity-0 group-hover:opacity-10 transition-all duration-500 ease-out transform group-hover:scale-150"></div>
      )}
      
      {/* Эффект свечения для стеклянной карточки */}
      {isGlassAnimated && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-10 backdrop-blur-sm"></div>
          <div className="absolute -top-[50px] -right-[50px] w-[150px] h-[150px] rounded-full bg-white blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 ease-out transform group-hover:scale-110"></div>
        </div>
      )}
      
      {/* Простая анимация для градиентной карточки */}
      {isGradientAnimated && (
        <>
          {/* Базовый фон с простой сменой градиента */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D4AE5] to-[#9088F2] opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4F3AFF] to-[#A48EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Простое свечение по краям */}
          <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          
          {/* Простые белые точки */}
          <div className="absolute top-[30%] left-[40%] w-[5px] h-[5px] bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-[60%] left-[30%] w-[7px] h-[7px] bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 delay-100"></div>
          <div className="absolute top-[40%] left-[70%] w-[4px] h-[4px] bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 delay-200"></div>
          
          {/* Простая вспышка */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </>
      )}
      
      {/* Простая анимация для белой карточки */}
      {isWhiteCardAnimated && (
        <>
          {/* Базовый фон с простым эффектом */}
          <div className="absolute inset-0 bg-white opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-[#F0F9FF] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Простое синее свечение */}
          <div className="absolute inset-[20%] bg-[#206EF3] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          
          {/* Простая линия сканирования */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#206EF3] opacity-0 group-hover:opacity-40 group-hover:animate-scan-line transition-opacity duration-300"></div>
          
          {/* Простые элементы */}
          <div className="absolute top-[25%] left-[25%] w-[30px] h-[30px] rounded-full border border-[#206EF3] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="absolute bottom-[25%] right-[25%] w-[20px] h-[20px] rounded-full border border-[#206EF3] opacity-0 group-hover:opacity-30 transition-opacity duration-300 delay-100"></div>
        </>
      )}
      
      <h3 
        className={`font-['Poppins'] font-bold text-[24px] leading-[140%] relative z-10 ${
          isAnimated ? 'group-hover:text-[#206EF3] transition-colors duration-300' : ''
        } ${isGlassAnimated ? 'group-hover:text-[#3D4AE5] transition-colors duration-300' : ''
        } ${isGradientAnimated ? 'transition-colors duration-300' : ''
        } ${isWhiteCardAnimated ? 'group-hover:text-[#206EF3] transition-colors duration-300' : ''}`}
        style={{ color: textColor }}
      >
        {title}
      </h3>
      
      <div className="self-end mt-auto relative z-10">
        {/* Круглая кнопка с плюсом */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
          isHighlighted 
            ? 'bg-white border border-white' 
            : isAnimated
              ? 'opacity-40 border border-[#17191E] group-hover:opacity-100 group-hover:border-[#206EF3] group-hover:scale-110 group-hover:rotate-90'
              : isGlassAnimated
                ? 'opacity-40 border border-white group-hover:opacity-100 group-hover:border-[#3D4AE5] group-hover:bg-white'
                : isGradientAnimated
                  ? 'opacity-100 border border-white group-hover:opacity-100 group-hover:border-[white] group-hover:bg-[#4F3AFF] group-hover:scale-125 transform'
                  : isWhiteCardAnimated
                    ? 'opacity-70 border border-[#E0E0E0] group-hover:opacity-100 group-hover:border-[#206EF3] group-hover:bg-[#206EF3] group-hover:shadow-[0_0_15px_5px_rgba(32,110,243,0.2)] transition-all duration-500'
                    : 'opacity-10 border border-[#17191E]'
        }`}>
          <Plus className={`w-6 h-6 ${
            isHighlighted 
              ? 'text-[#070A11]' 
              : isAnimated 
                ? 'text-[#070A11] group-hover:text-[#206EF3] transition-colors duration-300'
                : isGlassAnimated
                  ? 'text-[#070A11] group-hover:text-[#3D4AE5] transition-colors duration-300'
                  : isGradientAnimated
                    ? 'text-white group-hover:text-white transition-colors duration-300 group-hover:rotate-45 transform'
                    : isWhiteCardAnimated
                      ? 'text-[#206EF3] group-hover:text-white transition-colors duration-300 group-hover:rotate-90 transform'
                      : 'text-[#070A11]'
          }`} />
        </div>
      </div>
      
      {/* Подчеркивание, появляющееся при наведении для обычных карточек */}
      {isAnimated && (
        <div className="absolute bottom-4 left-6 h-[2px] w-0 bg-[#206EF3] group-hover:w-[40%] transition-all duration-500 ease-out"></div>
      )}
      
      {/* Эффекты для белой карточки */}
      {isWhiteCardAnimated && (
        <>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="relative w-8 h-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#206EF3] to-[#3D4AE5] rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-1.5 bg-gradient-to-r from-[#206EF3] to-[#3D4AE5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-6 h-[2px] w-0 bg-[#206EF3] group-hover:w-[50%] transition-all duration-700 ease-out"></div>
          <div className="absolute bottom-4 right-6 h-[2px] w-0 bg-[#3D4AE5] group-hover:w-[20%] transition-all duration-500 ease-out delay-200"></div>
          <div className="absolute bottom-10 left-6 h-[1px] w-0 bg-[#206EF3] opacity-40 group-hover:w-[30%] transition-all duration-700 ease-out delay-100"></div>
        </>
      )}
      
      {/* Эффекты для градиентной карточки */}
      {isGradientAnimated && (
        <>
          <div className="absolute bottom-4 left-6 h-[3px] w-0 bg-white group-hover:w-[60%] transition-all duration-600 ease-out"></div>
          <div className="absolute w-0 h-0 -bottom-[10px] -right-[10px] group-hover:w-[100px] group-hover:h-[100px] bg-gradient-to-tr from-[#A48EFF] to-transparent rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out blur-md"></div>
        </>
      )}
      
      {/* Блики для стеклянной карточки */}
      {isGlassAnimated && (
        <>
          <div className="absolute bottom-4 right-6 h-[2px] w-0 bg-white group-hover:w-[30%] transition-all duration-700 ease-out"></div>
          <div className="absolute top-[40%] left-[20%] w-0 h-0 group-hover:w-[3px] group-hover:h-[3px] bg-white rounded-full opacity-0 group-hover:opacity-90 transition-all duration-500"></div>
          <div className="absolute top-[30%] left-[40%] w-0 h-0 group-hover:w-[2px] group-hover:h-[2px] bg-white rounded-full opacity-0 group-hover:opacity-90 transition-all duration-700 delay-100"></div>
          <div className="absolute top-[50%] left-[60%] w-0 h-0 group-hover:w-[4px] group-hover:h-[4px] bg-white rounded-full opacity-0 group-hover:opacity-90 transition-all duration-600 delay-200"></div>
        </>
      )}
    </div>
  );
}
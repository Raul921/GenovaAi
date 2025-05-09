import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedItem } from "@/components/ui/animated-item";
import { AnimatedSection } from "@/components/ui/animated-section";

// Типы для блог-постов
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  type: string; // Тип статьи: useful (полезные) или media (СМИ)
}

// Типы для категорий
interface CategoryTab {
  id: string;
  name: string;
}

export default function Blog() {
  // Категории блогов
  const categories: CategoryTab[] = [
    { id: "all", name: "Все" },
    { id: "useful", name: "Полезные статьи" },
    { id: "media", name: "СМИ о нас" },
  ];

  // Данные для блога
  const allBlogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Инновации в диагностике заболеваний легких с помощью ИИ",
      excerpt: "Искусственный интеллект демонстрирует впечатляющие результаты в выявлении патологий легких на ранних стадиях, значительно повышая шансы на успешное лечение.",
      date: "15 марта 2025",
      category: "Искусственный интеллект",
      image: "https://placehold.co/600x400/206EF3/FFFFFF?text=AI+в+медицине",
      type: "useful"
    },
    {
      id: 2,
      title: "GENOVA представила новую систему анализа медицинских изображений",
      excerpt: "Компания GENOVA объявила о выпуске инновационной платформы для автоматизированного анализа медицинских снимков с использованием глубокого обучения.",
      date: "10 марта 2025",
      category: "Новости компании",
      image: "https://placehold.co/600x400/3444E4/FFFFFF?text=GENOVA",
      type: "media"
    },
    {
      id: 3,
      title: "Врачи подтверждают: ИИ-ассистенты существенно ускоряют диагностику",
      excerpt: "Согласно новому исследованию, использование систем искусственного интеллекта в качестве вспомогательного инструмента сокращает время постановки диагноза на 47%.",
      date: "5 марта 2025",
      category: "Исследования",
      image: "https://placehold.co/600x400/9A90F4/FFFFFF?text=Телемедицина",
      type: "useful"
    },
    {
      id: 4,
      title: "GENOVA расширяет сотрудничество с ведущими клиниками России",
      excerpt: "Пять новых медицинских центров в разных регионах страны начали использовать программное обеспечение GENOVA для диагностики заболеваний.",
      date: "28 февраля 2025",
      category: "Партнерство",
      image: "https://placehold.co/600x400/182E45/FFFFFF?text=GENOVA+в+СМИ",
      type: "media"
    },
    {
      id: 5,
      title: "Как искусственный интеллект помогает в борьбе с редкими заболеваниями",
      excerpt: "Алгоритмы машинного обучения способны выявлять неочевидные закономерности в симптомах, ускоряя диагностику редких патологий.",
      date: "20 февраля 2025",
      category: "Искусственный интеллект",
      image: "https://placehold.co/600x400/206EF3/FFFFFF?text=Интервью",
      type: "useful"
    },
    {
      id: 6,
      title: "Министерство здравоохранения одобрило использование системы GENOVA в государственных клиниках",
      excerpt: "Официальное разрешение открывает новые перспективы для внедрения искусственного интеллекта в российской системе здравоохранения.",
      date: "15 февраля 2025",
      category: "Регулирование",
      image: "https://placehold.co/600x400/3444E4/FFFFFF?text=Медицина",
      type: "media"
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>(allBlogPosts);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Функция для фильтрации постов по категории
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    if (categoryId === "all") {
      setVisiblePosts(allBlogPosts);
    } else {
      const filteredPosts = allBlogPosts.filter(post => post.type === categoryId);
      setVisiblePosts(filteredPosts);
    }
  };

  // Устанавливаем все посты при первой загрузке
  useEffect(() => {
    setVisiblePosts(allBlogPosts);
  }, []);

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
              
              {/* Медицинские элементы */}
              {/* ДНК/Спираль */}
              <div className="absolute top-[30%] right-[25%] w-20 h-40 opacity-5">
                <div className="absolute left-1/2 top-0 w-1 h-full bg-white"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute w-10 h-1 bg-white" 
                    style={{ 
                      top: `${i * 12}%`, 
                      left: i % 2 === 0 ? '0' : '50%',
                      transform: i % 2 === 0 ? 'rotate(30deg)' : 'rotate(-30deg)'
                    }}>
                  </div>
                ))}
              </div>
              
              {/* Пульсирующее сердце */}
              <div className="animate-pulse-heart absolute top-[65%] left-[30%] opacity-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              
              {/* Пробирки/Колбы */}
              <div className="absolute top-[55%] right-[8%] opacity-5">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                  <path d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6Z" />
                  <path d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19Z" fill="#3444E4" />
                </svg>
              </div>
              
              {/* Нейронная сеть/ИИ */}
              <div className="absolute top-[20%] left-[60%] opacity-5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <circle cx="6" cy="6" r="2" />
                  <circle cx="18" cy="6" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="6" cy="18" r="2" />
                  <circle cx="18" cy="18" r="2" />
                  <path d="M6,8 L6,16" stroke="white" strokeWidth="0.5" />
                  <path d="M18,8 L18,16" stroke="white" strokeWidth="0.5" />
                  <path d="M8,6 L16,6" stroke="white" strokeWidth="0.5" />
                  <path d="M8,18 L16,18" stroke="white" strokeWidth="0.5" />
                  <path d="M8,6 L12,12" stroke="white" strokeWidth="0.5" />
                  <path d="M16,6 L12,12" stroke="white" strokeWidth="0.5" />
                  <path d="M8,18 L12,12" stroke="white" strokeWidth="0.5" />
                  <path d="M16,18 L12,12" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>
              
              {/* Кардиограмма */}
              <div className="absolute bottom-[25%] right-[20%] w-48 h-12 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 200 40" fill="none" stroke="white" strokeWidth="2">
                  <path className="animate-ecg" d="M0,20 L20,20 L25,10 L30,30 L35,15 L40,25 L45,20 L60,20 L65,10 L70,30 L75,20 L100,20 L105,10 L110,30 L115,15 L120,25 L125,20 L140,20 L145,10 L150,30 L155,20 L180,20 L185,10 L190,30 L195,20 L200,20" />
                </svg>
              </div>
              
              {/* Микроскоп */}
              <div className="absolute top-[10%] left-[40%] opacity-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12,7.77L18.39,18H5.61L12,7.77M12,4L2,20H22L12,4Z"/>
                  <path d="M12,12m-2,0a2,2 0 1,0 4,0a2,2 0 1,0 -4,0"/>
                  <path d="M12,3.5L12,6"/>
                </svg>
              </div>
              
              {/* Молекула */}
              <div className="animate-rotate-slow absolute bottom-[40%] left-[15%] opacity-5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="2.5" />
                  <circle cx="6" cy="6" r="2" />
                  <circle cx="18" cy="6" r="2" />
                  <circle cx="6" cy="18" r="2" />
                  <circle cx="18" cy="18" r="2" />
                  <line x1="12" y1="12" x2="6" y2="6" stroke="white" strokeWidth="1" />
                  <line x1="12" y1="12" x2="18" y2="6" stroke="white" strokeWidth="1" />
                  <line x1="12" y1="12" x2="6" y2="18" stroke="white" strokeWidth="1" />
                  <line x1="12" y1="12" x2="18" y2="18" stroke="white" strokeWidth="1" />
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
                <span className="text-black font-medium">Блог</span>
              </div>
            </div>
            

            
            <div className="flex flex-col items-start justify-between h-full relative pt-16 md:pt-20">
              <AnimatedItem animation="fadeIn" delay={0.3}>
                <div className="mt-auto">
                  <h1 className="font-['Poppins'] text-[48px] md:text-[52px] font-bold leading-tight text-white mb-6">
                    Блог <br />GENOVA™
                  </h1>
                  <p className="font-['Poppins'] text-xl font-bold leading-snug text-white/90 mb-10 max-w-xl">
                    Новости, исследования и актуальная информация<br />
                    о применении искусственного интеллекта в медицинской диагностике
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto mb-6">
                  <div className="w-60 h-48 relative group overflow-hidden">
                    {/* Фоновая анимация с "пылью" */}
                    <div className="absolute inset-0 opacity-10">
                      {/* Частицы пыли */}
                      <div className="animate-dust-1 absolute w-[6px] h-[6px] bg-white rounded-full opacity-60 top-[5%] left-[10%]"></div>
                      <div className="animate-dust-2 absolute w-[8px] h-[8px] bg-white rounded-full opacity-70 top-[15%] right-[8%]"></div>
                      <div className="animate-dust-3 absolute w-[7px] h-[7px] bg-white rounded-full opacity-65 bottom-[12%] left-[15%]"></div>
                      <div className="animate-dust-4 absolute w-[5px] h-[5px] bg-white rounded-full opacity-75 bottom-[8%] right-[12%]"></div>
                      <div className="animate-dust-5 absolute w-[4px] h-[4px] bg-white rounded-full opacity-80 top-[45%] left-[3%]"></div>
                      <div className="animate-dust-6 absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 top-[40%] right-[5%]"></div>
                      
                      {/* Базовая анимация */}
                      <div className="animate-pulse absolute w-20 h-20 rounded-full bg-white top-[-20px] left-[-20px]"></div>
                      <div className="animate-pulse-slow absolute w-16 h-16 rounded-full bg-white bottom-[-10px] right-[-10px]"></div>
                      <div className="animate-float absolute w-12 h-12 rounded-full bg-white bottom-[30%] left-[20%]"></div>
                    </div>
                    
                    <div className="w-60 h-48 left-0 top-0 absolute bg-[#206EF3] rounded-[30px] group-hover:bg-[#1655C4] transition-all duration-300 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-transparent">
                      {/* Анимированные круги при наведении */}
                      <div className="absolute w-32 h-32 rounded-full bg-[#3158D9]/20 top-[-100px] right-[-50px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-20"></div>
                      <div className="absolute w-40 h-40 rounded-full bg-[#3158D9]/20 bottom-[-120px] left-[-80px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-[-30px]"></div>
                    </div>
                    <div className="w-44 left-[24px] top-[24px] absolute justify-start text-white text-2xl font-bold font-['Poppins'] leading-[140%]">
                      Узнать<br/>о компании
                    </div>
                    
                    {/* Центрированный круг с плюсом */}
                    <div className="absolute right-6 bottom-6 flex items-center justify-center">
                      <div className="w-10 h-10 opacity-10 rounded-[100px] border border-white"></div>
                      <div className="absolute transition-transform duration-300 group-hover:rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </div>
                    
                    <Link href="/about" className="absolute inset-0" aria-label="Узнать о компании"></Link>
                  </div>
                  
                  <div className="w-60 h-48 relative group overflow-hidden">
                    {/* Фоновая анимация с "пылью" */}
                    <div className="absolute inset-0 opacity-5">
                      {/* Частицы пыли на фоне */}
                      <div className="animate-dust-bg-1 absolute w-[6px] h-[6px] bg-white rounded-full opacity-50 top-[8%] left-[30%]"></div>
                      <div className="animate-dust-bg-2 absolute w-[5px] h-[5px] bg-white rounded-full opacity-45 top-[15%] right-[40%]"></div>
                      <div className="animate-dust-bg-3 absolute w-[7px] h-[7px] bg-white rounded-full opacity-50 bottom-[22%] left-[65%]"></div>
                      <div className="animate-dust-bg-4 absolute w-[6px] h-[6px] bg-white rounded-full opacity-40 bottom-[35%] right-[25%]"></div>
                      <div className="animate-dust-bg-5 absolute w-[5px] h-[5px] bg-white rounded-full opacity-50 top-[42%] left-[75%]"></div>
                      <div className="animate-dust-bg-6 absolute w-[6px] h-[6px] bg-white rounded-full opacity-45 top-[55%] right-[55%]"></div>
                      
                      {/* Базовая анимация */}
                      <div className="animate-float-delay absolute w-20 h-20 rounded-full bg-white top-[10%] left-[10%]"></div>
                      <div className="animate-float-slow absolute w-14 h-14 rounded-full bg-white bottom-[10%] right-[10%]"></div>
                      <div className="animate-rotate-slow absolute top-[40%] left-[50%] w-16 h-16">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="white" stroke="none" opacity="0.1">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="w-60 h-48 left-0 top-0 absolute bg-white/10 hover:bg-white/15 rounded-[30px] backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:border-white/50 overflow-hidden">
                      {/* Анимированные круги при наведении */}
                      <div className="absolute w-32 h-32 rounded-full bg-white/10 top-[-100px] right-[-50px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-20"></div>
                      <div className="absolute w-40 h-40 rounded-full bg-white/10 bottom-[-120px] left-[-80px] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-[-30px]"></div>
                    </div>
                    <div className="w-44 left-[24px] top-[24px] absolute justify-start text-white text-2xl font-bold font-['Poppins'] leading-[140%]">
                      Написать<br/>нам
                    </div>
                    
                    {/* Центрированный круг с плюсом */}
                    <div className="absolute right-6 bottom-6 flex items-center justify-center">
                      <div className="w-10 h-10 opacity-10 rounded-[100px] border border-white"></div>
                      <div className="absolute transition-transform duration-300 group-hover:rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </div>
                    
                    <Link href="/contact" className="absolute inset-0" aria-label="Написать нам"></Link>
                  </div>
                </div>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1376px] mx-auto px-4 py-16">
        {/* Category filter */}
        <AnimatedSection delay={0.3} direction="up">
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <AnimatedItem key={category.id} delay={0.4 + (index * 0.1)} animation="fadeIn">
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`relative px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-[#182E45] text-white'
                        : 'bg-transparent text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                    {activeCategory === category.id && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    )}
                  </button>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Blog posts grid */}
        <AnimatedSection delay={0.5} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post, index) => (
              <AnimatedItem key={post.id} delay={0.6 + (index * 0.1)} animation="fadeIn">
                <div
                  className="bg-white rounded-[30px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
                  onMouseEnter={() => setHoveredCard(post.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCard === post.id ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-800">
                      {post.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <span className="text-gray-500 text-sm block mb-4">{post.date}</span>
                    <h3 className="text-xl font-semibold mb-4 line-clamp-2 min-h-[3.5rem]">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 min-h-[4.5rem]">
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className={`group px-0 hover:bg-transparent ${hoveredCard === post.id ? 'text-[#182E45]' : 'text-gray-800'}`}
                      asChild
                    >
                      <Link href={`/blog/${post.id}`} className="inline-flex items-center">
                        Читать полностью
                        <ArrowRight 
                          className={`ml-2 h-4 w-4 transition-transform duration-300 ${hoveredCard === post.id ? 'translate-x-2' : ''}`} 
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button 
                  variant="outline" 
                  className="rounded-full px-4 py-2 font-medium text-base"
                >
                  Предыдущая
                </Button>
              </div>
              
              <div className="relative">
                <Button 
                  className="bg-[#182E45] text-white hover:bg-[#1a3756] rounded-full px-4 py-2 font-medium text-base relative overflow-hidden"
                >
                  <span className="relative z-10">1</span>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                </Button>
              </div>
              
              <div className="relative">
                <Button 
                  variant="outline" 
                  className="rounded-full px-4 py-2 font-medium text-base"
                >
                  2
                </Button>
              </div>
              
              <div className="relative">
                <Button 
                  variant="outline" 
                  className="rounded-full px-4 py-2 font-medium text-base"
                >
                  Следующая
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
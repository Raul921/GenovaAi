import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  type: string; // Тип статьи: useful (полезные) или media (СМИ)
}

interface CategoryTab {
  id: string;
  name: string;
}

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  
  // Категории блога
  const categories: CategoryTab[] = [
    { id: "all", name: "Все" },
    { id: "useful", name: "Полезные статьи" },
    { id: "media", name: "СМИ о нас" }
  ];
  
  // Данные для блог-постов
  const allBlogPosts: BlogPost[] = [
    // Статьи типа "Полезные статьи"
    {
      id: 1,
      title: "Новые достижения в медицинской диагностике с применением ИИ",
      excerpt: "Искусственный интеллект становится неотъемлемой частью современной медицины, особенно в области диагностики. Разберем последние достижения...",
      date: "24 февраля 2025",
      category: "Инновации",
      image: "https://placehold.co/600x400/206EF3/FFFFFF?text=AI+в+медицине",
      type: "useful"
    },
    {
      id: 2,
      title: "Как GENOVA повышает точность диагностики на 40%",
      excerpt: "Наша система GENOVA продолжает демонстрировать впечатляющие результаты. Исследования показывают увеличение точности диагностики...",
      date: "17 февраля 2025",
      category: "Исследования",
      image: "https://placehold.co/600x400/3444E4/FFFFFF?text=GENOVA",
      type: "useful"
    },
    {
      id: 3,
      title: "Будущее телемедицины: тренды и прогнозы на 2025 год",
      excerpt: "Телемедицина стремительно развивается, открывая новые возможности для врачей и пациентов. Рассмотрим ключевые тренды...",
      date: "10 февраля 2025",
      category: "Тренды",
      image: "https://placehold.co/600x400/9A90F4/FFFFFF?text=Телемедицина",
      type: "useful"
    },
    
    // Статьи типа "СМИ о нас"
    {
      id: 4,
      title: "GENOVA: инновационная платформа для медицинской диагностики",
      excerpt: "Российская компания представила новую систему анализа медицинских данных, которая уже показывает впечатляющие результаты в клинических испытаниях...",
      date: "15 марта 2025",
      category: "Пресса",
      image: "https://placehold.co/600x400/182E45/FFFFFF?text=GENOVA+в+СМИ",
      type: "media"
    },
    {
      id: 5,
      title: "Медицинские технологии будущего: интервью с основателем GENOVA",
      excerpt: "В эксклюзивном интервью руководитель компании рассказал о планах развития и внедрения искусственного интеллекта в медицинскую практику...",
      date: "28 февраля 2025",
      category: "Интервью",
      image: "https://placehold.co/600x400/206EF3/FFFFFF?text=Интервью",
      type: "media"
    },
    {
      id: 6,
      title: "GENOVA получила международную премию за инновации в медицине",
      excerpt: "На ежегодной церемонии вручения премий в области медицинских технологий, компания была отмечена за вклад в развитие цифровой медицины...",
      date: "5 февраля 2025",
      category: "Награды",
      image: "https://placehold.co/600x400/3444E4/FFFFFF?text=Премия",
      type: "media"
    }
  ];

  // Функция для смены категории
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  
  // Эффект для фильтрации статей при изменении категории
  useEffect(() => {
    // Применяем анимацию исчезновения
    const filterPosts = () => {
      if (activeCategory === "all") {
        setVisiblePosts(allBlogPosts);
      } else if (activeCategory === "useful") {
        setVisiblePosts(allBlogPosts.filter(post => post.type === "useful"));
      } else if (activeCategory === "media") {
        setVisiblePosts(allBlogPosts.filter(post => post.type === "media"));
      }
    };
    
    // Небольшая задержка для эффекта анимации
    filterPosts();
  }, [activeCategory]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-[1376px] mx-auto">
          {/* Заголовок секции */}
          <h2 className="text-5xl font-medium text-[#191919] text-center mb-8">Блог</h2>
          
          {/* Разделители категорий */}
          <div className="flex justify-center mb-14 space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
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
            ))}
          </div>
          
          {/* Карточки блога */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-[30px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg animate-fadeIn"
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Изображение */}
                <div className="relative overflow-hidden h-[240px]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCard === post.id ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-800">
                    {post.category}
                  </div>
                </div>

                {/* Контент */}
                <div className="p-8">
                  <span className="text-gray-500 text-sm block mb-4">{post.date}</span>
                  <h3 className="text-xl font-semibold mb-4 line-clamp-2 min-h-[3.5rem]">{post.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 min-h-[4.5rem]">{post.excerpt}</p>
                  
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
            ))}
          </div>
          
          {/* Кнопка "Смотреть все" */}
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-[#182E45] text-white hover:bg-[#1a3756] transition-all duration-300 group relative overflow-hidden"
              asChild
            >
              <Link href="/blog" className="inline-flex items-center px-8 py-3">
                <span className="relative z-10">Смотреть все публикации</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-[#182E45] transform origin-left group-hover:origin-right group-hover:scale-x-0 transition-transform duration-300"></span>
                <span className="absolute inset-0 bg-[#206EF3] transform scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
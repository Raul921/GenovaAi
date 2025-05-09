import React, { useState } from 'react';
import { ArrowRight, ArrowDown, ChevronDown, Mail, Phone } from 'lucide-react';
import { Instagram } from 'lucide-react';

import { AnimatedItem } from '@/components/ui/animated-item';

// Интерфейс для типов контактов
interface ContactMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// Интерфейс для кодов стран
interface CountryCode {
  code: string;
  name: string;
}

export default function ContactSection() {
  const [hoveredInput, setHoveredInput] = useState<string | null>(null);
  const [showCountryCodes, setShowCountryCodes] = useState<boolean>(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('+7');
  const [showContactMethods, setShowContactMethods] = useState<boolean>(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState<ContactMethod>({
    id: 'telegram',
    name: 'Телеграм',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#29B6F6"/>
        <path d="M9.41 13.92L9.73 11.21L16.53 5.51C16.91 5.16 16.46 5.00 15.97 5.31L7.17 10.55L4.53 11.47C3.61 11.77 3.60 12.45 4.72 12.93L7.18 13.81L15.13 8.67C15.46 8.45 15.77 8.57 15.52 8.81L9.41 13.92Z" fill="white"/>
      </svg>
    )
  });
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: 'telegram'
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  
  // Список кодов стран
  const countryCodes: CountryCode[] = [
    { code: '+7', name: 'Россия' },
    { code: '+375', name: 'Беларусь' },
    { code: '+380', name: 'Украина' },
    { code: '+1', name: 'США' },
    { code: '+44', name: 'Великобритания' },
    { code: '+49', name: 'Германия' },
  ];
  
  // Список типов контактов
  const contactMethods: ContactMethod[] = [
    {
      id: 'telegram',
      name: 'Телеграм',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#29B6F6"/>
          <path d="M9.41 13.92L9.73 11.21L16.53 5.51C16.91 5.16 16.46 5.00 15.97 5.31L7.17 10.55L4.53 11.47C3.61 11.77 3.60 12.45 4.72 12.93L7.18 13.81L15.13 8.67C15.46 8.45 15.77 8.57 15.52 8.81L9.41 13.92Z" fill="white"/>
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#25D366"/>
          <path d="M16.8 7.2C15.8 6.2 14.4 5.6 13 5.6S10.2 6.2 9.2 7.2C8.2 8.2 7.6 9.6 7.6 11C7.6 12.0 7.9 13.0 8.3 13.9L7.7 16.3L10.2 15.7C11.0 16.1 12.0 16.3 13 16.3C14.4 16.3 15.8 15.7 16.8 14.7C17.8 13.7 18.4 12.4 18.4 11C18.4 9.6 17.8 8.2 16.8 7.2ZM13 15.4C12.1 15.4 11.3 15.2 10.6 14.8L10.5 14.7L8.9 15.1L9.3 13.6L9.2 13.5C8.7 12.8 8.5 11.9 8.5 11C8.5 9.9 9.0 8.8 9.7 8.1C10.5 7.3 11.6 6.9 12.7 6.9C13.8 6.9 14.9 7.3 15.6 8.1C16.4 8.8 16.8 9.9 16.8 11C16.8 12.1 16.4 13.1 15.6 13.9C14.9 14.7 13.8 15.4 13 15.4ZM15.3 12.3C15.2 12.2 14.8 12.0 14.7 12.0C14.6 11.9 14.5 11.9 14.4 12.0C14.3 12.1 14.1 12.3 14.0 12.4C14.0 12.5 13.9 12.5 13.8 12.4C13.4 12.2 13.0 12.0 12.7 11.7C12.4 11.4 12.1 11.1 11.9 10.7C11.9 10.6 11.9 10.5 12.0 10.5C12.0 10.5 12.1 10.4 12.1 10.3C12.2 10.3 12.2 10.2 12.2 10.2C12.3 10.1 12.3 10.1 12.2 10.0C12.2 9.9 11.9 9.3 11.8 9.1C11.7 8.8 11.6 8.9 11.5 8.9H11.3C11.2 8.9 11.1 9.0 11.0 9.1C10.9 9.2 10.7 9.4 10.7 9.7C10.7 10.0 10.9 10.3 11.0 10.4C11.5 11.3 12.1 11.9 13.0 12.4C13.2 12.5 13.4 12.6 13.6 12.6C13.8 12.7 14.0 12.7 14.2 12.6C14.5 12.6 14.7 12.3 14.9 12.1C15.0 11.9 15.0 11.7 15.0 11.6C15.0 11.5 15.3 12.3 15.3 12.3Z" fill="white"/>
        </svg>
      )
    },
    {
      id: 'email',
      name: 'Почта',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.75 3.75H2.25C1.01 3.75 0 4.76 0 6V18C0 19.24 1.01 20.25 2.25 20.25H21.75C22.99 20.25 24 19.24 24 18V6C24 4.76 22.99 3.75 21.75 3.75Z" fill="#ECEFF1"/>
          <path d="M21.75 3.75H2.25C1.01 3.75 0 4.76 0 6V18C0 19.24 1.01 20.25 2.25 20.25H21.75C22.99 20.25 24 19.24 24 18V6C24 4.76 22.99 3.75 21.75 3.75ZM21.75 5.25C21.75 5.25 12.04 13.44 12 13.47C11.95 13.44 2.25 5.25 2.25 5.25H21.75ZM21.75 18.75H2.25C1.84 18.75 1.5 18.41 1.5 18V7.25L11.05 15.17C11.15 15.28 11.3 15.33 11.45 15.33H12.55C12.7 15.33 12.85 15.28 12.95 15.17L22.5 7.25V18C22.5 18.41 22.16 18.75 21.75 18.75Z" fill="#F44336"/>
        </svg>
      )
    }
  ];
  
  // Выбор кода страны
  const handleSelectCountryCode = (code: string) => {
    setSelectedCountryCode(code);
    setShowCountryCodes(false);
  };
  
  // Выбор метода контакта
  const handleSelectContactMethod = (method: ContactMethod) => {
    setSelectedContactMethod(method);
    setShowContactMethods(false);
  };
  
  // Обработка отправки формы
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Проверка заполнения обязательных полей
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    
    // Индикация загрузки
    setIsSubmitting(true);
    setSubmitSuccess(null);
    
    try {
      // Получаем данные для отправки
      const formPayload = {
        ...formData,
        countryCode: selectedCountryCode,
        acceptNewsletter: acceptNewsletter
      };
      
      console.log('Отправка данных:', formPayload);
      
      // Реальный запрос к API для отправки письма
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Успешная отправка
        setSubmitSuccess(true);
        
        // Сбрасываем форму после успешной отправки
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          contactMethod: 'telegram'
        });
        setAcceptTerms(false);
        setAcceptNewsletter(false);
      } else {
        // Ошибка на сервере
        console.error('Ошибка на сервере:', result.message);
        setSubmitSuccess(false);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-[1376px] mx-auto relative">
          {/* Основной контейнер */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Левая часть с текстом */}
            <div className="lg:w-[620px] flex flex-col justify-between">
              <div className="mt-auto">
                <AnimatedItem animation="slideUp" delay={0.1}>
                  <h2 className="text-[42px] font-bold mb-12 leading-[140%] font-['Poppins']">
                    <span className="text-blue-600">Оставьте заявку, и</span>
                    <span className="text-gray-950"> <br/>мы поможем внедрить <br/>ИИ-сервисы в вашей<br/> </span>
                    <span className="text-blue-600">организации</span>
                  </h2>
                </AnimatedItem>

                
                {/* Плитки с контактами */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <AnimatedItem animation="slideUp" delay={0.3}>
                    <div className="bg-gray-100 rounded-[30px] p-6 w-full md:w-[300px] h-[184px] flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-gray-950 mb-3">Почта</h3>
                      <a href="mailto:info@genova.ai" className="text-lg text-gray-700 hover:text-blue-600 transition-colors mb-6">
                        info@genova.ai
                      </a>
                      
                      <h3 className="text-lg font-bold text-gray-950 mb-3">Телефон</h3>
                      <a href="tel:+74951234567" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </AnimatedItem>
                  
                  <AnimatedItem animation="slideUp" delay={0.5}>
                    <div className="bg-gray-100 rounded-[30px] p-6 w-full md:w-[300px] h-[184px] flex flex-col justify-center">
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          <a href="/personal-data-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Политика обработки и защиты персональных данных
                          </a>
                        </li>
                        <li>
                          <a href="/anti-corruption-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Антикоррупционная политика
                          </a>
                        </li>
                      </ul>
                    </div>
                  </AnimatedItem>
                </div>
                
                {/* Футер */}
                <AnimatedItem animation="slideUp" delay={0.7}>
                  <div className="bg-gray-950 rounded-[30px] p-8 text-white w-full md:w-[620px] h-[250px] flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-col">
                        <a href="/" className="hover:opacity-80 transition-opacity">
                          <img 
                            src="/images/genova-logo.png" 
                            alt="GENOVA AI для здоровья"
                            className="h-16"
                          />
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-5">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                            <Instagram className="h-5 w-5 text-black" />
                          </div>
                        </a>
                        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0ZM18.3307 13.5102C18.3307 13.5102 19.5764 14.7397 19.9072 15.3622C19.9174 15.3756 19.9225 15.389 19.9277 15.3956C20.0793 15.6667 20.1308 15.8769 20.0524 16.0336C19.9198 16.3016 19.4427 16.4312 19.286 16.4416H17.045C16.838 16.4416 16.4237 16.3836 15.933 16.0202C15.5485 15.7283 15.167 15.2719 14.7977 14.8272C14.2485 14.1935 13.7664 13.6392 13.2812 13.6392C13.2125 13.6392 13.1447 13.6488 13.0797 13.6673C12.6693 13.7895 12.1664 14.3596 12.1664 15.7758C12.1664 16.1685 11.8597 16.4416 11.6392 16.4416H10.6335C10.2845 16.4416 8.03919 16.2788 6.04337 14.1744C3.63135 11.6217 1.41175 6.619 1.39004 6.5653C1.27075 6.26087 1.5341 6.095 1.81954 6.095H4.08056C4.43035 6.095 4.53833 6.32804 4.61512 6.52172C4.70468 6.74934 4.99271 7.47566 5.45675 8.31566C6.24375 9.7519 6.73025 10.407 7.31325 10.407C7.41352 10.407 7.51063 10.3779 7.60019 10.3231C8.23613 9.95023 8.12556 7.72546 8.08733 7.26659C8.08733 7.16913 8.08575 6.06075 7.74094 5.62517C7.49625 5.31554 7.08919 5.20031 6.8414 5.14629C6.92306 5.02588 7.0421 4.92706 7.18175 4.8562C7.56763 4.666 8.2274 4.634 8.88175 4.634H9.34062C10.0547 4.64429 10.2628 4.696 10.5453 4.76825C11.1128 4.90273 11.1283 5.31487 11.0752 6.61229C11.0597 7.0156 11.0442 7.47823 11.0442 8.02725C11.0442 8.14177 11.0391 8.266 11.0391 8.39854C11.0236 9.03447 11.005 9.75054 11.4787 10.0405C11.5527 10.0869 11.6353 10.1125 11.7198 10.1125C11.8748 10.1125 12.1851 10.1125 13.2348 8.33688C13.6989 7.49688 14.0723 6.51583 14.0723 6.51583C14.1275 6.38394 14.2663 6.13279 14.445 6.095H16.775C17.1547 6.095 17.4063 6.17179 17.4681 6.32544C17.5658 6.56116 17.4528 7.35333 16.2985 8.91446L15.7699 9.63571C14.7267 11.0366 14.7267 11.1292 15.8581 12.1939C16.5903 12.8771 16.9999 13.2467 17.4155 13.6392C17.4246 13.6487 17.4347 13.6587 17.4437 13.6678C17.7806 14.001 18.0662 14.2833 18.3307 13.5102Z" fill="#000000"/>
                            </svg>
                          </div>
                        </a>
                        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 18 15.396 18.036C14.7 18.108 14.172 17.592 13.5 17.16C12.444 16.5 11.844 16.08 10.824 15.444C9.636 14.712 10.404 14.304 11.088 13.596C11.268 13.416 14.34 10.68 14.4 10.44C14.4084 10.4004 14.4074 10.3593 14.3972 10.3204C14.387 10.2814 14.3678 10.2459 14.3416 10.2168C14.3153 10.1877 14.2828 10.1659 14.2466 10.1531C14.2104 10.1404 14.1719 10.137 14.1336 10.143C14.064 10.143 13.98 10.179 13.896 10.227C13.788 10.287 12.024 11.484 8.604 13.812C8.1 14.148 7.644 14.312 7.236 14.304C6.78 14.295 5.916 14.052 5.28 13.848C4.5 13.596 3.87 13.464 3.924 13.02C3.948 12.792 4.272 12.552 4.86 12.324C8.55 10.65 11.088 9.552 12.468 9.012C16.248 7.536 17.112 7.236 17.676 7.224C17.7992 7.22104 17.9228 7.24762 18.036 7.302C18.096 7.338 18.204 7.422 18.264 7.542C18.312 7.638 18.336 7.734 18.348 7.848C18.336 7.938 18.372 8.064 17.568 8.16Z" fill="#000000"/>
                            </svg>
                          </div>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0C5.37736 0 0 5.37736 0 12C0 18.6226 5.37736 24 12 24C18.6226 24 24 18.6226 24 12C24 5.37736 18.6226 0 12 0ZM17.9321 14.4623C17.8302 15.0943 17.5245 15.5849 16.9321 15.7736C15.8491 16.1132 12 16.1132 12 16.1132C12 16.1132 8.19811 16.1132 7.06792 15.7736C6.47547 15.5849 6.16981 15.0943 6.06792 14.4623C5.83019 13.0566 5.83019 11 5.83019 11C5.83019 11 5.83019 8.94339 6.06792 7.53774C6.16981 6.90566 6.47547 6.41509 7.06792 6.22642C8.19811 5.88679 12 5.88679 12 5.88679C12 5.88679 15.8491 5.88679 16.9321 6.22642C17.5245 6.41509 17.8302 6.90566 17.9321 7.53774C18.1698 8.94339 18.1698 11 18.1698 11C18.1698 11 18.1698 13.0566 17.9321 14.4623Z" fill="#000000"/>
                              <path d="M10.5664 13.4341L14.1132 11.0001L10.5664 8.56604V13.4341Z" fill="#000000"/>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    <div className="text-base font-normal mt-auto pt-20">
                      © 2025 Все права защищены |{' '}
                      <a href="/" className="font-bold hover:text-blue-300 transition-colors">GENOVA™</a>
                    </div>
                  </div>
                </AnimatedItem>
              </div>
            </div>
            
            {/* Правая часть с формой */}
            <div className="lg:w-[610px] bg-slate-200 rounded-[30px] p-8 relative">
              <form className="flex flex-col gap-4">
                {/* Имя */}
                <div 
                  className={`h-16 bg-white rounded-[20px] px-6 flex items-center transition-all duration-300 transform ${hoveredInput === 'name' ? 'shadow-md scale-[1.02]' : ''}`}
                  onMouseEnter={() => setHoveredInput('name')}
                  onMouseLeave={() => setHoveredInput(null)}
                >
                  <input 
                    type="text" 
                    placeholder="ФИО" 
                    className="w-full text-base font-normal outline-none placeholder-zinc-400 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                {/* Email */}
                <div 
                  className={`h-16 bg-white rounded-[20px] px-6 flex items-center transition-all duration-300 transform ${hoveredInput === 'email' ? 'shadow-md scale-[1.02]' : ''}`}
                  onMouseEnter={() => setHoveredInput('email')}
                  onMouseLeave={() => setHoveredInput(null)}
                >
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full text-base font-normal outline-none placeholder-zinc-400 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                {/* Телефон */}
                <div 
                  className={`h-16 bg-white rounded-[20px] flex items-center transition-all duration-300 transform relative ${hoveredInput === 'phone' ? 'shadow-md scale-[1.02]' : ''}`}
                  onMouseEnter={() => setHoveredInput('phone')}
                  onMouseLeave={() => setHoveredInput(null)}
                >
                  {/* Выпадающий список с кодами стран */}
                  <div className="relative">
                    <button
                      type="button"
                      className="h-12 w-16 ml-[10px] bg-gray-100 rounded-[15px] flex items-center justify-center text-zinc-900 text-base font-normal transition-all hover:bg-gray-200"
                      onClick={() => setShowCountryCodes(!showCountryCodes)}
                    >
                      <span className="mr-1">{selectedCountryCode}</span>
                      <ChevronDown className="h-3 w-3 transition-transform duration-300" style={{ transform: showCountryCodes ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </button>
                    
                    {showCountryCodes && (
                      <div className="absolute z-50 w-40 bg-white rounded-lg shadow-lg mt-2 left-[10px] py-2 animate-in fade-in duration-300">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            className="w-full text-left px-3 py-1.5 hover:bg-gray-100 text-gray-900 text-sm transition-colors"
                            onClick={() => handleSelectCountryCode(country.code)}
                          >
                            <span className="font-medium">{country.code}</span> {country.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Поле для ввода номера */}
                  <input 
                    type="tel" 
                    placeholder="(___) ___-__-__" 
                    className="w-full ml-6 text-base font-normal outline-none placeholder-zinc-400 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                {/* Сообщение */}
                <div 
                  className={`h-40 bg-white rounded-[20px] px-6 pt-6 transition-all duration-300 transform ${hoveredInput === 'message' ? 'shadow-md scale-[1.02]' : ''}`}
                  onMouseEnter={() => setHoveredInput('message')}
                  onMouseLeave={() => setHoveredInput(null)}
                >
                  <textarea 
                    placeholder="Сообщение для нас" 
                    className="w-full h-28 text-base font-normal outline-none placeholder-zinc-400 resize-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                {/* Куда написать */}
                <div className="mt-1">
                  <div className="text-base font-normal text-zinc-900 mb-2">Куда вам написать?</div>
                  <div className="relative">
                    <div 
                      className={`h-16 bg-white rounded-[20px] flex items-center justify-between transition-all duration-300 transform ${hoveredInput === 'contact' ? 'shadow-md scale-[1.02]' : ''}`}
                      onMouseEnter={() => setHoveredInput('contact')}
                      onMouseLeave={() => setHoveredInput(null)}
                      onClick={() => setShowContactMethods(!showContactMethods)}
                    >
                      <div className="flex items-center ml-6">
                        <span>{selectedContactMethod.icon}</span>
                        <span className="text-base font-normal text-zinc-900 ml-3">{selectedContactMethod.name}</span>
                      </div>
                      
                      <div className="bg-gray-950 w-12 h-12 rounded-[15px] flex items-center justify-center mr-[10px] transition-all duration-300 hover:bg-gray-800">
                        <ChevronDown className="w-5 h-5 text-white transition-transform duration-300" style={{ transform: showContactMethods ? 'rotate(180deg)' : 'rotate(0)' }} />
                      </div>
                    </div>
                    
                    {/* Выпадающий список с типами контактов */}
                    {showContactMethods && (
                      <div className="absolute z-50 w-full bg-white rounded-lg shadow-lg mt-2 py-2 animate-in fade-in duration-300">
                        {contactMethods.map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900 flex items-center transition-colors"
                            onClick={() => {
                              handleSelectContactMethod(method);
                              setFormData({...formData, contactMethod: method.id});
                            }}
                          >
                            <span className="mr-3">{method.icon}</span>
                            <span className="text-base">{method.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Чекбоксы соглашений */}
                <div className="mt-2 space-y-2">

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="newsletter"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                        checked={acceptNewsletter}
                        onChange={() => setAcceptNewsletter(!acceptNewsletter)}
                      />
                    </div>
                    <div className="ml-2">
                      <label htmlFor="newsletter" className="text-xs text-gray-700 cursor-pointer">
                        Нажимая кнопку "Отправить", вы соглашаетесь с нашими документами о
                        <a href="/personal-data-policy" className="text-blue-600 hover:underline"> политике обработки и защиты персональных данных</a> и
                        <a href="/marketing-consent" className="text-blue-600 hover:underline"> соглашении о рекламных материалах</a>
                      </label>
                    </div>
                  </div>
                </div>

                
                {/* Статус отправки */}
                {submitSuccess !== null && (
                  <div className={`p-4 rounded-[20px] mt-2 transition-all duration-300 ${submitSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitSuccess 
                      ? 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
                      : 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова или свяжитесь с нами по телефону.'}
                  </div>
                )}

                {/* Кнопка отправить */}
                <button 
                  type="button"
                  onClick={handleSubmit}
                  className="h-16 bg-gray-950 rounded-[20px] border border-gray-950 text-white flex items-center justify-center gap-2 mt-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="text-base font-medium flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    <>
                      <span className="text-base font-medium">Отправить</span>
                      <ArrowRight size={14} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { AnimatedItem } from '@/components/ui/animated-item';
import { Link } from 'wouter';

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

export default function ContactForm() {
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
    setFormData({...formData, contactMethod: method.id});
  };
  
  // Обработка отправки формы
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Проверка заполнения обязательных полей
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    
    if (!acceptTerms) {
      alert('Пожалуйста, примите условия политики обработки персональных данных');
      return;
    }
    
    // Индикация загрузки
    setIsSubmitting(true);
    setSubmitSuccess(null);
    
    try {
      // Получаем данные для отправки
      const formPayload = {
        ...formData,
        countryCode: selectedCountryCode
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
                
                {/* Черный блок футера */}
                <AnimatedItem animation="slideUp" delay={0.7}>
                  <div className="bg-gray-950 rounded-[30px] p-8 text-white w-full md:w-[620px] h-[250px] flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src="/images/genova-logo.png" alt="GENOVA" className="h-6" />
                        <div className="ml-4 text-sm">
                          © 2025 Все права защищены | <span className="font-bold">GENOVA™</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {/* Instagram */}
                        <a href="#" className="hover:opacity-80 transition-opacity">
                          <img src="/images/instagram-icon.svg" alt="Instagram" className="w-7 h-7" />
                        </a>
                        
                        {/* Telegram */}
                        <a href="#" className="hover:opacity-80 transition-opacity">
                          <img src="/images/telegram-icon.svg" alt="Telegram" className="w-7 h-7" />
                        </a>
                        
                        {/* VK */}
                        <a href="#" className="hover:opacity-80 transition-opacity">
                          <img src="/images/vk-icon.svg" alt="VK" className="w-7 h-7" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <p className="text-lg">GENOVA AI для здоровья</p>
                    </div>
                  </div>
                </AnimatedItem>
              </div>
            </div>
            
            {/* Правая часть с формой */}
            <div className="lg:w-[620px] bg-blue-50 rounded-[30px] p-8 mt-8 lg:mt-0">
              <AnimatedItem animation="slideUp" delay={0.1}>
                <h3 className="text-2xl font-bold text-gray-950 mb-6">Оставить заявку</h3>
                <form className="flex flex-col gap-4">
                  {/* Поле ФИО */}
                  <div 
                    className={`h-16 bg-white rounded-[20px] px-6 flex items-center transition-all duration-300 transform ${hoveredInput === 'name' ? 'shadow-md scale-[1.02]' : ''}`}
                    onMouseEnter={() => setHoveredInput('name')}
                    onMouseLeave={() => setHoveredInput(null)}
                  >
                    <input 
                      type="text" 
                      placeholder="ФИО" 
                      className="w-full h-full outline-none text-base" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  {/* Поле Email */}
                  <div 
                    className={`h-16 bg-white rounded-[20px] px-6 flex items-center transition-all duration-300 transform ${hoveredInput === 'email' ? 'shadow-md scale-[1.02]' : ''}`}
                    onMouseEnter={() => setHoveredInput('email')}
                    onMouseLeave={() => setHoveredInput(null)}
                  >
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full h-full outline-none text-base" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  {/* Поле телефона */}
                  <div 
                    className={`h-16 bg-white rounded-[20px] flex items-center transition-all duration-300 transform relative ${hoveredInput === 'phone' ? 'shadow-md scale-[1.02]' : ''}`}
                    onMouseEnter={() => setHoveredInput('phone')}
                    onMouseLeave={() => setHoveredInput(null)}
                  >
                    {/* Код страны */}
                    <div className="h-full px-6 flex items-center border-r border-gray-200 relative">
                      <div 
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setShowCountryCodes(!showCountryCodes)}
                      >
                        <span className="text-base">{selectedCountryCode}</span>
                        <ChevronDown className="h-3 w-3 transition-transform duration-300" style={{ transform: showCountryCodes ? 'rotate(180deg)' : 'rotate(0)' }} />
                      </div>
                      
                      {/* Выпадающий список с кодами стран */}
                      {showCountryCodes && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-[20px] shadow-lg z-10 max-h-[220px] overflow-y-auto">
                          {countryCodes.map((country) => (
                            <div 
                              key={country.code} 
                              className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2 transition-colors"
                              onClick={() => handleSelectCountryCode(country.code)}
                            >
                              <span className="text-base">{country.code}</span>
                              <span className="text-sm text-gray-600">{country.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Поле ввода номера */}
                    <input 
                      type="tel" 
                      placeholder="(___) ___-__-__" 
                      className="w-full h-full outline-none px-4 text-base" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  {/* Поле сообщения */}
                  <div 
                    className={`h-40 bg-white rounded-[20px] px-6 pt-6 transition-all duration-300 transform ${hoveredInput === 'message' ? 'shadow-md scale-[1.02]' : ''}`}
                    onMouseEnter={() => setHoveredInput('message')}
                    onMouseLeave={() => setHoveredInput(null)}
                  >
                    <textarea 
                      placeholder="Сообщение для нас" 
                      className="w-full h-full resize-none outline-none text-base" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  {/* Куда написать */}
                  <div>
                    <label className="block text-base mb-2">Куда вам написать?</label>
                    
                    <div className="relative">
                      <div 
                        className={`h-16 bg-white rounded-[20px] flex items-center justify-between transition-all duration-300 transform ${hoveredInput === 'contact' ? 'shadow-md scale-[1.02]' : ''}`}
                        onMouseEnter={() => setHoveredInput('contact')}
                        onMouseLeave={() => setHoveredInput(null)}
                        onClick={() => setShowContactMethods(!showContactMethods)}
                      >
                        <div className="flex items-center gap-3 px-6">
                          {selectedContactMethod.icon}
                          <span className="text-base">{selectedContactMethod.name}</span>
                        </div>
                        
                        <div className="h-full bg-gray-950 w-16 rounded-r-[20px] flex items-center justify-center">
                          <ChevronDown className="w-5 h-5 text-white transition-transform duration-300" style={{ transform: showContactMethods ? 'rotate(180deg)' : 'rotate(0)' }} />
                        </div>
                      </div>
                      
                      {/* Выпадающий список с методами контакта */}
                      {showContactMethods && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-[20px] shadow-lg z-10">
                          {contactMethods.map((method) => (
                            <div 
                              key={method.id} 
                              className="px-6 py-4 hover:bg-gray-100 cursor-pointer flex items-center gap-3 transition-colors"
                              onClick={() => {
                                handleSelectContactMethod(method);
                                setFormData({...formData, contactMethod: method.id});
                              }}
                            >
                              {method.icon}
                              <span className="text-base">{method.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Соглашение с условиями */}
                  <div className="mt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="relative mt-1">
                        <input 
                          type="checkbox" 
                          className="sr-only" 
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                        />
                        <div className={`w-5 h-5 ${acceptTerms ? 'bg-blue-600' : 'bg-white'} border border-gray-300 rounded transition-colors flex items-center justify-center`}>
                          {acceptTerms && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-gray-700">
                        Нажимая кнопку "Отправить", вы соглашаетесь с нашими документами о <Link to="/personal-data-policy" className="text-blue-600 hover:underline">политике обработки и защиты персональных данных</Link> и <Link to="/marketing-consent" className="text-blue-600 hover:underline">соглашении о рекламных материалах</Link>
                      </span>
                    </label>
                  </div>
                  
                  {/* Кнопка отправки */}
                  <button 
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="h-16 bg-gray-950 rounded-[20px] border border-gray-950 text-white flex items-center justify-center gap-2 mt-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span>Отправка...</span>
                    ) : (
                      <>
                        <span>Отправить</span>
                        <div className="group">
                          <ArrowRight size={14} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </>
                    )}
                  </button>
                  
                  {/* Сообщение о результате отправки */}
                  {submitSuccess === true && (
                    <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-[20px]">
                      Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}
                  
                  {submitSuccess === false && (
                    <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-[20px]">
                      Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.
                    </div>
                  )}
                </form>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
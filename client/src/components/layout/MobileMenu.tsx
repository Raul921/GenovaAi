import { Link, useLocation } from 'wouter';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { title: 'О компании', path: '/about' },
    { title: 'Продукты', path: '/products' },
    { title: 'Блог', path: '/blog' },
    { title: 'Контакты', path: '/contact' },
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src="/images/genova-logo-perfect.png" alt="GENOVA" className="h-10" />
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-[#182E45]" />
          </Button>
        </div>

        <nav className="mt-8">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.path} className="relative group">
                <Link 
                  href={item.path}
                  className={`font-['Inter'] text-lg font-normal block ${
                    isActive(item.path) ? 'text-[#206EF3]' : 'text-[#182E45] hover:text-[#206EF3]'
                  }`}
                  onClick={onClose}
                >
                  {item.title}
                </Link>
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#206EF3] transition-all duration-300 ease-in-out ${
                    isActive(item.path) 
                      ? 'w-20' 
                      : 'w-0 group-hover:w-20'
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 space-y-6">
          <div className="flex">
            <LanguageSwitcher />
          </div>
          
          <Button className="w-full bg-[#182E45] text-white hover:bg-[#182E45]/90 rounded-full">
            Протестировать
          </Button>
        </div>

        <div className="mt-12 border-t pt-6">
          <h3 className="text-lg font-semibold text-[#182E45] mb-4">Связаться с нами</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-[#206EF3] mr-3" />
              <span className="text-[#182E45]">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-[#206EF3] mr-3" />
              <span className="text-[#182E45]">info@genova.ru</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#206EF3] mr-3" />
              <span className="text-[#182E45]">Москва, ул. Примерная, д. 123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
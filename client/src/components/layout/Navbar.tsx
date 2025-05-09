import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

interface NavbarProps {
  onMobileMenuToggle: () => void;
}

export function Navbar({ onMobileMenuToggle }: NavbarProps) {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { title: 'О компании', path: '/about' },
    { title: 'Продукты', path: '/products' },
    { title: 'Блог', path: '/blog' },
    { title: 'Контакты', path: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img src="/images/genova-logo-perfect.png" alt="GENOVA" className="h-10" />
              </div>
            </Link>
          </div>

          {/* Right Side - Desktop Navigation, Language Switcher, Register Button */}
          <div className="flex items-center space-x-10">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className={`font-['Inter'] text-lg font-normal transition-colors pb-1 ${
                      isActive(item.path)
                        ? 'text-[#206EF3]'
                        : 'text-[#182E45] hover:text-[#206EF3]'
                    }`}
                  >
                    {item.title}
                  </Link>
                  <div 
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#206EF3] transition-all duration-300 ease-in-out ${
                      isActive(item.path) 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></div>
                </div>
              ))}
            </nav>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Test Button */}
            <Button 
              className="hidden md:block bg-[#182E45] text-white hover:bg-[#182E45]/90 rounded-full px-6"
            >
              Протестировать
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={onMobileMenuToggle}
            >
              <Menu className="h-6 w-6 text-[#182E45]" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
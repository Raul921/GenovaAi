import { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { ScrollToTopButton } from '../ui/scroll-to-top-button';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
      
      {/* Main Content */}
      <main className="flex-grow bg-white">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Кнопка прокрутки вверх */}
      <ScrollToTopButton />
    </div>
  );
}
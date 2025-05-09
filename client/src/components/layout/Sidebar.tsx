import { useLocation, Link } from "wouter";
import { 
  Home, 
  Building2, 
  ShoppingBag, 
  Newspaper, 
  Phone
} from "lucide-react";

export default function Sidebar() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <aside className="bg-white w-80 min-h-full shadow-xl">
      {/* Branding */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white text-xl font-bold">K</span>
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-primary">КОМПАНИЯ</h1>
            <p className="text-xs text-gray-500">Инновационные решения</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <ul className="menu p-4 text-base-content">
        <li className={isActive("/") ? "active" : ""}>
          <Link href="/" className={isActive("/") ? "active" : ""}>
            <Home className="h-5 w-5" />
            Главная
          </Link>
        </li>
        <li className={isActive("/about") ? "active" : ""}>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            <Building2 className="h-5 w-5" />
            О компании
          </Link>
        </li>
        <li className={isActive("/products") ? "active" : ""}>
          <Link href="/products" className={isActive("/products") ? "active" : ""}>
            <ShoppingBag className="h-5 w-5" />
            Продукты
          </Link>
        </li>
        <li className={isActive("/blog") ? "active" : ""}>
          <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
            <Newspaper className="h-5 w-5" />
            Блог
          </Link>
        </li>
        <li className={isActive("/contacts") ? "active" : ""}>
          <Link href="/contacts" className={isActive("/contacts") ? "active" : ""}>
            <Phone className="h-5 w-5" />
            Контакты
          </Link>
        </li>
      </ul>
      
      {/* Contact info */}
      <div className="border-t absolute bottom-0 w-full">
        <div className="p-4">
          <div className="text-sm text-gray-600">
            <p className="font-semibold mb-1">Свяжитесь с нами</p>
            <p>Москва, ул. Примерная, д. 123</p>
            <p>+7 (999) 123-45-67</p>
            <p className="text-primary">info@company.ru</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

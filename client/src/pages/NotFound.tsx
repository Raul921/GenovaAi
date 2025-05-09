import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Страница не найдена</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
          Извините, запрашиваемая вами страница не существует или была перемещена.
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
}
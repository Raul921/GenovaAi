import React from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const [, navigate] = useLocation();
  
  const handleBack = () => {
    // Check if there's history to go back
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // If no history, go to home page
      navigate('/');
    }
  };
  
  return (
    <div className="mt-10">
      <Button 
        variant="outline"
        onClick={handleBack}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Вернуться назад
      </Button>
    </div>
  );
}
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { BackButton } from '@/components/ui/back-button';

interface ContentLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function ContentLayout({ children, title }: ContentLayoutProps) {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">{title}</h1>
            
            <div className="prose prose-lg">
              {children}
            </div>
            
            <BackButton />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'wouter';

export function PolicyLinks() {
  return (
    <div className="text-gray-500 text-sm mt-4">
      <p>
        Нажимая кнопку "Отправить", вы соглашаетесь с нашими документами:{' '}
        <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">
          политикой конфиденциальности
        </Link>
        ,{' '}
        <Link href="/personal-data-policy" className="text-blue-600 underline hover:text-blue-800">
          политикой обработки персональных данных
        </Link>
        ,{' '}
        <Link href="/anti-corruption-policy" className="text-blue-600 underline hover:text-blue-800">
          антикоррупционной политикой
        </Link>
        {' '}и{' '}
        <Link href="/marketing-consent" className="text-blue-600 underline hover:text-blue-800">
          соглашением о рекламных материалах
        </Link>
        .
      </p>
    </div>
  );
}
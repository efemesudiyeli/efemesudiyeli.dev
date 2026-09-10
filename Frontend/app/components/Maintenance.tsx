import React from 'react';
import Image from 'next/image';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-48 h-48 md:w-64 md:h-64 relative mb-8">
        <Image
          src="/Stop.png"
          alt="Bakım Modu"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
        Üzgünüm, biraz yenilenmeye ihtiyacı vardı...
      </h1>

      <p className="text-lg md:text-md text-gray-500 max-w-md mx-auto">
        Bakım bittiğinde lütfen tekrar kontrol eder misin? ❤️
      </p>
    </div>
  );
}

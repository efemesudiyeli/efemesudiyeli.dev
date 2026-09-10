import React from 'react';
import Image from 'next/image';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-10 text-center max-w-3xl">
        <div className="relative w-56 h-56 md:w-72 md:h-72 drop-shadow-2xl">
          <Image 
            src="/Stop.png" 
            alt="Bakım Modu" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Üzgünüm, biraz yenilenmeye ihtiyacı vardı
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
            daha sonra tekrar kontrol edersen çok sevinirim
          </p>
        </div>
      </div>
    </div>
  );
}

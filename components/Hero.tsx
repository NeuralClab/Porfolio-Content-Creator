import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative text-center py-24 sm:py-32 md:py-40 overflow-hidden">
      {/* Fondo decorativo con gradiente */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-900/30 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          Transformando ideas en{' '}
          <span className="gradient-text">contenido viral</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Soy un creador de contenido estratégico, especializado en construir audiencias y potenciar marcas a través de vídeos que capturan la atención.
        </p>
      </div>
    </section>
  );
};

export default Hero;

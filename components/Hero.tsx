import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative z-10 pt-24 sm:pt-32 md:pt-40 pb-20">
      {/* Fondo decorativo con gradiente */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-900/30 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 lg:gap-32">
          
          {/* Columna de Texto */}
          <div className="max-w-2xl text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Transformando ideas en{' '}
              <span className="gradient-text">contenido viral</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10">
              Soy un creador de contenido estratégico, especializado en construir audiencias y potenciar marcas a través de vídeos que capturan la atención.
            </p>
          </div>
          
          {/* Columna de Imagen */}
          <div className="order-1 md:order-2 flex-shrink-0 md:-mt-24">
             <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Elemento de profundidad */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-60"
                ></div>
                
                {/* Círculo de texto giratorio */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="text-circle-path"
                    d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                    fill="none"
                  />
                  <text className="fill-current text-gray-400 uppercase text-[8px] tracking-widest">
                    <textPath href="#text-circle-path">
                      Creador de contenidos • Estrategia digital •&nbsp;
                    </textPath>
                  </text>
                </svg>
                 
                 {/* Imagen */}
                 <img
                     src="/mi-foto.jpg"
                     alt="Retrato del creador de contenido"
                     className="relative w-full h-full rounded-full object-cover p-8"
                 />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
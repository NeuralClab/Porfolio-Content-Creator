
import React from 'react';
import { optimizationPlatforms } from '../constants';

const Optimization: React.FC = () => {
  return (
    <section id="optimizacion" className="py-20 bg-gray-800/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Optimización de contenidos</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Más allá de la creación: aseguro que cada pieza de contenido alcance su máximo potencial.</p>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-10">
          Implemento técnicas avanzadas de SEO y optimización de algoritmos en cada plataforma para maximizar el alcance, la interacción y la conversión.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {optimizationPlatforms.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center gap-2" title={platform.name}>
                {platform.icon}
                <span className="font-semibold text-white">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Optimization;
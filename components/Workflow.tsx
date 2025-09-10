
import React from 'react';
import { workflowSteps } from '../constants';

const Workflow: React.FC = () => {
  return (
    <section id="como-trabajo" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">¿Cómo trabajo?</h2>
        <p className="text-gray-400 mt-2">Mi proceso estratégico para la creación de contenido de alto impacto.</p>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {workflowSteps.map((item, index) => (
          <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg">
            <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-black gradient-text">{item.step}</span>
                <h3 className="text-2xl font-bold text-white ml-4">{item.title}</h3>
            </div>
            <p className="text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
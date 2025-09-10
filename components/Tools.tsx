
import React from 'react';
import { editingTools, aiTools } from '../constants';
import type { Tool } from '../types';

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
    {tool.icon}
    <h4 className="text-lg font-semibold text-white mt-2">{tool.name}</h4>
  </div>
);

const Tools: React.FC = () => {
  return (
    <section id="herramientas" className="py-20 bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Mis herramientas</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">La tecnología que utilizo para dar vida a cada proyecto.</p>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">Software de Edición</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {editingTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-white mt-20 mb-8 text-center">LLMs y plataformas de IA</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {aiTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
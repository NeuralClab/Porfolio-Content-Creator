
import React from 'react';

const SectionWrapper: React.FC<{id: string; title: string; children: React.ReactNode}> = ({id, title, children}) => (
    <section id={id} className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        {children}
    </section>
);


const About: React.FC = () => {
  return (
    <SectionWrapper id="quien-soy" title="Quién soy">
        <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
                Soy un content creator con un background de 10 años de experiencia en el ámbito digital.
            </p>
            <p>
                Mi background viene desde el marketing digital, lo que me aporta una visión estratégica a la hora de producir y editar vídeos cortos y piezas visuales para redes sociales.
            </p>
            <p>
                Me apasiona combinar creatividad, datos y herramientas de IA para generar contenido atractivo, dinámico y con impacto real.
            </p>
             <p>
                Mi misión es conectar marcas y personas con su audiencia ideal a través de narrativas auténticas y visualmente impactantes.
            </p>
        </div>
    </SectionWrapper>
  );
};

export default About;
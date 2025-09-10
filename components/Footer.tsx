
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700">
      <div className="container mx-auto px-6 lg:px-8 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Creador de Contenido. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

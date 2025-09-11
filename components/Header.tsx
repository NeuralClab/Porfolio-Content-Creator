import React from 'react';
import { navLinks } from '../constants';

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div>
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
              Creador de Contenido
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center justify-end gap-x-6 md:gap-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap text-sm sm:text-base hidden sm:inline-block"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
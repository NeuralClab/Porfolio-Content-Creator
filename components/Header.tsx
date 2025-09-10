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
      <nav className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center justify-end flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap text-sm sm:text-base"
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

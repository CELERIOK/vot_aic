import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Iconos para el menú móvil

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Inicio', path: '#banner' },
    { title: 'Servicios', path: '#services' },
    { title: 'Contacto', path: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#banner" onClick={(e) => handleScroll(e, '#banner')} className="text-xl font-bold logo">VOTAIC</a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
            <a href="/acceso" className="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium">
                Acceso
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
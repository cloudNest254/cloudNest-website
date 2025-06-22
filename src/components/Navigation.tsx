import React, { useState } from 'react';
import { navLinks } from '../data/navigation';
import { Menu, X } from 'lucide-react';
import logo from '../public/cloudNest.logo.png';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-0.5 font-bold md:relative md:left-auto">
          <img src={logo} alt="CloudNest Logo" className="h-36 w-36 overflow-hidden pt-4 pl-0 pr-6"/>
            <span className="text-2xl font-bold text-secondary-900 pr-18 md:pr-auto">CloudNest</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  scrolled ? 'text-secondary-800' : 'text-secondary-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary text-sm py-2 px-4"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className="py-3 text-secondary-800 hover:text-primary-600 font-medium"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary mt-4"
                onClick={toggleMenu}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
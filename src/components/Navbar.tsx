import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">May</span>
              <span className="text-gray-800">So</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#work" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Work</a>
              <a href="#experience" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Experience</a>
              <a href="#impact" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Impact</a>
              <a href="#contact" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#work" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Work</a>
            <a href="#experience" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
            <a href="#impact" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Impact</a>
            <a href="#contact" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
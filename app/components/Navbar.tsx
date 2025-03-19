'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                CruzonChain
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/resume" className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all">
              Resume
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link href="/resume" className="block px-3 py-2 text-gray-300 hover:text-white">
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
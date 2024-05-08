"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import icons from './utils/icons/Index';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 824) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-white fixed w-full top-0 z-10 transition-all duration-300 shadow-md ${isScrolled ? 'h-32' : 'h-36'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow">
          <div className={`${isScrolled ? 'w-32' : 'w-36'} h-full flex items-center`}>
            <Image src={icons.LogoV3Trans} alt="Logo" />
          </div>
        </div>
        <div className="lg:hidden">
          <button className="block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className={`lg:flex space-x-9 ${isMenuOpen && windowWidth <= 824 ? 'flex-col mt-4 lg:mt-0 lg:absolute lg:left-0 lg:top-12' : 'hidden'}`}>
          <li>
            <Link href="/">
              <div className={`text-sky-blue font-bold hover:text-pink-panter ${isScrolled ? 'text-2xl' : 'text-[28px]/[34px]'}`}>Inicio</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className={`text-sky-blue font-bold hover:text-pink-panter ${isScrolled ? 'text-2xl' : 'text-[28px]/[34px]'}`}>Acerca de Nosotros</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className={`text-sky-blue font-bold hover:text-pink-panter ${isScrolled ? 'text-2xl' : 'text-[28px]/[34px]'}`}>Contacto</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
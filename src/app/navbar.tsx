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
      if (window.innerWidth > 1024) {
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
        {windowWidth <= 1024? 
       <div className="relative inline-block text-left mr-4">
        <div>
          <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md
          bg-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-dark-purple hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleMenu}>
              <svg className="h-6 w-6 stroke-dark-purple border-dark-purple" fill="none" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </button>
          </div>
          {isMenuOpen?
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
              <div className="py-1" role="none">
                <a href="#"className="text-sky-blue hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Inicio</a>
              </div>
              <div className="py-1" role="none">
                <a href="#" className="text-sky-blue hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">¿Quiénes somos?</a>
              </div>
              <div className="py-1" role="none">
                <a href="#" className="text-sky-blue hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">¿Qué ofrecemos?</a>
              </div>
              <div className="py-1" role="none">
                <a href="#" className="text-sky-blue hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">Contactanos</a>
              </div>
            </div>
           :
           <>
           </>
           }
            
        </div>
        :
        <ul className={`lg:flex space-x-9 ${windowWidth <= 1024 ? 'hidden' : ''}`}>
          <li>
            <Link href="/">
              <div className={`text-sky-blue font-bold hover:text-pink-panter ${isScrolled ? 'text-2xl' : 'text-[28px]/[34px]'}`}>Inicio</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className={`text-sky-blue font-bold hover:text-pink-panter ${isScrolled ? 'text-2xl' : 'text-[28px]/[34px]'}`}>¿Quiénes somos?</div>
            </Link>
          </li>
          <li>
            <Link href="/offer">
              <div className={`text-sky-blue font-bold hover:text-pink-panter ${isScrolled ? 'text-2xl' : 'text-[28px]/[34px]'}`}>¿Qué ofrecemos?</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className={`text-sky-blue font-bold hover:text-pink-panter ${isScrolled ? 'text-2xl' : 'text-[28px]/[34px]'}`}>Contáctanos</div>
            </Link>
          </li>
        </ul>
        }
      </div>
    </nav>
  );
};

export default NavBar;
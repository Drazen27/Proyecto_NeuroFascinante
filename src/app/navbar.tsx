"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';


const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 952) {
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScreen = () =>{
    handleResize();
    toggleMenu()
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
      <nav className={` bg-white fixed px-8   w-full top-0 z-10 transition-all duration-300 shadow-md ${isScrolled ? ' h-28' : 'h-36'}`} 
      style={{
        backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/icons%2Ffondo.png?alt=media&token=92ec4720-7ac1-4664-9a28-e2cb20ddb2b7')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}>
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="bg-white w-[97%] h-[77%] bg-opacity-70" />
        </div>
          <div className=" h-full mx-[2%] flex justify-between items-center">
            <div className="flex h-full">
              <div className={`${isScrolled ? 'w-48' : 'w-52'} flex items-center  h-fill`}>
                <Link className='h-[75%]' href={"/"}>
                  <img className='h-[100%] hover:opacity-80' src='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/icons%2FlogoV3%2Fneuro_3.2-color_transparencia%20recortado.svg?alt=media&token=4ad43df5-38b7-4336-bfe0-60bdd1b81baf' alt="LogoV3Trans" />
                </Link>
              </div>
            </div>
            {windowWidth <= 952? 
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
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-dark-purple ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                  <Link href="/"className="text-dark-purple hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0" onClick={handleScreen}>Inicio</Link>
                </div>
                <div className="py-1" role="none">
                  <Link href="/pages/about" className="text-dark-purple hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1" onClick={handleScreen}>¿Quiénes somos?</Link>
                </div>
                {/* <div className="py-1" role="none">
                  <Link href="/pages/offer" className="text-dark-purple hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2" onClick={handleScreen}>¿Qué ofrecemos?</Link>
                </div> */}
                <div className="py-1" role="none">
                  <Link href="/pages/contact" className="text-dark-purple hover:text-pink-panter block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3" onClick={handleScreen}>Contacto</Link>
                </div>
            </div>
            :
            <>
            </>
            }
              
          </div>
          :
          <ul className={`flex space-x-3 ${windowWidth <= 952 ? 'hidden' : ''}`}>
            <li>
              <Link href="/">
                <div className={`text-dark-purple font-bold hover:text-pink-panter ${isScrolled ? 'text-xl' : 'text-[22px]/[26px]'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Inicio</div>
              </Link>
            </li>
            <li>
              <Link href="/pages/about">
                <div className={`text-dark-purple font-bold hover:text-pink-panter ${isScrolled ? 'text-xl' : 'text-[22px]/[26px]'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>¿Quiénes somos?</div>
              </Link>
            </li>
            {/* <li>
              <Link href="/pages/offer">
                <div className={`text-dark-purple font-bold hover:text-pink-panter ${isScrolled ? 'text-xl' : 'text-[22px]/[26px]'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>¿Qué ofrecemos?</div>
              </Link>
            </li> */}
            <li>
              <Link href="/pages/contact">
                <div className={`text-dark-purple font-bold hover:text-pink-panter ${isScrolled ? 'text-xl' : 'text-[22px]/[26px]'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Contacto</div>
              </Link>
            </li>
          </ul>
          }

        </div>
        
    </nav>
  );
};

export default NavBar;
'use client'
import React, { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface MisionVisionCardsProps {
    title: string;
    desc: string;
    color:string;
    animationIn: string;
    animationOut: string;
    thres: number;
}

const MisionVisionCards: FC<MisionVisionCardsProps> = ({
    title,
    desc,
    color,
    animationIn,
    animationOut,
    thres
   
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 952) {
        setIsMenuOpen(false);
        }
    };
    const { ref, inView } = useInView({
        threshold: thres, // Define el punto de corte
    });
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

    }, [inView]);
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (

    <div ref={ref} className={`flex flex-col items-center justify-start  nv:w-[50%] w-full  ${color} ${isVisible ? animationIn : animationOut}`}
    style={{
        opacity: isVisible ? '1' : '0'
    }}
    onClick={toggleMenu}> 
        <p className="text-center text-white font-serif font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 mt-[5%] nv:mt-[8%]">{title}</p>
        { windowWidth <= 952?
        
            <div>
                
                <div className=''>
                {!isMenuOpen? 
                <button className="w-full flex justify-center  font-medium  mt-0 mb-5 text-white active:text-gray-300 hover:text-gray-300" > 
                        <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                </button>
                :
                <button className="w-full flex justify-center font-medium  mt-0 mb-2 text-white active:text-gray-300 hover:text-gray-300">
                    <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5L5 1L9 5" />
                    </svg>
                </button>
                }
                </div>
                
                <div 
                    id="dropdownInformation" 
                    className={`z-10 ${isMenuOpen ? 'block' : 'hidden'}  divide-y divide-gray-100 rounded-lg  w-full `}
                >
                    <div >
                    <p className=" text-center text-white font-serif text-base md:text-lg mx-8 mb-6">{desc}</p>
                    </div>
                    {/* <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformationButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-center ">Dashboard</a>
                        </li>
                    </ul> */}
                </div>
            </div>
            :
            <p className="text-center text-white font-serif text-base md:text-lg mx-8 mb-6">{desc}</p>
        }
    </div>

    );
};

export default MisionVisionCards;
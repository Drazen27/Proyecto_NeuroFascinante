'use client'
import React, { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface ListCardProps {
    title: string;
    img: string;
    lista:string[];
    lista2:string[];
    animationIn: string;
    animationOut: string;
    thres: number;
}

const ListCard: FC<ListCardProps> = ({
    title,
    img,
    lista,
    lista2,
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
        <div ref={ref} 
        className={`w-full border-gray-200 min-h-[500px] animate-fadeIn relative ${isVisible ? animationIn : animationOut}`} 
        style={{backgroundImage: `url(${img})`,
        backgroundSize: 'cover', backgroundPosition: 'center'}}
        onClick={toggleMenu}
        >
    <div className="absolute top-0 left-0 w-full h-full "></div>
    <div className="relative flex flex-col gap-8 w-full h-full min-h-[500px] p-4 items-center justify-center bg-gradient-to-b from-white to-transparent bg-gray-500 bg-opacity-30">
        <div className="mx-4 mt-3 items-center ">
            <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h1 className="text-white font-sans text-4xl md:text-5xl lg:text-6xl text-center">{title}</h1>
            </span>
        </div>
        <div className="flex flex-col justify-center items-center  nv:flex-row w-full ">
            <div className="mx-8 mt-3 items-center w-full nv:w-1/2">
                <div className="text-white font-sans text-lg mx-0 sm:mx-0 md:text-xl md:mx-8 lg:text-2xl text-justify">
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <ul className="list-none pl-0  w-full">
                            {lista.map((list, index) => (
                                    <li className="flex items-center mb-2" key={index}>
                                        <svg className="w-[12px] h-[20px] drop-shadow-md text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L1 9" />
                                        </svg>
                                        <span className="mx-2 mb-1">{list}</span>
                                    </li>
                                ))}
                        </ul>
                    </span>
                </div>
            </div>
            <div className="mx-8 mt-3 items-center  w-full nv:w-1/2">
                <p className="text-white font-sans text-lg mx-0 sm:mx-0 md:text-xl md:mx-8 lg:text-2xl text-justify">
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <ul className="list-none pl-0  w-full">
                        <div className="flex flex-wrap justify-center pt-0 pb-4">
                            {lista2.map((list, index) => (
                                <li className="flex items-center mb-2" key={index}>
                                    <svg className="w-[12px] h-[20px] drop-shadow-md text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L1 9" />
                                    </svg>
                                    <span className="mx-2 mb-1">{list}</span>
                                </li>
                            ))}
                            </div>
                        </ul>
                    </span>
                </p>
            </div>
        </div>
    </div>
</div>

    );
};

export default ListCard;
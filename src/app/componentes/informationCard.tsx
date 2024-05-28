'use client'
import React, { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface InformationCardsProps {
    img: any;
    title: string;
    desc: string;
    desc2: string;
    lista: string[];
    animationIn: string;
    animationOut: string;
    tresh: number;
}

const InformationCards: FC<InformationCardsProps> = ({
    img,
    title,
    desc,
    desc2,
    lista,
    animationIn,
    animationOut,
    tresh
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { ref, inView } = useInView({
        threshold: tresh, // Define el punto de corte
    });

    useEffect(() => {
        setIsVisible(inView);
    }, [inView]);

    return (
        <div
            id="dropdownInformationButton" 
            data-dropdown-toggle="dropdownInformation" 
            ref={ref}
            onClick={toggleMenu}
            className={` bg-white flex flex-wrap h-fit    rounded-lg  w-[95%] 
            ${isVisible ? animationIn : animationOut}`}
        >
            <div className='flex flex-col items-center w-full h-[95%] nv:flex-row'>
                <div
                    className="rounded-t-lg nv:rounded-none nv:rounded-tl-lg w-full  min-h-[400px] nv:min-h-[700px]  2xl:min-h-[800px] h-full "
                    style={{backgroundImage: `url(${img})`,
                    backgroundSize: 'cover', backgroundPosition: 'center'}}
                > 
                <div className="w-full min-h-[400px] nv:min-h-[700px] 2xl:min-h-[800px] bg-gradient-to-b nv:bg-gradient-to-r from-transparent to-white "></div>
                </div>
                <div className="flex flex-col px-10 pt-0 pb-4 w-full nv:w-[75%] ">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-center  text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                        <hr/>
                        <p className="mb-3 font-normal text-center nv:text-justify text-gray-700">{desc}</p>
                        <p className="mb-3 font-normal text-center nv:text-justify text-gray-700">{desc2}</p>
                    </div>
                    <div className="flex flex-wrap justify-center pt-0 pb-4">
                        {lista.map((list, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 rounded-lg px-5 py-3 text-center text-sm font-semibold w-fit text-gray-700 mr-2 mb-2"
                            >
                                {list}
                            </span>
                        ))}
                    </div>
                </div>
            
            </div>
             {/* {
            !isMenuOpen?
             <button className="w-full flex justify-center  font-medium px-5 py-2.5 mt-0" > 
                    <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
            </button>
            :
            <button className="w-full flex justify-center font-medium px-5 py-2.5 mt-0">
                <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5L5 1L9 5" />
                </svg>
            </button> 
             } 
                 <div 
                    id="dropdownInformation" 
                    className={`z-10 ${isMenuOpen ? 'block' : 'hidden'}  divide-y divide-gray-100 rounded-lg  w-full `}
                >
                    <div className="py-3 px-4 nv:px-60 font-normal text-gray-900 text-center">
                        <div>{desc2}</div>
                    </div> 
                     <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformationButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-center ">Dashboard</a>
                        </li>
                    </ul> 

                 </div>  */}
        </div>
    );
};

export default InformationCards;
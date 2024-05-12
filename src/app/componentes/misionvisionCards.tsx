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
    const { ref, inView } = useInView({
        threshold: thres, // Define el punto de corte
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);

    return (

    <div ref={ref} className={`flex flex-col items-center justify-start  nv:w-[50%] w-full ${color} ${isVisible ? animationIn : animationOut}`}
    style={{
        opacity: isVisible ? '1' : '0'
    }}> 
        <p className=" text-center text-white font-serif font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 mt-[8%]">{title}</p>
        <p className=" text-center text-white font-serif text-base md:text-lg mx-8 mb-6">{desc}</p>
    </div>

    );
};

export default MisionVisionCards;
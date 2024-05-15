'use client'
import React, { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
interface AboutCardsProps {
    img: any;
    descPerfil: string;
    descEstudios: string;
    diplomados: string[];
    animationIn: string;
    animationOut: string;
    tresh: number;
}

const AboutCards: FC<AboutCardsProps> = ({
    img,
    descPerfil,
    descEstudios,
    diplomados,
    animationIn,
    animationOut,
    tresh
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: tresh, // Define el punto de corte
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);

    return (
        <div ref={ref} className={`max-w-[840px] rounded overflow-hidden bg-zinc-50 shadow-xl ${isVisible ? animationIn : animationOut}`}
             style={{opacity: isVisible ? '1' : '0'}}>
            <img className="w-full" src={img} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Perfil profesional</div>
                <p className="text-gray-700 text-base text-justify">
                    {descPerfil}
                </p>
                <div className="font-bold text-xl mb-1 mt-3">Estudios</div>
                <p className="text-gray-700 text-base text-justify">
                    {descEstudios}
                </p>
                <div className="font-bold text-xl mb-0 mt-3">Diplomados</div>
            </div>
            <div className="px-3 pt-0 pb-4">
                {diplomados.map((diploma, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {diploma}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AboutCards;
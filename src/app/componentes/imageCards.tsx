'use client'
import React, { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface ImageCardsProps {
    img: string;
    title: string;
    desc: string;
    xAxis: string;
    yAxis: string;
    animationIn: string;
    animationOut: string;
    color: string;
    w: string;
    url: string;
}

const ImageCards: FC<ImageCardsProps> = ({
    img,
    title,
    desc,
    xAxis,
    yAxis,
    animationIn,
    animationOut,
    color,
    w,
    url
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.4, // Define el punto de corte
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);

    return (
        <Link href={url} className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100'>
            <div
                ref={ref}
                className={`flex ${yAxis} ${xAxis} min-h-[400px] max-w-[600px] ${isVisible ? animationIn : animationOut}`}
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isVisible ? '1' : '0',
                }}
            >
                <div className={`${w} p-0 shadow-md items-center justify-center`}>
                    <div className={`w-full h-fit p-3 ${color} bg-opacity-50`}>
                        <h5 className="mb-2 text-xl md:text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{title}</h5>
                    </div>
                    <div className="w-full h-fit p-4 bg-gray-400 bg-opacity-50">
                        <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>{desc}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ImageCards;
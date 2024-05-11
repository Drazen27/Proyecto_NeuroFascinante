'use client'
import React, { useState, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import icons from '../../../public/Icons/Index';
import Images from "../../../public/Images/Index";

interface ImageCardsProps {
    img: string;
    title: string;
    desc: string;
    xAxis:string;
    yAxis:string;
    animationIn:string;
    animationOut:string;
    color:string;
    w:string;
  }

const ImageCards:FC<ImageCardsProps> = ({
    img,
    title,
    desc,
    xAxis,
    yAxis,
    animationIn,
    animationOut,
    color,
    w
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Define el punto de corte
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
    if(!inView){
        setIsVisible(false)
    }
  }, [inView]);

  return (
    <div ref={ref} className={`flex  ${yAxis} ${xAxis} min-h-[400px] max-w-[600px] ${isVisible? animationIn : animationOut}`} 
        style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        opacity: isVisible ? '1' : '0', 
        transition: 'opacity 0.5s ease-in-out',
        }}>
        <div className={`${w}  p-0 shadow-md items-center justify-center`}>
            <div className={`w-full h-fit p-3 ${color} bg-opacity-50`}>
                <h5 className="mb-2 text-xl md:text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>{title}</h5>
                </div>

                <div className=" w-full h-fit p-4 bg-gray-400 bg-opacity-50">
                <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base  text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>{desc}</p> 
            </div>
        </div>
    </div>
  );
};
export default ImageCards;
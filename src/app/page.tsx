'use client'
import Image from "next/image";
import icons from '../../public/Icons/Index';
import Images from "../../public/Images/Index";
import ImageCards from "./componentes/imageCards";

export default function Home() {
  return (
    <main className="mx-auto">
      <section className="flex items-center justify-center h-[700px] animate-fadeIn">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute top-0 left-0 w-full h-[800px] flex flex-col items-center justify-center">
          <h1 className="text-sky-blue font-sans font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl  text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>TERAPIA NEUROPSICOLÓGICA</h1>
          <h1 className="text-pink-panter font-sans font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl  text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>NEUROFASCINANTE</h1>
        </div>
      </section>
      
      <section className="px-2 mt-8 flex flex-wrap justify-center gap-4">
        <ImageCards 
        title="Terapia Niños con TDAH" 
        img="'/Images/Neurofascinante/TDAH 2.png'" 
        desc="Terapia especializada diseñada para mejorar la concentración, la organización y el control de los impulsos. Para un mejor rendimiento académico y social." 
        xAxis="justify-start" 
        yAxis="items-end" 
        animationIn="animate-fadeLeft"
        animationOut="animate-fadeOutLeft"
        color="bg-sky-blue"
        w="w-[50%]"/>
        <ImageCards 
        title="Síndrome de Down y discapacidad" 
        img="'/Images/Neurofascinante/Down.png'" 
        desc="Terapia neuropsicológica basada en evidencia científica con un valor importante en niños y niñas con síndrome de Down y otras discapacidades favoreciendo su desarrollo integral" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeTop"
        animationOut="animate-fadeOutTop"
        color="bg-pink-panter"
        w="w-[45%]"/>
        <ImageCards 
        title="Dificultades académicas" 
        img="'/Images/Neurofascinante/Dificultades académicas.png'" 
        desc="Apoyo educativo individualizado para superar obstáculos en el aprendizaje y maximizar el potencial académico" 
        xAxis="justify-center" 
        yAxis="items-end" 
        animationIn="animate-fadeRight"
        animationOut="animate-fadeOutRight"
        color="bg-light-orange"
        w="w-[50%]"/>
        <ImageCards 
        title="Terapia para Niños con Autismo" 
        img="'/Images/Neurofascinante/Autismo.png'" 
        desc="Terapia personalizada para niños con autismo. Con enfoque en el desarrollo de habilidades sociales, comunicativas y de comportamiento, trabajamos para promover la integración y la autonomía de cada niño" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeBottom"
        animationOut="animate-fadeOutBottom"
        color="bg-light-green"
        w="w-[45%]"/>
        <ImageCards 
        title="Problemas de Aprendizaje" 
        img="'/Images/Neurofascinante/Dificultades de aprendizaje 2.png'" 
        desc="Soluciones personalizadas para superar los obstáculos en el aprendizaje, brindando la confianza y las habilidades necesarias para el éxito académico" 
        xAxis="justify-center" 
        yAxis="items-start" 
        animationIn="animate-fadeRight"
        animationOut="animate-fadeOutRight"
        color="bg-dark-purple"
        w="w-[44%]"/>
        <ImageCards 
        title="Evaluaciones con Pruebas Psicométricas" 
        img="'/Images/Neurofascinante/Evaluacion con pruebas psicométricas.png'" 
        desc="Pruebas estandarizadas para evaluar diversas áreas cognitivas, emocionales o del desarrollo" 
        xAxis="justify-end" 
        yAxis="items-end" 
        animationIn="animate-fadeTop"
        animationOut="animate-fadeOutTop"
        color="yellow-300"
        w="w-[43%]"/>
        <ImageCards 
        title="Terapia Conductual" 
        img="'/Images/Neurofascinante/Terapia conductual 2.png'" 
        desc="Ayuda a identificar y modificar comportamientos problemáticos con técnicas como el refuerzo positivo, el modelado y la modificación de contingencias" 
        xAxis="justify-start" 
        yAxis="items-end" 
        animationIn="animate-fadeBottom"
        animationOut="animate-fadeOutBottom"
        color="bg-red-600"
        w="w-[54%]"/>
        <ImageCards 
        title="Terapia Emocional" 
        img="'/Images/Neurofascinante/Terapia emocional 1.png'" 
        desc="Facilita el reconocimiento y la gestión de emociones, promoviendo una mayor estabilidad emocional y relaciones interpersonales más saludables" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeLeft"
        animationOut="animate-fadeOutLeft"
        color="bg-emerald-600"
        w="w-[38%]"/>
        </section>
    </main>
  );
}

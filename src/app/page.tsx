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
        
        <div className=" absolute top-0 left-0 w-full h-[800px] flex flex-col items-center justify-center">
          <h1 className="text-sky-blue font-sans font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl  text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>TERAPIA NEUROPSICOLÓGICA</h1>
          <h1 className="text-pink-panter font-sans font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl  text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>NEUROFASCINANTE</h1>
        </div>
      </section>
      
      <section className="px-2 mt-8 flex flex-wrap justify-center gap-8">
        <ImageCards 
        title="Terapia Niños con TDAH" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTDAH%202.png?alt=media&token=5e49f78e-b448-47ec-b1cf-5b73cc0ceb93'" 
        desc="Terapia especializada diseñada para mejorar la concentración, la organización y el control de los impulsos. Para un mejor rendimiento académico y social." 
        xAxis="justify-start" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-sky-blue"
        w="w-[50%]"
        url="/"/>
        <ImageCards 
        title="Síndrome de Down y discapacidad" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDown.png?alt=media&token=cdff93f8-ec39-48e0-9b30-16e970e22259'" 
        desc="Terapia neuropsicológica basada en evidencia científica con un valor importante en niños y niñas con síndrome de Down y otras discapacidades favoreciendo su desarrollo integral" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-pink-panter"
        w="w-[45%]"
        url="/"/>
        <ImageCards 
        title="Dificultades académicas" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDIficultades%20de%20aprendizaje.png?alt=media&token=37fa7fea-0375-4221-a892-1c4786f63fd3'" 
        desc="Apoyo educativo individualizado para superar obstáculos en el aprendizaje y maximizar el potencial académico" 
        xAxis="justify-center" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-light-orange"
        w="w-[50%]"
        url="/"/>
        <ImageCards 
        title="Terapia para Niños con Autismo" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FAutismo.png?alt=media&token=ca5bb9e4-e076-4145-aaf0-5beb92f129cc'" 
        desc="Terapia personalizada para niños con autismo. Con enfoque en el desarrollo de habilidades sociales, comunicativas y de comportamiento, trabajamos para promover la integración y la autonomía de cada niño" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-light-green"
        w="w-[45%]"
        url="/"/>
        <ImageCards 
        title="Problemas de Aprendizaje" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDificultades%20de%20aprendizaje%202.png?alt=media&token=872881e4-8ef8-4d7b-98b5-8d4336f3accc'" 
        desc="Soluciones personalizadas para superar los obstáculos en el aprendizaje, brindando la confianza y las habilidades necesarias para el éxito académico" 
        xAxis="justify-center" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-dark-purple"
        w="w-[44%]"
        url="/"/>
        <ImageCards 
        title="Evaluaciones con Pruebas Psicométricas" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FEvaluacion%20con%20pruebas%20psicom%C3%A9tricas.png?alt=media&token=ac1e7757-4dcb-4e3e-89be-e967f66c0524'" 
        desc="Pruebas estandarizadas para evaluar diversas áreas cognitivas, emocionales o del desarrollo" 
        xAxis="justify-end" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-yellow-300"
        w="w-[43%]"
        url="/"/>
        <ImageCards 
        title="Terapia Conductual" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTerapia%20conductual%202.png?alt=media&token=0704237c-672b-4c70-83c3-28598dae2636'" 
        desc="Ayuda a identificar y modificar comportamientos problemáticos con técnicas como el refuerzo positivo, el modelado y la modificación de contingencias" 
        xAxis="justify-start" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-red-600"
        w="w-[54%]"
        url="/"/>
        <ImageCards 
        title="Terapia Emocional" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTerapia%20emocional%201.png?alt=media&token=89bd137d-3375-4193-b516-17572d9458f1'" 
        desc="Facilita el reconocimiento y la gestión de emociones, promoviendo una mayor estabilidad emocional y relaciones interpersonales más saludables" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-emerald-600"
        w="w-[38%]"
        url="/"/>
        </section>
    </main>
  );
}

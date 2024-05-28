'use client'
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
      
      <section className="px-2 mt-8 flex flex-wrap justify-center gap-8 ">
        
        <ImageCards 
        title="Terapia Niños con TDAH" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTDAH%203.png?alt=media&token=cfe5b794-0d7c-4a4c-977c-64bb55d1c32a'" 
        desc="Terapia especializada diseñada para mejorar la concentración, la organización y el control de los impulsos. Para un mejor rendimiento académico y social." 
        xAxis="justify-start" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-sky-blue"
        w="w-[50%]"
        url="/pages/information/terapiaTDAH"/>
        
        <ImageCards 
        title="Orientación a padres y hermanos " 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FOrientacion%20a%20padres.png?alt=media&token=5f635b13-b89a-46fb-8459-d2b036f82a62'" 
        desc="Enfatiza el apoyo y la educación para la familia en su conjunto" 
        xAxis="justify-end" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-lime-600"
        w="w-[50%]"
        url="/pages/information/orientacion"/>

        <ImageCards 
        title="Síndrome de Down y discapacidad" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDown.png?alt=media&token=dc7628aa-8c50-4985-8ef0-7a62e712ab0c'" 
        desc="Terapia neuropsicológica basada en evidencia científica con un valor importante en niños y niñas con síndrome de Down y otras discapacidades favoreciendo su desarrollo integral" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-pink-panter"
        w="w-[45%]"
        url="/pages/information/sindromeDown"/>
        <ImageCards 
        title="Dificultades académicas" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDificultades%20acad%C3%A9micas.png?alt=media&token=02f4eeff-5575-4bf2-a41d-fd181e0ac770'" 
        desc="Apoyo educativo individualizado para superar obstáculos en el aprendizaje y maximizar el potencial académico" 
        xAxis="justify-center" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-light-orange"
        w="w-[50%]"
        url="/pages/information/dificultadAcademica"/>
        <ImageCards 
        title="Terapia para Niños con Autismo" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FAutismo.png?alt=media&token=4decb999-664c-4644-b8af-54468d69a6c5'" 
        desc="Terapia personalizada para niños con autismo. Con enfoque en el desarrollo de habilidades sociales, comunicativas y de comportamiento, trabajamos para promover la integración y la autonomía de cada niño" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-light-green"
        w="w-[45%]"
        url="/pages/information/terapiaAutismo"/>
        <ImageCards 
        title="Problemas de Aprendizaje" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDificultades%20de%20aprendizaje%202.png?alt=media&token=3ab8b429-b2ad-40d3-80c3-d3fcb9eae5ac'" 
        desc="Soluciones personalizadas para superar los obstáculos en el aprendizaje, brindando la confianza y las habilidades necesarias para el éxito académico" 
        xAxis="justify-center" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-dark-purple"
        w="w-[44%]"
        url="/pages/information/problemasAprendizaje"/>
        <ImageCards 
        title="Evaluaciones con Pruebas Psicométricas" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FEvaluacion%20con%20pruebas%20psicom%C3%A9tricas.png?alt=media&token=e46ad480-02a3-4f9b-8584-137c9165d5df'" 
        desc="Pruebas estandarizadas para evaluar diversas áreas cognitivas, emocionales o del desarrollo" 
        xAxis="justify-end" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-yellow-300"
        w="w-[43%]"
        url="/pages/information/evaluaciones"/>
        <ImageCards 
        title="Terapia Conductual" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTerapia%20conductual%202.png?alt=media&token=ec0e9416-1708-4493-b36b-3e46b27a3205'" 
        desc="Ayuda a identificar y modificar comportamientos problemáticos con técnicas como el refuerzo positivo, el modelado y la modificación de contingencias" 
        xAxis="justify-start" 
        yAxis="items-end" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-red-600"
        w="w-[54%]"
        url="/pages/information/terapiaConductual"/>
        <ImageCards 
        title="Terapia Emocional" 
        img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTerapia%20emocional%201.png?alt=media&token=049904eb-0333-45b1-8f77-ef99ddc16074'" 
        desc="Facilita el reconocimiento y la gestión de emociones, promoviendo una mayor estabilidad emocional y relaciones interpersonales más saludables" 
        xAxis="justify-start" 
        yAxis="items-start" 
        animationIn="animate-fadeIn"
        animationOut="animate-fadeOut"
        color="bg-emerald-600"
        w="w-[38%]"
        url="/pages/information/terapiaEmocional"/>
        </section>
    </main>
  );
}

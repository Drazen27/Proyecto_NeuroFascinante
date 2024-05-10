import Image from "next/image";
import icons from '../../public/Icons/Index';
import Images from "../../public/Images/Index";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center h-[700px]">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute top-0 left-0 w-full h-[800px] flex flex-col items-center justify-center">
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-7xl xl:text-9xl underline decoration-light-green text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>TERAPIA NEUROPSICOLÓGICA</h1>
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-7xl xl:text-9xl underline decoration-light-orange text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>NEUROFASCINANTE</h1>
        </div>
      </section>
      
      <section className="px-2 mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex  items-end min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/TDAH 2.png')",
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="  w-[50%]  p-0 shadow-md items-center justify-cente">
            <div className="w-full h-fit p-3 bg-sky-blue  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Terapia Niños con TDAH </h5>
            </div>
            <div className="w-full p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-white text-base md:text-sm md:mb-1 lg:text-base xl:text-base text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Terapia especializada diseñada para mejorar la concentración, la organización y el control de los impulsos. Para un mejor rendimiento académico y social. </p> 
            </div>
          </div>
        </div>
        <div  className="flex items-start min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/Down.png')",
        backgroundSize: 'cover', backgroundPosition: 'center',transform: 'scaleX(-1)'}}>
          <div style={{transform: 'scaleX(-1)'}} className=" w-[45%]  p-0 shadow-md items-center justify-center ">
          <div className=" w-full h-fit p-3 bg-pink-panter bg-opacity-50">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Síndrome de Down y discapacidad </h5>
            </div>

            <div className=" w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base text-white text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Muestra cómo la terapia puede mejorar la calidad de vida de personas con síndrome de Down u otras discapacidades</p> 
            </div>
          </div>
        </div>
      <div className="flex justify-center items-end min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/Dificultades académicas.png')",
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="w-2/4 p-0 shadow-md items-center justify-center">
          <div className=" w-full h-fit p-3 bg-light-orange bg-opacity-50">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Dificultades académicas </h5>
            </div>

            <div className=" w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal ext-base md:text-sm md:mb-1 lg:text-base xl:text-base text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Apoyo educativo individualizado para superar obstáculos en el aprendizaje y maximizar el potencial académico.</p> 
            </div>
          </div>
        </div>
        <div className="flex items-start min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/Autismo.png')",
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="w-[45%]  p-0 shadow-md items-center justify-center ">
          <div className="w-full h-fit p-3 bg-light-green  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Terapia para Niños con Autismo</h5>
            </div>

            <div className="w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base  text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Terapia personalizada para niños con autismo. Con enfoque en el desarrollo de habilidades sociales, comunicativas y de comportamiento, trabajamos para promover la integración y la autonomía de cada niño.</p> 
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/DIficultades específicas del aprendizaje 2.png')",
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="w-[44%]  p-0 shadow-md items-center justify-center ">
          <div className="w-full h-fit p-3 bg-dark-purple  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Problemas de Aprendizaje</h5>
            </div>

            <div className="w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base  text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Soluciones personalizadas para superar los obstáculos en el aprendizaje, brindando la confianza y las habilidades necesarias para el éxito académico</p> 
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/Evaluacion con pruebas psicométricas.png')",
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="w-[40%]  p-0 shadow-md items-center justify-center ">
          <div className="w-full h-fit p-3 bg-yellow-300  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Evaluaciones con Pruebas Psicométricas</h5>
            </div>

            <div className="w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base  text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Pruebas estandarizadas para evaluar diversas áreas cognitivas, emocionales o del desarrollo</p> 
            </div>
          </div>
        </div>
        <div className="flex  items-end min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/Terapia conductual 2.png')",
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="w-[54%]  p-0 shadow-md items-center justify-center ">
          <div className="w-full h-fit p-3 bg-red-600  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Terapia Conductual</h5>
            </div>

            <div className="w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base  text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Especializada que ayuda a identificar y modificar comportamientos problemáticos con técnicas como el refuerzo positivo, el modelado y la modificación de contingencias.</p> 
            </div>
          </div>
        </div>
        <div className="flex  items-start min-h-[400px] max-w-[600px]" style={{backgroundImage: "url('/Images/Neurofascinante/Terapia emocional 1.png')",
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="w-[38%]  p-0 shadow-md items-center justify-center ">
          <div className="w-full h-fit p-3 bg-emerald-600  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Terapia Emocional</h5>
            </div>

            <div className="w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base  text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Facilita el reconocimiento y la gestión de emociones, promoviendo una mayor estabilidad emocional y relaciones interpersonales más saludables</p> 
            </div>
          </div>
        </div>
        
        </section>
    </main>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import MisionVisionCards from "@/app/componentes/misionvisionCards";
import AboutCards from "@/app/componentes/aboutCard";
import InformationCards from "@/app/componentes/informationCard";
export default function TerapiaAutismo() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FAutismo%202.png?alt=media&token=2c529e62-0b43-444d-b45c-e0233b8a1af8'"
      title="DIFICULTADES ESPECÍFICAS DEL APRENDIZAJE"
      desc="Un trastorno específico del aprendizaje es una dificultad específica en una o más habilidades necesarias para aprender, que comienza durante la edad escolar y persiste hasta la edad adulta, causando un rendimiento académico, sustancialmente inferior al nivel o calidad esperados para la capacidad intelectual y la instrucción recibida."
      desc2=""
      lista={["Con dificultad en la lectura: Se caracteriza por la falta de precisión en la lectura de palabras, en la velocidad o fluidez lectora, como también en la comprensión de la lectura.",
        "Con dificultad en la expresión escrita: Se caracteriza por las fallas en la corrección ortográfica, corrección gramatical y de la puntuación, como también en la claridad/organización de la escritura.",
        "Con dificultad matemática: Dificultad en el sentido de los números, memorización de operaciones aritméticas, cálculo correcto o fluido •y razonamiento matemático."
      ]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      <br/>
      <section className="w-full border-gray-200 min-h-[500px] animate-fadeIn relative" 
    style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDificultades%20de%20apredizaje%203.webp?alt=media&token=6a2171cb-6d28-433e-9bde-63ebe0bfe318')",
    backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="absolute top-0 left-0 w-full h-full "></div>
    <div className="relative flex flex-col gap-8 w-full h-full min-h-[500px] p-4 items-center justify-center bg-gradient-to-t from-transparent to-white bg-gray-500 bg-opacity-30">
        <div className="mx-4 mt-3 items-center ">
            <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h1 className="text-white font-sans text-4xl md:text-5xl lg:text-6xl text-center">Beneficios del Tratamiento a niños con dificultades específicas del aprendizaje</h1>
                <h1 className="text-white font-sans text-4xl md:text-5xl lg:text-6xl text-center"></h1>
            </span>
        </div>
        <div className="flex flex-col justify-center items-center  nv:flex-row w-full ">
            <div className="mx-8 mt-3 items-center w-full nv:w-1/2">
                <p className="text-white font-sans text-lg mx-0 sm:mx-0 md:text-xl md:mx-8 lg:text-2xl text-justify">
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <ul className="list-none pl-0  w-full">
                            <li className="flex items-center mb-2">
                                <svg className="w-3 h-5 drop-shadow-md text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L1 9" />
                                </svg>
                                <span className="mx-2 mb-1">Aprender a reconocer los sonidos más cortos que componen las palabras (fonemas)</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-3 h-5 drop-shadow-md text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L1 9" />
                                </svg>
                                <span className="mx-2 mb-1">Entender que las letras y las cadenas de letras representan estos sonidos y palabras (fonética)</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-3 h-5 drop-shadow-md text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L1 9" />
                                </svg>
                                <span className="mx-2 mb-1">Entender lo que lee (comprensión)</span>
                            </li>
                        </ul>
                    </span>
                </p>
            </div>
            <div className="mx-8 mt-3 items-center  w-full nv:w-1/2">
                <p className="text-white font-sans text-lg mx-0 sm:mx-0 md:text-xl md:mx-8 lg:text-2xl text-justify">
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <ul className="list-none pl-0  w-full">
                            <li className="flex items-center mb-2">
                                <svg className="w-3 h-5 drop-shadow-md text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L1 9" />
                                </svg>
                                <span className="mx-2 mb-1">Leer en voz alta para desarrollar precisión, velocidad y expresión de lectura (fluidez)</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-3 h-5 drop-shadow-md text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L1 9" />
                                </svg>
                                <span className="mx-2 mb-1">Acumular un vocabulario compuesto de palabras reconocidas y comprendidas</span>
                            </li>
                        </ul>
                    </span>
                </p>
            </div>
        </div>
    </div>
</section>
    </main>
  );
}
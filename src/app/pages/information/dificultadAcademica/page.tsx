import Image from "next/image";
import { Inter } from "next/font/google";
import MisionVisionCards from "@/app/componentes/misionvisionCards";
import AboutCards from "@/app/componentes/aboutCard";
import InformationCards from "@/app/componentes/informationCard";
export default function DificultadAcademica() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDificultades%20acad%C3%A9micas%202.png?alt=media&token=46fef705-1126-46fd-835e-ab87a5be9546'"
      title="DIFICULTADES ACADÉMICAS"
      desc="Las dificultades académicas involucran distintas áreas en el proceso de aprendizaje el niño o niñas, dichas dificultades abarcan, el proceso de lectoescritura, como también el área lógico-matemática, al mismo tiempo involucra problemas de memoria y atención, lo que crea distracciones durante periodos prolongados de tiempo. Por lo cual es necesario:"
      desc2=""
      lista={["Brindar al niño/a un ambiente de apoyo emocional, donde se sienta seguro para expresar sus frustraciones y preocupaciones. Escucha activamente sus preocupaciones y anímale a que hable sobre sus experiencias en la escuela.",
        "Busca de especialistas en educación especial o psicólogos que puedan ofrecer apoyo y orientación especializados para abordar las dificultades académicas del niño.",
        "Enseña al niño habilidades de estudio efectivas, como la organización, la planificación del tiempo, la toma de apuntes y la resolución de problemas."]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      
    </main>
  );
}
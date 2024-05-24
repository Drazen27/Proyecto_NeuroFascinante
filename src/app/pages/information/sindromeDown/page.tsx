import Image from "next/image";
import { Inter } from "next/font/google";
import MisionVisionCards from "@/app/componentes/misionvisionCards";
import AboutCards from "@/app/componentes/aboutCard";
import InformationCards from "@/app/componentes/informationCard";
export default function SindromeDown() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDown%202.png?alt=media&token=17a6177f-6d6a-47fc-b14d-ff8dbfbfb8eb'"
      title="TERAPIA A NIÑOS CON SINDROME DE DOWN U OTRAS DISCAPACIDADES"
      desc="El síndrome de Down es una afección en la que la persona tiene un cromosoma extra."
      desc2="El beneficio de la terapia neuropsicológica basada en evidencia científica tiene un valor importante en niños y niñas con síndrome de Down"
      lista={["El niño consigue desarrollar sus capacidades al máximo.","Se evita que aparezcan problemas secundarios",
        "Se consigue desarrollar su autonomía considerablemente","Hay una mejor adaptación al medio en el que se desenvuelve",
        "El niño desarrolla conductas adecuadas a su edad"]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      
    </main>
  );
}
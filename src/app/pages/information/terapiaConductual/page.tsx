import InformationCards from "@/app/componentes/informationCard";
export default function TerapiaConductual() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTerapia%20conductual.png?alt=media&token=3d417cc5-07f9-4871-868b-9d32aca84908'"
      title="TERAPIA CONDUCTUAL"
      desc="La Terapia Cognitiva Conductual (TCC) se ha consolidado como una de las herramientas más efectivas y útiles para abordar desafíos emocionales en el campo de la psicología. Asimismo, es una de las estrategias clínicas que cuenta con mayor evidencia científica en el abordaje, diagnóstico y tratamiento de diversas patologías en niñas, niños y adolescentes."
      desc2=""
      lista={["Trastornos de la Conducta: como comportamientos oposicionistas desafiantes",
        "Mejorar habilidades de afrontamiento y resolución de problemas",
        "Trastornos por Déficit de Atención e Hiperactividad (TDAH)",
        "Mejorar la comunicación y las relaciones interpersonales",
        "Desarrollo de pensamiento crítico y positivo",
        "Trastornos del espectro Autista"
      ]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      
        
    </main>
  );
}
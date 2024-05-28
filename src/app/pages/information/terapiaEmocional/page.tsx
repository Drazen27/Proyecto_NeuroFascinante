import InformationCards from "@/app/componentes/informationCard";
import ListCard from "@/app/componentes/listCard";
export default function TerapiaEmocional() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTerapia%20emocional%202.png?alt=media&token=84f813a8-2e16-4b09-8c6a-f9ddd5274455'"
      title="TERAPIA EMOCIONAL"
      desc="Educar emocionalmente significa validar las emociones, empatizar con los demás, ayudar a identificar y a nombrar las emociones que se están sintiendo, poner límites, enseñar formas aceptables de expresión y de relación con los demás, quererse y aceptarse a uno mismo, respetar a los demás y proponer estrategias para resolver problemas."
      desc2=""
      lista={[ ]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.5}/>

      </section>
      <section className="mt-24">   
      <ListCard
      title="Beneficios de la Terapia Emocional"
      img="https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTerapia%20Emocional%203.png?alt=media&token=1edbdddf-2f0e-41ac-bb41-37c921ef51b1"
      lista={[
        "Desarrollar la capacidad para relacionarse con uno mismo y con los otros de forma satisfactoria para uno mismo y para los demás",
        "Proporcionar estrategias para el desarrollo de competencias emocionales para el equilibrio y la potenciación de la autoestima",
        "Potenciar la capacidad de esfuerzo y motivación ante el trabajo",
        "Favorecer el autoconocimiento y el conocimiento de los demás"
      ]}
      lista2={[
        "Potenciar actitudes de respeto, tolerancia y socialización",
        "Favorecer el desarrollo integral de los niños y niñas",
        "Desarrollar la tolerancia a la frustración",
        "Desarrollar el control de la impulsividad",
      ]}
      animationIn="animate-fadeIn"
      animationOut="animate-fadeOut"
      thres={0.05}
      />
    </section>
        
    </main>
  );
}
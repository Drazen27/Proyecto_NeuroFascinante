import InformationCards from "@/app/componentes/informationCard";
export default function TerapiaTDAH() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTDAH.png?alt=media&token=ae74731a-5bd3-412f-9dad-96995b84ec4d'"
      title="TERAPIA CON NIÑOS CON TDAH"
      desc="Hay 3 tipos de TDAH según su patrón predominante Las investigaciones muestran que la terapia conductual es una parte importante del tratamiento de los niños con TDAH. Este trastorno no solo afecta la capacidad del niño para prestar atención o permanecer sentado en la escuela, sino que también afecta sus relaciones con la familia y con otros niños. Los niños con TDAH a menudo muestran conductas que pueden perturbar mucho a otras personas. La terapia conductual es una opción de tratamiento que puede ayudar a reducir estas conductas Generalmente es útil comenzar la terapia conductual tan pronto como se realice el diagnóstico."
      desc2="El trastorno por déficit de atención/hiperactividad (TDAH) es un síndrome de falta de atención, hiperactividad e impulsividad."
      lista={["Predomina la hiperactividad/impulsividad",
        "Predomina la falta de atención",
        "Combinación de ambas"]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      
        
    </main>
  );
}
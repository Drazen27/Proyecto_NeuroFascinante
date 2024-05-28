import InformationCards from "@/app/componentes/informationCard";
export default function Evaluaciones() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FEvaluacion%20con%20pruebas%20psicom%C3%A9tricas%202.png?alt=media&token=c00bc3f0-e561-4c38-abff-f7d5504c423f'"
      title="EVALUACIONES CON PRUEBAS PSICOMÉTRICAS"
      desc="Los resultados de las pruebas psicométricas proporcionan información crucial para planificar intervenciones educativas, terapéuticas y de apoyo específicas para las necesidades de cada niño. Esto permite diseñar programas individualizados que maximicen el potencial de desarrollo de cada niño."
      desc2="Al mismo tiempo las pruebas psicométricas pueden utilizarse para monitorear el progreso de los niños en el tiempo, evaluando cómo están respondiendo a las intervenciones y ajustando los enfoques según sea necesario. Esto permite una atención continua y adaptativa a medida que los niños crecen y se desarrollan."
      lista={[]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      
    </main>
  );
}
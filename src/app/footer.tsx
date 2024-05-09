import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-100 text-black py-8">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3 text-sky-blue">Sobre Nosotros</h3>
            <p className="text-sm mt-2">Somos una empresa dedicada a...</p>
            <p className="text-sm">Nuestros valores:</p>
            <ul className="ml-4">
              <li className="text-sm mt-2">Integridad</li>
              <li className="text-sm mt-2">Calidad</li>
              <li className="text-sm mt-2">Innovación</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-light-green">Servicios</h3>
            <ul>
              <li className="text-sm mt-2">Terapia Conductual</li>
              <li className="text-sm mt-2">Terapia Emocional</li>
              <li className="text-sm mt-2">Terapia Niños con Autismo</li>
              <li className="text-sm mt-2">Terapia Niños con TDAH</li>
              <li className="text-sm mt-2">Síndrome de Down y discapacidad</li>
              <li className="text-sm mt-2">Problemas de Aprendizaje</li>
              <li className="text-sm mt-2">Evaluaciones con pruebas psicométricas</li>
              <li className="text-sm mt-2">Dificultades académicas</li>
              <li className="text-sm mt-2">Orientación a padres y hermanos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-light-orange">Contacto</h3>
            <p className="text-sm mt-2">Dirección: Av. Esteban Arce, a dos cuadras del cruce de villas, esq. Cervantes</p>
            <p className="text-sm mt-2">Teléfono: 72534205 - 64206836</p>
            <p className="text-sm mt-2">Correo electrónico: Neurofascinante@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3 text-pink-panter">Síguenos</h3>
            <p><a href="#" className="text-sm hover:text-blue-500 mt-2">Facebook</a></p>
            <p><a href="#" className="text-sm hover:text-blue-500 mt-2">Instagram</a></p>
            <p><a href="#" className="text-sm hover:text-blue-500 mt-2">Tik Tok</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
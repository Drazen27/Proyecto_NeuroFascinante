import React from 'react';

const Footer: React.FC = () => {
  return (
    

<footer className=" bg-zinc-300 mt-5 w-full  ">
    <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://www.neurofascinante.xyz" className="flex items-center">
                  <img src="https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/icons%2FlogoV1%2Fneuro_1.2-color_transparencia.svg?alt=media&token=44e43e2c-bc9c-48f2-883f-6d3640b49b6b" className="h-[25%] me-3 max-w-64" alt="Logo" />
                  
              </a>
          </div>
          <div className="flex flex-wrap gap-2 w-[70%]">
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Servicios</h2>
                    <ul className="text-gray-500  font-medium">
                      <li className="mb-1">
                          <p className="">Terapia Conductual</p>
                      </li>
                      <li className="mb-1">
                          <p className="">Terapia Emocional</p>
                      </li>
                      <li className="mb-1">
                          <p className="">Terapia Niños con Autismo </p>
                      </li>
                      <li className="mb-1">
                          <p className="">Terapia Niños con TDAH</p>
                      </li>
                      <li className="mb-1">
                          <p className="">Síndrome de Down y discapacidad</p>
                      </li>
                      <li className="mb-1">
                          <p className="">Problemas de Aprendizaje</p>
                      </li>
                      <li className="mb-1">
                          <p className="">Evaluaciones con pruebas psicométricas</p>
                      </li>
                      <li className="mb-1">
                          <p className="">Dificultades académicas</p>
                      </li>
                      <li className="mb-1">
                          <p className="">Orientación a padres y hermanos</p>
                      </li>
                      
                  </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Contactanos</h2>
                    <ul className="text-gray-500  font-medium">
                        <li className="mb-4">
                            <p className="">Dirección: Av. Esteban Arce</p>
                            <p className="">a dos cuadras del cruce de villas, esq. Cervantes</p>
                        </li>
                        <li className="mb-4">
                            <p className="">Teléfonos: <a href='https://wa.me/qr/Y5TKS4I2VQHVI1' className='cursor-pointer hover:underline'>72534205</a> - <a href='https://wa.me/message/ANV5MJ3GWYSCP1' className='cursor-pointer hover:underline'>64206836</a></p>
                        </li>
                        <li className="mb-4">
                            <p className="">Correo electrónico: Neurofascinante@gmail.com</p>
                        </li>
                    </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a  className="">Politicas de Privacidad</a>
                      </li>
                      <li>
                          <a  className="">Terminos &amp; Condiciones</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://www.neurofascinante.xyz" className="hover:underline">NeuroFascinante</a>. Todos los derechos reservados
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/profile.php?id=61559023073881&mibextid=kFxxJD" className="text-gray-500 hover:text-gray-900 ">
                  <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://www.instagram.com/neurofascinante?igsh=M2V0dnVmOWt6Mm90" className="text-gray-500 hover:text-gray-900  ms-5">
                <svg xmlns="http://www.w3.org/2000/svg"  className="w-7 h-7" fill="currentColor" viewBox="0 0 47 47">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
                  <span className="sr-only">Instagram</span>
              </a>
              
          </div>
      </div>
    </div>
</footer>

  );
};

export default Footer;
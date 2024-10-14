import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Tertimonial/Testimonial"; // Importa el nuevo componente

const PaginaPrincipal = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Aquí puedes agregar el contenido principal */}
      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <section className="relative py-12 sm:py-16 lg:pb-40">
            <div className="absolute bottom-0 right-0 overflow-hidden">
              <img
                className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
                alt="Pattern"
              />
            </div>

            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                    Innovación tecnológica al servicio de tu empresa.
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-6">
                    En Informatica Peru, ofrecemos soluciones tecnológicas que
                    transforman tu negocio y potencian tu éxito.
                  </p>

                  <a
                    href="#"
                    className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded hover:bg-gray-600"
                    role="button"
                  >
                    Prueba nuestro servicio gratuito
                  </a>

                  {/* Componente Testimonial */}
                  <Testimonial />
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img
                    className="w-auto max-h-[400px] mx-auto lg:max-h-full"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                    alt="Ilustración"
                  />
                </div>
                <div>
                  <h2 className="justify-center text-4xl">Tecnologias</h2>
                  <div className="grid grid-flow-col-dense"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaginaPrincipal;

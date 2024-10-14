import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Informatica Peru. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="px-4 text-sm hover:underline">
              Política de privacidad
            </a>
            <a href="#" className="px-4 text-sm hover:underline">
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

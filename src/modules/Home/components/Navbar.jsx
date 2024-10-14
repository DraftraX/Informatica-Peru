import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="relative z-10 py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to="/home"
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              title="INFORMATICA PERU"
            >
              LOGO - INFORMATICA PERU
            </Link>
          </div>

          {/* Botón de menú para dispositivos móviles */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)} // Cambiar estado de expansión
              aria-expanded={expanded}
            >
              {expanded ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menú principal para pantallas más grandes */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
            <Link
              to="/servicios"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
            >
              Servicios
            </Link>
            <Link
              to="/productos"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
            >
              Productos
            </Link>
            <Link
              to="/soporte"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
            >
              Soporte
            </Link>
            <Link
              to="/sobre-nosotros"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
            >
              Sobre Nosotros
            </Link>
          </div>

          {/* Botón principal */}
          <div className="hidden md:flex">
            <Link
              to="/comienza-gratis"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600"
              role="button"
            >
              Comienza
            </Link>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {expanded && (
          <nav>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <Link
                  to="/servicios"
                  className="flex items-center p-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50"
                >
                  Servicios
                </Link>
                <Link
                  to="/productos"
                  className="flex items-center p-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50"
                >
                  Productos
                </Link>
                <Link
                  to="/soporte"
                  className="flex items-center p-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50"
                >
                  Soporte
                </Link>
                <Link
                  to="/sobre-nosotros"
                  className="flex items-center p-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600"
                  role="button"
                >
                  Comienza
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

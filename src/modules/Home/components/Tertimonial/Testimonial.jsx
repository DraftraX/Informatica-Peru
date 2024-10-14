import React, { useState } from "react";
import { prueba } from "./data";

const Testimonial = () => {
  const [comments, setComments] = useState(prueba); // Estado inicial con comentarios
  const [title, setTitle] = useState(""); // Estado para el título
  const [description, setDescription] = useState(""); // Estado para la descripción
  const [rating, setRating] = useState(0); // Estado para la valoración

  const handleAddComment = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (title.trim() === "" || description.trim() === "" || rating === 0)
      return; // Evita agregar comentarios vacíos

    const newComment = {
      title,
      description,
      rating,
      user: "Ana María", // Puedes cambiar esto por un sistema de autenticación real
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png", // URL del avatar
    };

    setComments([...comments, newComment]); // Agrega el nuevo comentario al estado
    setTitle(""); // Limpia el campo de título
    setDescription(""); // Limpia el campo de descripción
    setRating(0); // Reinicia la valoración
  };

  return (
    <div className="mt-8 sm:mt-16">
      {/* Mostrar comentarios */}
      <div className="mb-8">
        {comments.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-gray-900">Comentarios:</h3>
            <ul className="mt-2 space-y-4">
              {comments.map((comment, index) => (
                <li key={index}>
                  <blockquote className="mt-6">
                    <div className="flex items-center justify-center lg:justify-start">
                      {/* Rating stars */}
                      <div className="flex items-center">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className={`w-5 h-5 ${
                              comment.rating > starIndex
                                ? "text-[#FDB241]"
                                : "text-gray-400"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p className="text-lg font-bold text-gray-900">
                      {comment.title}
                    </p>
                    <p className="mt-3 text-base text-gray-600">
                      {comment.description}
                    </p>
                  </blockquote>

                  <div className="flex items-center justify-center mt-3 lg:justify-start">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={comment.avatar}
                      alt="Usuario"
                    />
                    <p className="ml-2 text-base font-bold text-gray-900">
                      {comment.user}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <form onSubmit={handleAddComment} className="space-y-4">
        {/* Campo para el título */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del comentario"
          className="p-2 border border-gray-300 rounded w-full"
          required
        />

        {/* Campo para la descripción */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción del comentario"
          className="p-2 border border-gray-300 rounded w-full"
          required
        />

        {/* Selección de estrellas */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 cursor-pointer ${
                rating > index ? "text-[#FDB241]" : "text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => setRating(index + 1)} // Establecer la valoración al hacer clic
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded hover:bg-gray-600"
        >
          Agregar Comentario
        </button>
      </form>
    </div>
  );
};

export default Testimonial;

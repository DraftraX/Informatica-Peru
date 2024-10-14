import React from "react";

const Testimonial = () => {
  return (
    <div className="mt-8 sm:mt-16">
      <div className="flex items-center justify-center lg:justify-start">
        {/* Rating stars */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-[#FDB241]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="mt-6">
        <p className="text-lg font-bold text-gray-900">
          ¡La mejor empresa de tecnología en el mercado!
        </p>
        <p className="mt-3 text-base text-gray-600">
          Innovaciones que realmente transforman la manera de trabajar.
        </p>
      </blockquote>

      <div className="flex items-center justify-center mt-3 lg:justify-start">
        <img
          className="w-6 h-6 rounded-full"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
          alt="Usuario"
        />
        <p className="ml-2 text-base font-bold text-gray-900">Ana María</p>
      </div>
    </div>
  );
};

export default Testimonial;

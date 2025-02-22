import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white max-w-lg">
        <img src="/barrier.gif" alt="GIF showing an animated road block barrier."
             className="w-2xs m-auto"/>
        <h1 className="text-4xl font-bold animate__animated animate__fadeInUp">
          UNDER CONSTRUCTION </h1>
        <p className="mt-4 text-xl opacity-75 animate__animated animate__fadeInUp">
          We're working hard to bring you something awesome. </p>
        <p className="mt-2 text-lg animate__animated animate__fadeInUp">
          Stay tuned and check back soon! </p>
        <div className="mt-8">
          <p className="opacity-50 text-sm">
            In the meantime, feel free to reach out at{' '}
            <a href="mailto:hennasoftware@gmail.com" className="text-blue-400 underline">
              hennasoftware@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;

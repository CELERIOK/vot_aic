import React from 'react';

const Banner: React.FC = () => {
  return (
    <section 
      id="banner" 
      className="relative  h-screen w-full flex items-center justify-center hexagon-pattern pt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-5xl gap-50 items-center">
        <div className='flex justify-center md:justify-end'>
          <div className="w-48 h-24 mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-6xl logo">VOT</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl md:text-3xl font-light text-gray-200" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>ASESORÍA</span>
          <span className="text-xl md:text-3xl font-light text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>INTEGRAL</span>
          <span className="text-xl md:text-3xl font-light text-gray-200" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>CANARIA</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
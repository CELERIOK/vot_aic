import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold mb-4">
        Servicio: <span className="capitalize">{serviceName}</span>
      </h1>
      <p className="text-xl text-gray-700 mb-8">🚧 Contenido en desarrollo. 🚧</p>
      <Link to="/" className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition-colors">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default ServiceDetail;
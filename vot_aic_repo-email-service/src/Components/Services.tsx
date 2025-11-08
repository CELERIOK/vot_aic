import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaGavel, FaUsers } from 'react-icons/fa';
import type { Service } from '../interfaces/service';

export const servicesList: Service[] = [
  { name: 'Fiscal', icon: <FaBalanceScale size={40}></FaBalanceScale>, description: 'Optimización y cumplimiento tributario.', path: 'fiscal' },
  { name: 'Contable', icon: <FaCalculator size={40} />, description: 'Gestión financiera y contabilidad al día.', path: 'contable.jpg' },
  { name: 'Jurídico', icon: <FaGavel size={40} />, description: 'Asesoramiento y defensa jurídica integral.', path: 'juridico' }, 
  { name: 'Laboral', icon: <FaUsers size={40} />, description: 'Administración de personal y relaciones laborales.', path: 'laboral' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <Link 
              key={service.name} 
              to={`servicio/${service.path}`}
              className="group block p-8 bg-gray-50 rounded-lg border border-gray-200 text-center hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-gray-700 group-hover:text-white transition-colors duration-300 mb-4 inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
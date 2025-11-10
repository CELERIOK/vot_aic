import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 px-6 text-gray-600">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-bold mb-2">Horario</h4>
          <p>Lunes a Viernes: 9:00 - 18:00</p>
          <h4 className="font-bold mt-4 mb-2">Ubicación</h4>
          <p>Calle Ficticia 123, 38001, Santa Cruz de Tenerife</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contacto</h4>
          <p>Teléfono: <a href="tel:+34922123456" className="hover:text-blue-600">+34 922 123 456</a></p>
          <p>Email: <a href="mailto:info@votconsultoria.com" className="hover:text-blue-600">info@votconsultoria.com</a></p>
          <a href="/aviso-legal" className="block mt-4 hover:text-blue-600">Aviso Legal</a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 border-t pt-6">
        <p>&copy; {new Date().getFullYear()} VOT Consultoría Integral Canaria. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
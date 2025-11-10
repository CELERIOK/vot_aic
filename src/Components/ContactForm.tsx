import React, { useState, useRef } from 'react';
import { servicesList } from './Services';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../services/email'; 

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    form_name: '',
    form_email: '',
    form_phone: '',
    form_service: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; service?: string }>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    let tempErrors: { name?: string; email?: string; service?: string } = {};

    if (!formData.form_name.trim()) {
      tempErrors.name = 'Debe introducir un nombre.';
    }

    if (!formData.form_email.trim()) {
      tempErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.form_email)) {
      tempErrors.email = 'El formato del email no es válido.';
    }

    if (!formData.form_service) {
      tempErrors.service = 'Debe elegir un servicio.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (form.current) {
      setSending(true);
      emailjs
        .sendForm(
          EMAIL_CONFIG.TU_SERVICE_ID,
          EMAIL_CONFIG.TU_TEMPLATE_ID,
          form.current,
          { publicKey: EMAIL_CONFIG.TU_PUBLIC_KEY }
        )
        .then(
          () => {
            alert('Gracias por contactarnos. Su mensaje ha sido enviado.');
            setFormData({ form_name: '', form_email: '', form_phone: '', form_service: '' });
            setErrors({}); // Limpiar errores después de un envío exitoso
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert('Hubo un error al enviar el mensaje, intente más tarde.');
          }
        )
        .finally(() => setSending(false));
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-6 bg-gradient-to-r from-black to-gray-800 hexagon-pattern mt-20"
    >
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Contáctanos</h2>
        <form ref={form} onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <input type="text" 
              value={formData.form_name} 
              onChange={handleChange} 
              placeholder="Nombre*" 
              className={`w-full p-3 bg-gray-200 rounded border ${errors.name ? 'border-red-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="form_name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <input type="email" 
              value={formData.form_email} 
              onChange={handleChange} 
              placeholder="Email*" 
              className={`w-full p-3 bg-gray-200 rounded border ${errors.email ? 'border-red-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-blue-500`} 
              name="form_email"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <input type="tel" 
              value={formData.form_phone} 
              onChange={handleChange} 
              placeholder="Teléfono (Opcional)" 
              className="w-full p-3 bg-gray-200 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
              name="form_phone"
            />
          </div>

          <div className="mb-4">
            <select
              value={formData.form_service}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-200 rounded border ${errors.service ? 'border-red-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="form_service"
            >
              <option value="">Seleccione un servicio*</option>
              {servicesList.map((element) => (
                <option key={element.name} value={element.name}>{element.name}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
          </div>
          
          <button type="submit" disabled={sending} className="w-full bg-blue-600 text-white font-bold p-3 rounded hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400">
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    azienda: '',
    telefono: '',
    email: '',
    tipologia: '',
    messaggio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 relative -top-20 sm:-top-32 lg:-top-52">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Form di contatto</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                Nome<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black text-sm sm:text-base"
              />
            </div>

            {/* Cognome */}
            <div>
              <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-2">
                Cognome<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black text-sm sm:text-base"
              />
            </div>

            {/* Azienda */}
            <div>
              <label htmlFor="azienda" className="block text-sm font-medium text-gray-700 mb-2">
                Azienda<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="azienda"
                name="azienda"
                value={formData.azienda}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black text-sm sm:text-base"
              />
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Tel.<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black text-sm sm:text-base"
              />
            </div>

            {/* Tipologia di progetto */}
            <div>
              <label htmlFor="tipologia" className="block text-sm font-medium text-gray-700 mb-2">
                Tipologia di progetto <span className="text-green-500">+</span>
              </label>
              <select
                id="tipologia"
                name="tipologia"
                value={formData.tipologia}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black text-sm sm:text-base"
              >
                <option value="">Seleziona tipologia</option>
                <option value="web">Sviluppo Web</option>
                <option value="mobile">App Mobile</option>
                <option value="multimedia">Multimedia</option>
                <option value="vr">Realtà Virtuale</option>
                <option value="ar">Realtà Aumentata</option>
                <option value="other">Altro</option>
              </select>
            </div>

            {/* Messaggio */}
            <div>
              <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-black text-sm sm:text-base"
                placeholder="Descrivi il tuo progetto..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center sm:justify-end pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors w-full sm:w-auto justify-center"
              >
                <span className="text-black font-medium text-sm sm:text-base">Invia</span>
                <Image
                  src="/assets/case/btn.PNG"
                  alt="Send icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 
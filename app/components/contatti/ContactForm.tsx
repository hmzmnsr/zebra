'use client';

import { useState } from 'react';

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
    <section className="w-full bg-gradient-to-b from-[#222222] to-[#1a1f2e] py-16">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Container Card */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-8 sm:p-10 lg:p-6 relative max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#111827] mb-6">Form di contatto</h2>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-[#E5E7EB] mb-8"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-[#111827] bg-gray-50 px-3 py-2 mb-0">
                Nome<span className="text-[#EF4444] ml-1">*</span>
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Es. Marco"
                className="w-full h-12 px-4 py-3 bg-white border border-[#E2E8F0] text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Cognome */}
            <div>
              <label htmlFor="cognome" className="block text-sm font-semibold text-[#111827] bg-gray-50 px-3 py-2 mb-0">
                Cognome<span className="text-[#EF4444] ml-1">*</span>
              </label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                required
                placeholder="Es. Rossi"
                className="w-full h-12 px-4 py-3 bg-white border border-[#E2E8F0] text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Azienda */}
            <div>
              <label htmlFor="azienda" className="block text-sm font-semibold text-[#111827] bg-gray-50 px-3 py-2 mb-0">
                Azienda<span className="text-[#EF4444] ml-1">*</span>
              </label>
              <input
                type="text"
                id="azienda"
                name="azienda"
                value={formData.azienda}
                onChange={handleChange}
                required
                placeholder="Es. ACME S.r.l."
                className="w-full h-12 px-4 py-3 bg-white border border-[#E2E8F0] text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-[#111827] bg-gray-50 px-3 py-2 mb-0">
                Tel.<span className="text-[#EF4444] ml-1">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="Es. +39 333 123 4567"
                className="w-full h-12 px-4 py-3 bg-white border border-[#E2E8F0] text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#111827] bg-gray-50 px-3 py-2 mb-0">
                Email<span className="text-[#EF4444] ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="nome@azienda.it"
                className="w-full h-12 px-4 py-3 bg-white border border-[#E2E8F0] text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Tipologia di progetto */}
            <div>
              <label htmlFor="tipologia" className="block text-sm font-semibold text-[#111827] bg-gray-50 px-3 py-2 mb-0">
                Tipologia di progetto <span className="text-[#111827]">+</span>
              </label>
              <select
                id="tipologia"
                name="tipologia"
                value={formData.tipologia}
                onChange={handleChange}
                className="w-full h-12 px-4 py-3 bg-white border border-[#E2E8F0] text-[#111827] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              >
                <option value="">Seleziona…</option>
                <option value="sito-web">Sito web</option>
                <option value="e-commerce">E-commerce</option>
                <option value="app-mobile">App mobile</option>
                <option value="branding">Branding</option>
                <option value="seo">SEO</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            {/* Messaggio */}
            <div>
              <label htmlFor="messaggio" className="block text-sm font-semibold text-[#111827] bg-gray-50 px-3 py-2 mb-0">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                rows={5}
                minLength={0}
                maxLength={2000}
                placeholder="Scrivici due righe sul progetto…"
                className="w-full px-4 py-3 bg-white border border-[#E2E8F0] text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none"
              />

            </div>

                         {/* Submit Button */}
             <div className="flex justify-end">
               <button
                 type="submit"
                 className="w-32 h-32 bg-white border border-[#dce4e7] flex items-end justify-start p-4 font-normal text-[#012E2A] text-sm font-sans hover:bg-gray-50 transition-colors"
               >
                 <span className="flex items-center">
                   Invia il modulo
                   <span className="ml-2">→</span>
                 </span>
               </button>
             </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 
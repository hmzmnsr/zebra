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
    <section className="w-full bg-[#222222] min-h-screen flex items-center justify-center py-8">
      <div className="w-full mx-auto px-5 sm:px-6 lg:px-8">
        {/* Container Card */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-5 sm:p-5 lg:p-8 relative">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">Form di contatto</h2>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-[#E5E7EB] mb-6"></div>
          
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-5 lg:space-y-5">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-[#111827] mb-2">
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
                className="w-full h-12 px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Cognome */}
            <div>
              <label htmlFor="cognome" className="block text-sm font-semibold text-[#111827] mb-2">
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
                className="w-full h-12 px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Azienda */}
            <div>
              <label htmlFor="azienda" className="block text-sm font-semibold text-[#111827] mb-2">
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
                className="w-full h-12 px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-[#111827] mb-2">
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
                className="w-full h-12 px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#111827] mb-2">
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
                className="w-full h-12 px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Tipologia di progetto */}
            <div>
              <label htmlFor="tipologia" className="block text-sm font-semibold text-[#111827] mb-2">
                Tipologia di progetto <span className="text-[#111827]">+</span>
              </label>
              <select
                id="tipologia"
                name="tipologia"
                value={formData.tipologia}
                onChange={handleChange}
                className="w-full h-12 px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
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
              <label htmlFor="messaggio" className="block text-sm font-semibold text-[#111827] mb-2">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                rows={6}
                minLength={0}
                maxLength={2000}
                placeholder="Scrivici due righe sul progetto…"
                className="w-full min-h-[144px] max-h-[320px] px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all resize-none"
              />
              <div className="flex justify-end mt-2">
                <p className="text-xs text-[#64748B]">
                  {formData.messaggio.length}/2000
                </p>
              </div>
            </div>

            {/* Mobile Submit Button (hidden on desktop) */}
            <div className="lg:hidden pt-2">
              <button
                type="submit"
                className="w-full h-12 bg-[#111827] hover:bg-[#1F2937] active:bg-black text-white font-semibold rounded-lg transition-colors"
              >
                Invia il modulo →
              </button>
            </div>
          </form>

          {/* Desktop CTA Panel (hidden on mobile) */}
          <div className="hidden lg:block absolute bottom-5 right-5 w-48 h-14 bg-white border border-[#E5E7EB] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-3">
            <button
              type="submit"
              form="contact-form"
              className="w-full h-10 bg-white text-[#111827] font-semibold rounded-lg transition-colors min-w-[160px] border border-[#E5E7EB] hover:bg-gray-50"
            >
              Invia il modulo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 
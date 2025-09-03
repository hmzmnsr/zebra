'use client';

const EducationHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#282b3e] to-[#363c49] text-white py-48 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-4xl md:text-6xl font-sans text-white mr-4">
             Soluzioni immersive per l&apos;educazione 
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-base md:text-md text-gray-100 leading-none font-sans">
          Forniamo soluzioni multimediali avanzate per portare l immersività nel mondo della scuola. Immagina di insegnare trasportando gli studenti all interno della materia: entrando in una cellula, passeggiando tra le colonne dell Acropoli o esplorando lo spazio. 
          </p>
          
          {/* Second Paragraph */}
                    <p style={{ fontWeight: 300 }} className="text-base md:text-md text-gray-100 leading-none font-sans">
          Immagina di svolgere laboratori simulando qualsiasi attività con un realismo mai visto prima. ZEBRA rende tutto questo possibile, grazie a strumenti progettati per potenziare l apprendimento e massimizzare l efficacia dell insegnamento. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationHero; 
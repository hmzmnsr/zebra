'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight mb-2 sm:mb-3">
          Immersiva al servizio della cura, per una terapia su misura
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
           Stimolare, coinvolgere,<br/> accompagnare.
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-black text-sm leading-tight">
          Il Centro TOG di Milano è un&apos;eccellenza nel trattamento di bambini con disabilità cognitive e neurologiche, da sempre in prima linea nell&apos;adozione di approcci innovativi in campo terapeutico. 
          ZEBRA ha scelto di diventare partner attivo del progetto, mettendo a disposizione le proprie competenze tecnologico-esperienziali. <br/><br/>
          Dalla collaborazione con le terapeute del centro è nata una stanza immersiva interattiva, un ambiente progettato a quattro mani per offrire ai piccoli pazienti trattamenti personalizzati e potenziati, calibrati sulle esigenze individuali. 

          </div>
          <div className="text-black text-sm leading-tight pl-0 sm:pl-8 md:pl-16 lg:pl-20">
          Grazie alla combinazione di immersività, interattività e know-how terapeutico, abbiamo realizzato una sala dove i bambini possono esplorare scenari 3D coinvolgenti, dai fondali marini ai boschi innevati, pensati per stimolare i sensi, favorire l&apos;apprendimento e regalare momenti di libertà ed emozione.<br/><br/>Un progetto pionieristico che ha attirato l&apos;attenzione del settore e dei media, aprendo nuove prospettive sull&apos;uso delle tecnologie immersive in ambito medico-terapeutico. 
          </div>
          <div className="text-black text-sm leading-tight">
            {/* Empty right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 
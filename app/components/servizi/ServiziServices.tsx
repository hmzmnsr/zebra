'use client';

const ServiziServices = () => {
  const services = [
    {
      id: 1,
      title: 'Soluzioni Multimediali Immersive',
      description: 'Creiamo esperienze multimediali immersive che trasportano gli utenti in mondi virtuali coinvolgenti'
    },
    {
      id: 2,
      title: 'Ambienti collaborativi all\'avanguardia',
      description: 'Sviluppiamo spazi di lavoro collaborativi con tecnologie innovative per massimizzare la produttività'
    },
    {
      id: 3,
      title: 'Produzione contenuti',
      description: 'Produciamo contenuti multimediali di alta qualità per comunicazioni aziendali e marketing'
    },
    {
      id: 4,
      title: 'Software development',
      description: 'Sviluppiamo applicazioni software personalizzate per soddisfare le esigenze specifiche del cliente'
    }
  ];

  return (
    <section className="bg-[#FBFDFC] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex items-baseline space-x-3">
              <span className="text-gray-700 text-md flex-shrink-0">
                {service.id}.
              </span>
              <span className="text-gray-700 text-md leading-tight">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiziServices; 
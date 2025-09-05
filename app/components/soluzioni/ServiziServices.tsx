'use client';

const ServiziServices = () => {
  const services = [
    {
      id: 1,
      title: 'Esperienze immersive',
    },
    {
      id: 2,
      title: 'Soluzioni immersive medicali e terapeutiche',
    },
    {
      id: 3,
      title: 'Installazioni interattive',
   
    },
    {
      id: 4,
      title: 'Sistemi visuali per la simulazione',
    
    },
    {
      id: 5,
      title: 'Videomapping e Regia',
   
    },
    {
      id: 6,
      title: 'Soluzioni per fiere ed eventi',
    }
  ];

  return (
    <section className="py-8 md:py-16" style={{ backgroundColor: '#1a2826' }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex items-baseline space-x-3 flex-shrink-0">
              <span className="text-white text-[20px] flex-shrink-0" style={{ fontWeight: 20 }}>
                {service.id}.
              </span>
              <span className="text-white text-[20px] leading-none" style={{ fontWeight: 20 }}>
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
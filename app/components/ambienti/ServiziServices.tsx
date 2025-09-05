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
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#47515a'}}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex items-baseline space-x-3">
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
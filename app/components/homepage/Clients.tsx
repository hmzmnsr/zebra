'use client';

import Image from 'next/image';

const Clients = () => {
  const clients = [
    { name: 'EPSON', logo: '/assets/homepage/buslogo1.png' },
    { name: 'accenture', logo: '/assets/homepage/buslogo2.png' },
    { name: 'ONIVERSE', logo: '/assets/homepage/buslogo3.png' },
    { name: 'amplifon', logo: '/assets/homepage/buslogo4.png' },
    { name: 'pierre cardin', logo: '/assets/homepage/buslogo5.png' },
    { name: 'LANEROSSI', logo: '/assets/homepage/buslogo6.png' },
    { name: 'REGIONE DEL VENETO', logo: '/assets/homepage/buslogo7.png' },
    { name: 'OLAFER', logo: '/assets/homepage/buslogo8.png' },
    { name: 'Beta', logo: '/assets/homepage/buslogo9.png' },
    { name: 'TOG', logo: '/assets/homepage/buslogo10.png' },
  ];

  return (
    <section className="bg-white h-screen flex items-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Headline */}
        <div className="text-center mb-24">
          <h2 className="text-2xl md:text-3xl mb-12" style={{ color: '#3a615c' }}>
            I nostri prodotti e servizi vengono scelti da istituzioni e brand leader di settore
          </h2>
        </div>

        {/* Client Logos */}
        <div className="flex justify-center items-center gap-8 overflow-x-auto">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={720}
                height={360}
                priority={index < 5}
                className="w-32 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 
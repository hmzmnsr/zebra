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
    { name: 'OLAFER', logo: '/assets/homepage/buslogo2.png' },
    { name: 'Beta', logo: '/assets/homepage/buslogo9.png' },
    { name: 'TOG', logo: '/assets/homepage/buslogo10.png' },
  ];

  return (
    <section className="bg-white py-16 md:py-32 lg:py-60 flex items-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl px-4 md:px-0" style={{ color: '#3a615c' }}>
            I nostri prodotti e servizi vengono scelti da istituzioni e brand leader di settore
          </h2>
        </div>

        {/* Client Logos - Marquee Version for all devices */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="flex items-center justify-center flex-shrink-0 mx-2 md:mx-4 lg:mx-6">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={720}
                  height={360}
                  priority={index < 5}
                  className="w-20 h-10 md:w-24 md:h-12 lg:w-32 lg:h-16 object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="flex items-center justify-center flex-shrink-0 mx-2 md:mx-4 lg:mx-6">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={720}
                  height={360}
                  priority={index < 5}
                  className="w-20 h-10 md:w-24 md:h-12 lg:w-32 lg:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 
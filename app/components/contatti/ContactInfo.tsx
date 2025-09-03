'use client';

const ContactInfo = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom_left,#1D2029_0%,#1D2029_70%,#39414c_100%)] flex items-center py-20">
      <div className="w-full">
        {/* Horizontal line at top third */}
        <div className="h-px bg-gray-400 mb-16 ml-40"></div>
        
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ml-2">
            
                         {/* Left Section - Company Details, Address and Contacts */}
             <div className="text-white space-y-8">
               {/* Company Name and Website */}
               <div className="space-y-2">
                 <h1 className="text-3xl lg:text-4xl font-extralight text-white">
                   ZEBRA MULTIMEDIA
                 </h1>
                 <p className="text-md lg:text-md text-white">
                   zebramultimedia.it
                 </p>
               </div>
               
               {/* Address and Contacts Side by Side */}
               <div className="grid grid-cols-2 gap-12">
                 {/* Address Section */}
                 <div className="space-y-4">
                   <h2 className="text-md lg:text-md font-extralight text-white">
                     Indirizzo
                   </h2>
                   <div className="space-y-2 text-md lg:text-sm font-extralight">
                     <p>ZEBRA S.R.L.</p>
                     <p>Viale Arnaldo Fusinato 12,</p>
                     <p>Vicenza (VI) 36 100, ITALY</p>
                     <p>+39321223311</p>
                   </div>
                 </div>
                 
                 {/* Contacts Section */}
                 <div className="space-y-4">
                   <h2 className="text-md lg:text-md font-extralight text-white">
                     Contatti
                   </h2>
                   <div className="text-md lg:text-sm font-extralight">
                     <p>(+39) 321-223311</p>
                   </div>
                 </div>
               </div>
             </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 
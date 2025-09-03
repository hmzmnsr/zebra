'use client';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden mt-[70px] md:mt-0 h-[calc(100vh-70px)] md:h-auto bg-black">
      {/* Background Video */}
      <div className="relative h-auto pt-10">
        <video
          src="/assets/homepage/hero1.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player="true"
          x5-video-player-fullscreen="true"
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-screen object-cover"
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(() => {
              // Fallback: if autoplay fails, try to play on first user interaction
              document.addEventListener('touchstart', () => video.play(), { once: true });
              document.addEventListener('click', () => video.play(), { once: true });
            });
          }}
        />
        
        {/* Gradient Overlay - transparent to bottom section color */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-black/20 via-40% to-[#222222] to-100% z-5"></div>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-start md:items-end justify-center z-10 px-4 md:px-8 pt-80 md:pt-0 mb-0 md:mb-24">
          <div className="text-center text-white max-w-4xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-thin mb-4 md:mb-6 leading-tight px-2 md:px-0 font-cofo">
              Creiamo esperienze<br className="hidden sm:block"/> immersive memorabili
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed px-2 md:px-0 font-cofo">
              Diamo forma a visioni ambiziose trasformandole in <br className="hidden sm:block"/> soluzioni multimediali su misura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
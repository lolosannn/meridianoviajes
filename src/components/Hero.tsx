export default function Hero() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal"
        style={{
          fontFamily: '"Instrument Serif", serif',
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          color: '#000000',
        }}
      >
        Más allá de las <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>fronteras,</em>{' '}
        descubrimos <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>lo extraordinario.</em>
      </h1>

      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed font-sans"
        style={{ color: '#6F6F6F' }}
      >
        Creamos viajes para mentes curiosas, exploradores intrépidos y almas errantes. Más allá de
        lo común, diseñamos escapadas a medida para el descubrimiento profundo y la aventura pura.
      </p>

      <a
        href="#contacto"
        className="animate-fade-rise-delay-2 inline-block rounded-full px-14 py-5 text-base mt-12 font-sans transition-transform duration-300 hover:scale-[1.03]"
        style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
      >
        Comenzar viaje
      </a>
    </section>
  );
}

const STATS = [
  { value: '12 años', label: 'Diseñando viajes' },
  { value: '48', label: 'Destinos en catálogo' },
  { value: '15.000+', label: 'Viajeros felices' },
  { value: '100%', label: 'Itinerarios a medida' },
];

export default function About() {
  return (
    <section id="nosotros" className="relative z-10 bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            className="text-4xl sm:text-5xl font-normal"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
          >
            Nosotros
          </h2>
          <p className="mt-6 text-base sm:text-lg font-sans leading-relaxed" style={{ color: '#6F6F6F' }}>
            Fundada en 2014, Meridiano Tours nace de la convicción de que viajar es la forma más
            honesta de conocer el mundo. Desde nuestra sede en Buenos Aires, diseñamos itinerarios
            a medida para quienes buscan algo más que un destino: buscan una historia que contar.
          </p>
          <p className="mt-4 text-base sm:text-lg font-sans leading-relaxed" style={{ color: '#6F6F6F' }}>
            Trabajamos con guías locales, alojamientos elegidos a mano y tiempos pensados para
            disfrutar, no para correr.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <p
                className="text-4xl"
                style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-sm font-sans" style={{ color: '#6F6F6F' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

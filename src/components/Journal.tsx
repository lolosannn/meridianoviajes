const POSTS = [
  {
    title: 'Cinco amaneceres en la Patagonia',
    date: '12 mar 2026',
    category: 'Naturaleza',
    excerpt:
      'Crónica de una semana caminando entre glaciares, con el silencio como único compañero.',
  },
  {
    title: 'Guía para perderse en Kioto',
    date: '28 feb 2026',
    category: 'Cultura',
    excerpt:
      'Templos, callejones y casas de té: un itinerario para quienes prefieren descubrir sin mapa.',
  },
  {
    title: 'El desierto de Marrakech al atardecer',
    date: '15 feb 2026',
    category: 'Aventura',
    excerpt: 'Dunas rojas, campamentos beduinos y un cielo que se llena de estrellas.',
  },
];

export default function Journal() {
  return (
    <section id="diario" className="relative z-10 bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-normal"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
        >
          Diario
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg font-sans leading-relaxed" style={{ color: '#6F6F6F' }}>
          Historias, guías y notas de viaje escritas por nuestro equipo y nuestros viajeros.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article key={post.title} className="border-t pt-6" style={{ borderColor: '#E5E5E5' }}>
              <p className="text-sm font-sans" style={{ color: '#6F6F6F' }}>
                {post.category} · {post.date}
              </p>
              <h3
                className="text-2xl mt-3"
                style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
              >
                {post.title}
              </h3>
              <p className="mt-3 text-sm font-sans leading-relaxed" style={{ color: '#6F6F6F' }}>
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

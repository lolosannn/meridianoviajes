import { useState } from 'react';
import { DESTINATIONS, type Destination } from '../data/destinations';
import DestinationModal from './DestinationModal';

export default function Destinations() {
  const [selected, setSelected] = useState<Destination | null>(null);

  return (
    <section id="destinos" className="relative z-10 bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-normal"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
        >
          Destinos
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg font-sans leading-relaxed" style={{ color: '#6F6F6F' }}>
          Una selección de lugares que elegimos por su capacidad de transformar a quien los visita.
          Hacé click en un destino para ver el viaje completo.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((d) => (
            <button
              key={d.slug}
              onClick={() => setSelected(d)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] flex items-end p-6 text-left transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={d.cover}
                alt={`${d.name}, ${d.place}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="relative">
                <p className="text-sm font-sans" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {d.place}
                </p>
                <h3
                  className="text-2xl mt-1"
                  style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
                >
                  {d.name}
                </h3>
                <p className="text-sm mt-2 font-sans" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {d.tagline}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <DestinationModal destination={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

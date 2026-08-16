import { useEffect } from 'react';
import type { Destination } from '../data/destinations';
import { buildWhatsAppLink } from '../lib/whatsapp';

interface Props {
  destination: Destination | null;
  onClose: () => void;
}

export default function DestinationModal({ destination, onClose }: Props) {
  useEffect(() => {
    if (!destination) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [destination, onClose]);

  if (!destination) return null;

  const whatsappHref = buildWhatsAppLink(
    `Hola! Quiero más información sobre el viaje a ${destination.name}.`,
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8 sm:py-16"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
          style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#000000' }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative aspect-[16/9]">
          <img
            src={destination.coverLarge}
            alt={destination.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-8">
            <p className="text-sm font-sans" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {destination.place}
            </p>
            <h3
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
            >
              {destination.name}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-base font-sans leading-relaxed" style={{ color: '#6F6F6F' }}>
            {destination.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {destination.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt={`${destination.name} — imagen del viaje`}
                className="h-32 sm:h-44 w-full rounded-xl object-cover"
                loading="lazy"
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="text-xs font-sans uppercase tracking-wide" style={{ color: '#6F6F6F' }}>
                Duración
              </p>
              <p className="text-lg font-sans mt-1" style={{ color: '#000000' }}>
                {destination.duration}
              </p>
            </div>
            <div>
              <p className="text-xs font-sans uppercase tracking-wide" style={{ color: '#6F6F6F' }}>
                Precio
              </p>
              <p className="text-lg font-sans mt-1" style={{ color: '#000000' }}>
                {destination.price}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4
              className="text-2xl"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
            >
              Excursiones incluidas
            </h4>
            <ul className="mt-4 space-y-3">
              {destination.excursions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-sans" style={{ color: '#6F6F6F' }}>
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: '#000000' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full px-8 py-3.5 text-sm font-sans transition-transform duration-300 hover:scale-[1.03]"
            style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

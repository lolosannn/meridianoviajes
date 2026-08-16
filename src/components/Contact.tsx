import { useState, type FormEvent } from 'react';
import { buildWhatsAppLink } from '../lib/whatsapp';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative z-10 bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <a
            href={buildWhatsAppLink(
              'Hola! Quiero más información para armar un viaje con Meridiano Tours.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <h2
              className="text-4xl sm:text-5xl font-normal transition-opacity group-hover:opacity-70"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
            >
              Hablemos de tu próximo viaje
            </h2>
            <p
              className="mt-6 text-base sm:text-lg font-sans leading-relaxed max-w-md"
              style={{ color: '#6F6F6F' }}
            >
              Escribinos por WhatsApp y armamos tu itinerario al instante.
            </p>
            <span
              className="mt-4 inline-flex items-center gap-2 text-sm font-sans transition-transform group-hover:translate-x-1"
              style={{ color: '#000000' }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.79 14.03c-.24.68-1.4 1.3-1.93 1.35-.5.05-.98.24-3.27-.68-2.76-1.1-4.53-3.93-4.67-4.11-.14-.19-1.11-1.48-1.11-2.82s.7-2 .95-2.28c.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.6 2 1.1.98 2.03 1.29 2.31 1.43.28.14.44.12.61-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
              </svg>
              Chatear ahora
            </span>
          </a>

          <div className="mt-8 space-y-2 text-sm font-sans" style={{ color: '#6F6F6F' }}>
            <p>
              <a
                href="mailto:meridianoviajes@gmail.com"
                className="hover:opacity-70 transition-colors"
                style={{ color: '#000000' }}
              >
                meridianoviajes@gmail.com
              </a>
            </p>
            <p>+54 11 6034-2441</p>
            <p>Av. del Libertador 1234, Buenos Aires, Argentina</p>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-2xl border p-8" style={{ borderColor: '#E5E5E5' }}>
              <h3
                className="text-2xl"
                style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
              >
                ¡Gracias, {name || 'viajero'}!
              </h3>
              <p className="mt-3 text-sm font-sans leading-relaxed" style={{ color: '#6F6F6F' }}>
                Recibimos tu mensaje. Nuestro equipo se va a poner en contacto muy pronto para
                empezar a diseñar tu viaje.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-sans mb-2" style={{ color: '#000000' }}>
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border px-4 py-3 text-sm font-sans outline-none focus:border-black transition-colors"
                  style={{ borderColor: '#E5E5E5', color: '#000000' }}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-sans mb-2" style={{ color: '#000000' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm font-sans outline-none focus:border-black transition-colors"
                  style={{ borderColor: '#E5E5E5', color: '#000000' }}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-sans mb-2" style={{ color: '#000000' }}>
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border px-4 py-3 text-sm font-sans outline-none focus:border-black transition-colors resize-none"
                  style={{ borderColor: '#E5E5E5', color: '#000000' }}
                  placeholder="Contanos sobre el viaje que tenés en mente"
                />
              </div>

              <button
                type="submit"
                className="rounded-full px-8 py-3 text-sm font-sans transition-transform duration-300 hover:scale-[1.03]"
                style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

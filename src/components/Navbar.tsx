const NAV_ITEMS = [
  { label: 'Destinos', href: '#destinos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Diario', href: '#diario' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <a
        href="#inicio"
        className="text-3xl tracking-tight"
        style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
      >
        Meridiano Tours<sup className="text-base align-super">®</sup>
      </a>

      <div className="hidden md:flex items-center gap-8">
        <a
          href="#inicio"
          className="text-sm font-sans transition-colors"
          style={{ color: '#000000' }}
        >
          Inicio
        </a>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-sans transition-colors hover:opacity-70"
            style={{ color: '#6F6F6F' }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="#contacto"
        className="inline-block rounded-full px-6 py-2.5 text-sm font-sans transition-transform duration-300 hover:scale-[1.03]"
        style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
      >
        Comenzar viaje
      </a>
    </nav>
  );
}

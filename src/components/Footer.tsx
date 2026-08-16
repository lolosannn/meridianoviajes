export default function Footer() {
  return (
    <footer className="relative z-10 bg-white px-8 py-10 border-t" style={{ borderColor: '#E5E5E5' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm font-sans" style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}>
          Meridiano Tours<sup className="text-xs align-super">®</sup>
        </p>
        <p className="text-sm font-sans" style={{ color: '#6F6F6F' }}>
          © {new Date().getFullYear()} Meridiano Tours. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

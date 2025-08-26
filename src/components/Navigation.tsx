const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'services', label: 'Usługi' },
    { id: 'store', label: 'Sklep' },
    { id: 'offer', label: 'Oferta' },
    { id: 'realizacje', label: 'Realizacje' },
    { id: 'cennik', label: 'Cennik' },
    { id: 'kontakt', label: 'Kontakt' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" role="navigation" aria-label="Główna nawigacja">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-warm-brown">PanKominek</h2>
          </div>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-warm-brown transition-colors duration-200"
                  aria-label={`Przejdź do sekcji ${item.label}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="hidden md:block">
            <a 
              href="tel:+48500200949" 
              className="text-fire-orange font-semibold hover:text-warm-brown transition-colors"
              aria-label="Zadzwoń do nas"
            >
              +48 500-200-949
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
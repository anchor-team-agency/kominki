import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-fire-orange">PanKominek</h3>
            <p className="text-white/80">
              Profesjonalne kominki w Gdańsku
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-fire-orange" />
                <span className="text-white/80">+48 500-200-949</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-fire-orange" />
                <span className="text-white/80">biuro@pankominek.eu</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Obszar działania</h4>
            <p className="text-white/80">
              Gdańsk i okolice<br />
              Cała Polska
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 PanKominek. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
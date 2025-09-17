import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

const StoreLocation = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Sklep z kominkami Gdańsk
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lewa kolumna: dane + opis */}
          <Card className="shadow-elegant border-stone-gray-light">
            <CardHeader>
              <CardTitle className="text-2xl text-warm-brown flex items-center gap-3">
                <MapPin className="w-6 h-6 text-fire-orange" />
                Nasze miejsce w Gdańsku
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Dane kontaktowe */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-fire-orange" />
                  <span className="font-medium">+48 500-200-949</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-fire-orange" />
                  <span>Godziny otwarcia: 8:00 – 16:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-fire-orange" />
                  <span>biuro@pankominek.eu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-fire-orange" />
                  <a 
                    href="https://pankominek.eu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-fire-orange hover:underline"
                  >
                    pankominek.eu
                  </a>
                </div>
              </div>

              {/* Opis */}
              <div className="pt-4 border-t border-stone-gray-light">
                <p className="text-foreground/80 leading-relaxed">
                  Szeroki wybór kominków i akcesoriów dostępnych w Gdańsku. 
                  Oferta obejmuje wkłady powietrzne, wodne oraz modele z zamkniętą komorą spalania.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Prawa kolumna: mapa Gdańska */}
          <div className="rounded-lg shadow-elegant overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92944.059986481!2d18.481!3d54.352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7333e2e96e01%3A0x5f13b8f9cb08d5d6!2sGda%C5%84sk!5e0!3m2!1spl!2spl!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
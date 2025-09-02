import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Kontakt
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Skontaktuj się z nami, aby umówić bezpłatną konsultację i wycenę montażu kominka.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mt-4">
            Jesteśmy do Twojej dyspozycji od poniedziałku do piątku.
          </p>
        </header>
        
        <Card className="shadow-elegant border-stone-gray-light bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-warm-brown text-lg mb-2">Telefon</p>
                  <a 
                    href="tel:+48500200949" 
                    className="text-foreground/80 text-lg hover:text-warm-brown transition-colors"
                  >
                    +48 500-200-949
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-warm-brown text-lg mb-2">E-mail</p>
                  <a 
                    href="mailto:biuro@pankominek.eu" 
                    className="text-foreground/80 text-lg hover:text-warm-brown transition-colors"
                  >
                    biuro@pankominek.eu
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-warm-brown text-lg mb-2">Adres</p>
                  <p className="text-foreground/80 text-lg">
                    ul. Przykładowa 1<br />
                    80-000 Gdańsk
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-stone-gray-light text-center">
              <p className="text-foreground/60">
                Godziny pracy: Pon-Pt: 8:00-17:00, Sob: 9:00-14:00
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
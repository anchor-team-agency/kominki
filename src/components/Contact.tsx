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
            Zapraszamy do kontaktu przez e-mail lub telefon. Na konsultacji omawiamy warianty techniczne, 
            możliwości aranżacyjne oraz przygotowujemy ofertę i orientacyjną wycenę.
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
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
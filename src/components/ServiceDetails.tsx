import { Card, CardContent } from "@/components/ui/card";
import installationImage from "@/assets/installation-process.jpg";

const ServiceDetails = () => {
  return (
    <section id="services" className="py-20 bg-stone-gray-light/20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Kominki z montażem Gdańsk
          </h2>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
            Wykonujemy instalacje kominkowe na terenie Gdańska od planowania po odbiór techniczny. Zapewniamy pomoc przy wyborze wkładu, projekt zabudowy dopasowany do stylu wnętrza oraz rzetelny montaż przeprowadzony przez przeszkolony zespół.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
            Montaż kominka to nie tylko montaż urządzenia - to również dobór odpowiednich materiałów, analiza systemu wentylacji i dopasowanie rozwiązań do wymagań budowlanych. Do każdego zlecenia podchodzimy osobno, uwzględniając układ pomieszczeń, oczekiwaną moc grzewczą i preferencje estetyczne.
            </p>
            
            <Card className="bg-gradient-warm border-0 shadow-warm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fire-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Profesjonalny montaż</h3>
                    <p className="text-white/80">Gwarancja jakości i bezpieczeństwa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src={installationImage} 
              alt="Profesjonalny montaż kominków w Gdańsku"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
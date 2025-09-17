import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Palette, 
  Hammer, 
  Truck, 
  Wrench, 
  PlayCircle, 
  ShieldCheck 
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Projekt kominka",
    description: "Przygotowujemy projekt dostosowany do Twoich potrzeb i możliwości technicznych budynku."
  },
  {
    icon: Hammer,
    title: "Konstrukcja izolacyjna",
    description: "Montujemy bezpieczne i trwałe warstwy izolacyjne z materiałów niepalnych, chroniące budynek przed przegrzaniem."
  },
  {
    icon: Truck,
    title: "Dostawa",
    description: "Dostarczamy wkład kominkowy oraz wszystkie niezbędne komponenty instalacyjne, w tym systemy odprowadzania spalin."
  },
  {
    icon: Wrench,
    title: "Montaż",
    description: "Wykonujemy pełny montaż mechaniczny i estetyczny, dbając o precyzję oraz wysoką jakość zabudowy."
  },
  {
    icon: PlayCircle,
    title: "Uruchomienie",
    description: "Przeprowadzamy testy pracy, sprawdzamy ciąg kominowy i szczelność, a następnie przekazujemy protokół odbioru."
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja",
    description: "Każda realizacja objęta jest gwarancją – zapewniamy bezpieczeństwo, serwis i długotrwałe użytkowanie."
  }
];

const ComprehensiveOffer = () => {
  return (
    <section id="offer" className="py-20 bg-stone-gray-light/20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Nasza oferta
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-foreground/80 leading-relaxed">
              W Gdańsku realizujemy pełen zakres prac kominkowych – od projektu, przez dostawę i montaż, aż po uruchomienie i gwarancję. 
              Każdy etap prowadzimy według sprawdzonych procedur, dbając o bezpieczeństwo i estetykę wykonania.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nasi instalatorzy posiadają odpowiednie uprawnienia i doświadczenie w pracy z różnymi typami urządzeń: wkładami powietrznymi, 
              z płaszczem wodnym, systemami gazowymi oraz piecami wolnostojącymi.
            </p>
          </div>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-stone-gray-light"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-warm-brown">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveOffer;
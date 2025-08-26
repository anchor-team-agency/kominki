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
    title: "Projekt 3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: Hammer,
    title: "Konstrukcja",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: Truck,
    title: "Dostawa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: Wrench,
    title: "Montaż",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: PlayCircle,
    title: "Uruchomienie",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
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
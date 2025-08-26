import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  HeartHandshake 
} from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Długoletnie doświadczenie",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: Users,
    title: "Wykwalifikowany zespół",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: ShieldCheck,
    title: "Jasne warunki gwarancyjne",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: Truck,
    title: "Własna logistyka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: CreditCard,
    title: "Elastyczne finansowanie",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: HeartHandshake,
    title: "Pełne wsparcie posprzedażowe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Dlaczego warto z nami współpracować?
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={index}
                className="group text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-stone-gray-light/30 border-stone-gray-light"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-fire transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-warm-brown group-hover:text-fire-orange transition-colors duration-300">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    {advantage.description}
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

export default WhyUs;
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
    title: "Ponad 45 lat obecności na rynku",
    description: "Realizujemy projekty o różnym stopniu skomplikowania, od prostych montażów po zaawansowane systemy zintegrowane z instalacją centralnego ogrzewania."
  },
  {
    icon: Users,
    title: "Instalatorzy z uprawnieniami",
    description: "Nasi monterzy pracują bez pośredników, co zapewnia spójność jakości i odpowiedzialność za realizacje."
  },
  {
    icon: ShieldCheck,
    title: "Aż 13 lat gwarancji na wykonane usługi",
    description: "Oferujemy wsparcie posprzedażowe i konkretne warunki gwarancji obejmujące zarówno montaż, jak i użyte materiały."
  },
  {
    icon: Truck,
    title: "Własna baza transportowa",
    description: "Dysponujemy środkami transportu przystosowanymi do przewozu urządzeń i elementów zabudowy, co przyspiesza realizacje."
  },
  {
    icon: CreditCard,
    title: "Elastyczne formy finansowania",
    description: "Proponujemy różne opcje płatności, które ułatwiają sfinansowanie inwestycji bez zbędnych formalności."
  },
  {
    icon: HeartHandshake,
    title: "Pełne wsparcie posprzedażowe",
    description: "Oferujemy instruktaż, porady eksploatacyjne oraz serwis gwarancyjny i pogwarancyjny."
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
            Specjalizujemy się w tworzeniu rozwiązań dopasowanych do indywidualnych potrzeb – łączymy praktyczne doświadczenie z aktualną wiedzą techniczną. 
            Stawiamy na przejrzystość warunków, terminowość i rzetelne wykonawstwo.
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
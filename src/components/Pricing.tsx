import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const pricingFactors = [
  "Typ kominka i wkładu",
  "Kompleksowość instalacji",
  "Rodzaj przewodu kominowego", 
  "Dostępność miejsca montażu",
  "Dodatkowe elementy wyposażenia"
];

const standardOffer = [
  "Wizyta i pomiar",
  "Projekt techniczny",
  "Dostawa materiałów",
  "Profesjonalny montaż",
  "Uruchomienie i instruktaż",
  "Gwarancja na usługi"
];

const Pricing = () => {
  return (
    <section className="py-20 bg-stone-gray-light/20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Cena montażu kominka
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-elegant border-stone-gray-light">
            <CardHeader>
              <CardTitle className="text-2xl text-warm-brown">
                Czynniki wpływające na cenę
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {pricingFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-fire-orange mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{factor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant border-stone-gray-light">
            <CardHeader>
              <CardTitle className="text-2xl text-warm-brown">
                Oferta standardowa obejmuje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {standardOffer.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-fire-orange mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
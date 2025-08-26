import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Flame } from "lucide-react";

const features = [
  "Nowoczesny design",
  "Wysoka sprawność energetyczna", 
  "Zamknięta komora spalania",
  "Płaszcz wodny",
  "Sterowanie elektroniczne",
  "Gwarancja 5 lat"
];

const ProductExample = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Przykładowa konfiguracja
          </h2>
        </header>
        
        <Card className="shadow-elegant border-stone-gray-light overflow-hidden">
          <div className="bg-gradient-warm p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Flame className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Heating Pro 10</h3>
            <div className="text-5xl font-bold text-white mb-4">9 499 zł</div>
            <p className="text-white/80">*cena za kompletny montaż</p>
          </div>
          
          <CardContent className="p-8">
            <div className="mb-8">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-warm-brown mb-4">Cechy produktu:</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-fire-orange mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-stone-gray-light/20 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-warm-brown mb-4">Dane techniczne:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Moc:</span>
                    <span className="font-medium">10 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Sprawność:</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Wymiary:</span>
                    <span className="font-medium">60x45x50 cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Waga:</span>
                    <span className="font-medium">120 kg</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="fireAccent" size="lg">
                Zapytaj o szczegóły
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductExample;
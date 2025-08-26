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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
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
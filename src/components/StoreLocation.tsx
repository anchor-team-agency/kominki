import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import showroomImage from "@/assets/showroom.jpg";

const StoreLocation = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Sklep z kominkami Gdańsk
          </h2>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-elegant border-stone-gray-light">
            <CardHeader>
              <CardTitle className="text-2xl text-warm-brown flex items-center gap-3">
                <MapPin className="w-6 h-6 text-fire-orange" />
                Nasze miejsce
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-fire-orange" />
                  <span className="font-medium">ul. Przykładowa 1, 80-000 Gdańsk</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-fire-orange" />
                  <span>+48 500-200-949</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-fire-orange" />
                  <span>biuro@pankominek.eu</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-stone-gray-light">
                <p className="text-foreground/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={showroomImage} 
                alt="Salon z kominkami w Gdańsku" 
                className="rounded-lg shadow-elegant w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 to-transparent rounded-lg"></div>
            </div>
            
            {/* Placeholder for map - in real implementation you'd use a proper map component */}
            <Card className="h-40 bg-stone-gray-light/30 border-2 border-dashed border-stone-gray-light">
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center text-stone-gray">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">Mapa lokalizacji</p>
                  <p className="text-sm">Integracja z Google Maps</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
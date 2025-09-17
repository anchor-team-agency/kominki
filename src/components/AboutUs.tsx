import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-gray-light/20 to-warm-brown/5">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-8">
            Poznaj nas
          </h2>
        </header>
        
        <Card className="bg-white/80 backdrop-blur-sm shadow-elegant border-stone-gray-light">
          <CardContent className="p-12">
            <div className="text-center space-y-6">
              <p className="text-xl text-foreground/80 leading-relaxed">
              Jesteśmy firmą skoncentrowaną na jakości wykonania i dobrym kontakcie z klientem. Nasi doradcy pomagają zaplanować inwestycję na każdym etapie - od koncepcji po serwis. 
              </p>
              
              <p className="text-xl text-foreground/80 leading-relaxed">
              Stawiamy na przejrzystą komunikację i rozwiązania, które służą przez lata.
              </p>
              
              <div className="flex justify-center pt-6">
                <div className="w-24 h-1 bg-gradient-fire rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;
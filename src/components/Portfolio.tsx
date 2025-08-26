import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioImage from "@/assets/portfolio-gallery.jpg";

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Realizacje
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Main featured image */}
          <Card className="md:col-span-2 lg:row-span-2 group overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={portfolioImage} 
                  alt="Galeria realizacji kominków w Gdańsku"
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">Nowoczesny kominek</h3>
                  <p className="text-sm">Gdańsk - dom prywatny</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Placeholder cards for more images */}
          {[1, 2, 3, 4].map((index) => (
            <Card key={index} className="group overflow-hidden shadow-warm">
              <CardContent className="p-0">
                <div className="relative bg-stone-gray-light/30 h-40 flex items-center justify-center group-hover:bg-stone-gray-light/50 transition-colors duration-300">
                  <div className="text-center text-stone-gray">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-fire rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index}</span>
                    </div>
                    <p className="text-sm font-medium">Realizacja {index}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="warm" size="lg">
            Zobacz wszystkie realizacje
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
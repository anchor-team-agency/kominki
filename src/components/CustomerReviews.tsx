import { Card, CardContent } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marta Zielińska",
    rating: 5,
    text: "Profesjonalna obsługa od początku do końca. Projekt został świetnie dopasowany do naszego wnętrza, a efekt końcowy przeszedł nasze oczekiwania."
  },
  {
    name: "Tomasz Lewandowski", 
    rating: 5,
    text: "Kominek został zamontowany szybko i bardzo solidnie. Fachowcy zadbali o każdy detal, a całość prezentuje się elegancko i nowocześnie."
  },
  {
    name: "Katarzyna Wiatr",
    rating: 5, 
    text: "Świetny kontakt z firmą i pełne wsparcie na każdym etapie inwestycji. Zdecydowanie polecam wszystkim, którzy szukają sprawdzonego wykonawcy."
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-stone-gray-light/20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Opinie klientów o naszych kominkach
          </h2>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-warm hover:shadow-elegant transition-shadow duration-300 border-stone-gray-light">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-fire-orange mr-3" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-fire-orange text-fire-orange" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown">{review.name}</p>
                    <p className="text-sm text-foreground/60">Klient</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-foreground/80 leading-relaxed">
            Dbamy o satysfakcję inwestorów – wiele realizacji skutkuje poleceniami i pozytywnymi ocenami. 
            Opinie klientów dostępne są na <a href="https://pankominek.eu/opinie/" target="_blank" rel="noopener noreferrer" className="text-fire-orange hover:underline">podstronie z referencjami</a>, 
            gdzie znajdziesz zdjęcia oraz komentarze dotyczące współpracy i jakości wykonania.
          </p>
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white"
          >
            <a href="https://pankominek.eu/opinie/" target="_blank" rel="noopener noreferrer">
              Zobacz więcej opinii
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
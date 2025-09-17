import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

const Summary = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-gradient-warm border-0 shadow-fire">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Flame className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Zapamiętaj!
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-white/90 leading-relaxed">
                Każdy kominek to inwestycja na lata - dlatego dbamy o najwyższą jakość wykonania i bezpieczeństwo użytkowania.
              </p>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Stawiamy na przejrzystość i terminowość - od pierwszej konsultacji aż po odbiór techniczny możesz liczyć na pełne wsparcie naszego zespołu.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Summary;
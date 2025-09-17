import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

const ProductExample = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Przykładowa konfiguracja – Heating Pro 10
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
            <div className="text-5xl font-bold text-white mb-4">8 979 zł</div>
            <p className="text-white/80">*cena orientacyjna</p>
          </div>

          <CardContent className="p-8">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Przykładowy model <strong>Heating Pro 10</strong> oferujemy jako kompaktowe
              rozwiązanie narożne – cena orientacyjna 8 979 zł.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Urządzenie charakteryzuje się:
              <br />– dużym przeszkleniem narożnym dla lepszej ekspozycji płomienia,
              <br />– dobrą sprawnością energetyczną i zgodnością z aktualnymi normami,
              <br />– solidną konstrukcją przystosowaną do intensywnego użytkowania.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Model sprawdza się w otwartych przestrzeniach dziennych, gdzie kominek pełni
              funkcję zarówno grzewczą, jak i dekoracyjną.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductExample;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const pricingFactors = [
  "Rodzaj zastosowanego wkładu – powietrzny, wodny, gazowy",
  "Zakres prac montażowych – standardowy montaż lub zabudowa wieloelementowa",
  "Typ użytych materiałów – płyty Skamol, kamień naturalny, ceramika",
  "Rozwiązania dodatkowe – rozprowadzenie powietrza, automatyka, sterowniki",
  "VAT budowlany – 8% w przypadku prac objętych umową z wykonawcą",
];

const standardOffer = [
  "Urządzenie grzewcze",
  "Konstrukcję spawaną",
  "Płytę izolacyjną Skamol",
  "Zestaw rur przyłączeniowych",
  "Kratki wentylacyjne",
  "Montaż i uruchomienie",
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
            Koszt zależy od wielu czynników – rodzaju wkładu, skali zabudowy, 
            użytych materiałów oraz zakresu prac dodatkowych. Dokładną wycenę 
            przygotowujemy po wizji lokalnej i omówieniu oczekiwań klienta.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mt-4">
            Informacje o orientacyjnych cenach i aktualnych promocjach dostępne są 
            na stronie z ofertą produktową. Cena instalacji kominka zależy od 
            następujących czynników:
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

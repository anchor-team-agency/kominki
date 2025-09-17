import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Ile trwa montaż kominka?",
    answer: "Czas montażu zależy od stopnia skomplikowania prac. Prosty montaż zwykle zajmuje 1-2 dni robocze; rozbudowane zabudowy lub integracje z instalacją grzewczą mogą wymagać kilku dni roboczych. Szczegółowy termin i harmonogram ustalamy przed rozpoczęciem prac."
  },
  {
    question: "Czy pomagacie w doborze odpowiedniego modelu kominka?",
    answer: "Tak – doradzamy wybór na podstawie wielkości pomieszczenia, zapotrzebowania na moc, preferencji estetycznych oraz budżetu. Przedstawiamy kilka wariantów, które najlepiej odpowiadają oczekiwaniom klienta."
  },
  {
    question: "Co wchodzi w zakres prac przy montażu kominka?",
    answer: "Zakres prac obejmuje:\n- wizję lokalną i doradztwo techniczne;\n- dobór wkładu i akcesoriów;\n- projekt zabudowy z wizualizacją;\n- montaż zgodny z projektem i przepisami;\n- uruchomienie oraz protokół odbioru.\n\nWszystkie działania wykonujemy z uwzględnieniem zasad bezpieczeństwa i obowiązujących norm.\n\nZapamiętaj!\nMontaż kominka prowadzimy według sprawdzonych procedur dopasowanych do charakteru budynku i wymagań inwestora. Oferujemy także rozwiązania na zamówienie, dzięki czemu finalna zabudowa jest dokładnie taka, jak zaplanowałeś."
  },
  {
    question: "Jaki jest średni czas realizacji montażu kominka?",
    answer: "Średni czas realizacji projektu – od podpisania umowy do zakończenia prac montażowych – to typowo około 3-6 tygodni, zależnie od dostępności materiałów i zakresu prac. Sama instalacja zwykle trwa 1-2 dni robocze; bardziej skomplikowane prace mogą zająć do 5 dni."
  },
  {
    question: "Co zawiera się w cenie?",
    answer: "W cenie standardowej instalacji zazwyczaj zawarte są:\n- izolacja z płyt termoizolacyjnych;\n- kratki wentylacyjne;\n- szczelne przyłącze kominowe;\n- konstrukcja wsporcza;\n- uruchomienie i test działania.\n\nDodatkowe wykończenia i materiały niestandardowe wyceniane są indywidualnie."
  },
  {
    question: "Jak przebiegają prace?",
    answer: "Proces realizacji dzieli się na etapy:\n- Konsultacja i wybór modelu – analizujemy potrzeby i proponujemy rozwiązania.\n- Projekt kominka – przygotowujemy wizualizację i dokumentację techniczną.\n- Zawarcie umowy – potwierdzamy zakres, terminy i koszty.\n- Przygotowanie i montaż – wykonujemy prace zgodnie z projektem i przepisami.\n- Próba działania i odbiór – uruchamiamy system i przekazujemy protokół odbioru.\n\nW czasie montażu szczególną uwagę przykładamy do:\n- stanu i drożności przewodu kominowego;\n- wentylacji pomieszczenia i zapewnienia dopływu powietrza;\n- zgodności materiałów z wymaganiami bezpieczeństwa;\n- prawidłowego uszczelnienia połączeń i montażu kratek wentylacyjnych."
  },
  {
    question: "Czy instalacja kominka jest bezpieczna?",
    answer: "Bezpieczeństwo jest priorytetem – wszystkie stosowane komponenty spełniają wymogi europejskie, a instalacje przechodzą wewnętrzne kontrole jakości. Nasi montażyści regularnie aktualizują wiedzę techniczną, dzięki czemu zapewniamy profesjonalne i zgodne z normami wykonanie każdego zlecenia."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-stone-gray-light/20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            FAQ
          </h2>
        </header>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-stone-gray-light rounded-lg shadow-warm px-6"
            >
              <AccordionTrigger className="text-left text-warm-brown font-semibold hover:text-fire-orange transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
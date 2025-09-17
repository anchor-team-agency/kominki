import { Card, CardContent } from "@/components/ui/card";
import kominek1 from "@/assets/kominek1.png";
import kominek2 from "@/assets/kominek2.jpg";
import kominek3 from "@/assets/kominek3.jpg";

const Portfolio = () => {
  const realizacje = [kominek1, kominek2, kominek3];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Realizacje
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Każda realizacja to efekt współpracy z inwestorem i starannego
            nadzoru wykonawczego. Realizujemy montaże zarówno lokalnie w
            Gdańsku, jak i w innych regionach kraju. Przykłady naszych prac
            obejmują aranżacje w domach jednorodzinnych, mieszkaniach oraz
            projektach wymagających integracji z instalacją grzewczą.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizacje.map((src, index) => (
            <Card key={index} className="overflow-hidden shadow-warm">
              <CardContent className="p-0">
                <img
                  src={src}
                  alt={`Realizacja ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
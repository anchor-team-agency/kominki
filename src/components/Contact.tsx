import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Kontakt
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-elegant border-stone-gray-light">
            <CardHeader>
              <CardTitle className="text-2xl text-warm-brown">
                Skontaktuj się z nami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-fire rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown">Telefon</p>
                    <p className="text-foreground/80">+48 500-200-949</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-fire rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown">E-mail</p>
                    <p className="text-foreground/80">biuro@pankominek.eu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-fire rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown">Adres</p>
                    <p className="text-foreground/80">ul. Przykładowa 1<br />80-000 Gdańsk</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant border-stone-gray-light">
            <CardHeader>
              <CardTitle className="text-2xl text-warm-brown">
                Napisz do nas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Imię i nazwisko" className="border-stone-gray-light" />
                  <Input placeholder="Telefon" className="border-stone-gray-light" />
                </div>
                <Input placeholder="E-mail" type="email" className="border-stone-gray-light" />
                <Textarea 
                  placeholder="Wiadomość" 
                  rows={5} 
                  className="border-stone-gray-light"
                />
                <Button variant="fireAccent" size="lg" className="w-full">
                  Wyślij wiadomość
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
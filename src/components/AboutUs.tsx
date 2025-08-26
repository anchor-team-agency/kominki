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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-xl text-foreground/80 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
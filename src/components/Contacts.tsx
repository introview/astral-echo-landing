import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  return (
    <section id="contact" className="py-16 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-parisienne text-4xl font-bold text-vintage-earth mb-4">
            Contatti
          </h2>
          <p className="text-vintage-earth/80 text-lg max-w-2xl mx-auto">
            Hai domande sui nostri corsi di astrologia? Contattaci attraverso uno di questi canali.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button
            variant="vintage"
            size="lg"
            className="flex items-center gap-3 px-8 py-4 text-lg"
            asChild
          >
            <a href="mailto:mattiaperez@gmail.com">
              <Mail size={24} />
              Scrivimi un'email
            </a>
          </Button>
          
          <Button
            variant="vintage"
            size="lg"
            className="flex items-center gap-3 px-8 py-4 text-lg"
            asChild
          >
            <a href="https://wa.me/393338450717">
              <MessageCircle size={24} />
              Scrivimi su WhatsApp
            </a>
          </Button>
          
          <Button
            variant="vintage"
            size="lg"
            className="flex items-center gap-3 px-8 py-4 text-lg"
            asChild
          >
            <a href="tel:0769311287">
              <Phone size={24} />
              Telefonami
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
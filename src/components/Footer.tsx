import { Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vintage-night text-vintage-cream py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-vintage-gold" size={24} />
              <span className="font-serif text-xl font-bold">école-académie d’astrologie à Lyon</span>
            </div>
            <p className="text-vintage-cream/80 leading-relaxed">
              Scopri il tuo potenziale attraverso l'antica saggezza delle stelle. 
              Un viaggio di crescita personale e consapevolezza.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-vintage-gold" />
                <span className="text-vintage-cream/80">mattiaperez@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-vintage-gold" />
                <span className="text-vintage-cream/80">Whatsapp: +393338450717</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-vintage-gold" />
                <span className="text-vintage-cream/80">tel.0769311287</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">horaires</h3>
            <div className="space-y-2 text-vintage-cream/80">
              <div>chaque jeudi de 20h a 21h</div>
              <div>déroulement du cours: en ligne via zoom où en présentiel</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vintage-gold/20 pt-8 text-center">
          <p className="text-vintage-cream/60">
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
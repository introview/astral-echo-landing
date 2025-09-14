import { Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vintage-night text-vintage-cream py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-vintage-gold" size={24} />
              <span className="font-serif text-xl font-bold">Astrologia Celeste</span>
            </div>
            <p className="text-vintage-cream/80 leading-relaxed">
              Scopri il tuo potenziale attraverso l'antica saggezza delle stelle. 
              Un viaggio di crescita personale e consapevolezza.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-vintage-gold" />
                <span className="text-vintage-cream/80">sofia@astrologiaceleste.it</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-vintage-gold" />
                <span className="text-vintage-cream/80">+39 333 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-vintage-gold" />
                <span className="text-vintage-cream/80">Roma, Italia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Orari di Lezione</h3>
            <div className="space-y-2 text-vintage-cream/80">
              <div>Martedì: 19:00 - 21:00</div>
              <div>Modalità: Online via Zoom</div>
              <div>Supporto: Lun-Ven 9:00-18:00</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vintage-gold/20 pt-8 text-center">
          <p className="text-vintage-cream/60">
            © 2024 Astrologia Celeste. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
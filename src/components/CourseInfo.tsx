import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Euro, Users, CheckCircle } from "lucide-react";

const CourseInfo = () => {
  const details = [
    {
      icon: Calendar,
      label: "Inizio Corso",
      value: "15 Ottobre 2024",
      subtitle: "Ogni martedì sera"
    },
    {
      icon: Clock,
      label: "Durata",
      value: "12 Settimane",
      subtitle: "2 ore per lezione"
    },
    {
      icon: Users,
      label: "Posti Disponibili",
      value: "Solo 15",
      subtitle: "Classe ridotta"
    },
    {
      icon: Euro,
      label: "Investimento",
      value: "€ 480",
      subtitle: "Materiale incluso"
    }
  ];

  const included = [
    "Manuale completo di 200+ pagine",
    "Accesso a software astrologico professionale",
    "12 lezioni live + registrazioni",
    "Gruppo Telegram privato per domande",
    "Certificato di partecipazione",
    "3 mesi di supporto post-corso"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-earth mb-6">
            Informazioni del
            <span className="block text-vintage-gold">Corso</span>
          </h2>
          <p className="text-lg text-vintage-earth/80 max-w-2xl mx-auto">
            Tutto quello che devi sapere per iniziare il tuo percorso astrologico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.map((detail, index) => (
            <Card key={index} className="p-6 text-center bg-card hover:shadow-lg transition-all duration-300 border-vintage-soft">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-vintage-gold/10 rounded-full mb-4">
                <detail.icon size={28} className="text-vintage-gold" />
              </div>
              <div className="text-sm text-vintage-earth/60 mb-1">{detail.label}</div>
              <div className="font-serif text-2xl font-bold text-vintage-earth mb-1">{detail.value}</div>
              <div className="text-sm text-vintage-earth/70">{detail.subtitle}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-vintage-soft border-vintage-gold/20">
            <h3 className="font-serif text-2xl font-bold text-vintage-earth mb-6 flex items-center gap-3">
              <CheckCircle className="text-vintage-gold" size={28} />
              Cosa è Incluso
            </h3>
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-vintage-gold mt-0.5 flex-shrink-0" />
                  <p className="text-vintage-earth">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-accent border-vintage-gold/30">
            <h3 className="font-serif text-2xl font-bold text-vintage-earth mb-6">
              Modalità di Pagamento
            </h3>
            <div className="space-y-6">
              <div className="border border-vintage-earth/20 rounded-lg p-4 bg-white/50">
                <div className="font-semibold text-vintage-earth mb-2">Pagamento Unico</div>
                <div className="text-2xl font-bold text-vintage-gold mb-1">€ 480</div>
                <div className="text-sm text-vintage-earth/70">Sconto del 10% incluso</div>
              </div>
              
              <div className="border border-vintage-earth/20 rounded-lg p-4 bg-white/50">
                <div className="font-semibold text-vintage-earth mb-2">Pagamento Rateale</div>
                <div className="text-2xl font-bold text-vintage-gold mb-1">3 x € 180</div>
                <div className="text-sm text-vintage-earth/70">Rate mensili senza interessi</div>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="w-full mt-6 text-lg">
              Prenota il Tuo Posto
            </Button>
            
            <p className="text-center text-sm text-vintage-earth/60 mt-4">
              Garanzia soddisfatti o rimborsati entro 7 giorni
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
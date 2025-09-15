import { Card } from "@/components/ui/card";
import { Star, Award, BookOpen, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Star,
      number: "20+",
      label: "Ans d’expérience"
    },
    {
      icon: Language,
      number: "3",
      label: "français, italien, anglais"
    },
    
  ];

  return (
    <section className="py-20 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-earth mb-6">
              Chi Sono
            </h2>
            <div className="space-y-6 text-vintage-earth/80 leading-relaxed">
              <p className="text-lg">
                Sono <strong className="text-vintage-earth">Sofia Celeste</strong>, astrologa professionista 
                con oltre 15 anni di esperienza nell'arte dell'interpretazione celeste. 
                La mia passione per l'astrologia è nata durante gli studi universitari in psicologia, 
                quando ho scoperto le profonde connessioni tra i cicli cosmici e la psiche umana.
              </p>
              
              <p>
                Ho approfondito i miei studi presso la <em>London School of Astrology</em> e ho conseguito 
                certificazioni internazionali che mi permettono di offrire consulenze e formazione 
                di altissimo livello. La mia approccio combina l'astrologia classica con insights 
                psicologici moderni.
              </p>
              
              <p>
                Negli anni ho formato oltre 500 studenti, molti dei quali sono diventati 
                astrologi professionisti. Credo fermamente che l'astrologia sia uno strumento 
                di crescita personale e comprensione profonda dell'essere umano.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-vintage-soft rounded-lg">
              <blockquote className="text-vintage-earth italic text-lg">
                "L'astrologia non predice il futuro, ma rivela il potenziale nascosto 
                dentro di noi e ci guida verso la nostra massima espressione."
              </blockquote>
              <cite className="text-vintage-gold font-medium mt-2 block">- Sofia Celeste</cite>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-card border-vintage-gold/20">
              <h3 className="font-serif text-2xl font-bold text-vintage-earth mb-6 text-center">
                I Miei Risultati
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-full mb-3">
                      <achievement.icon size={24} className="text-vintage-earth" />
                    </div>
                    <div className="font-serif text-2xl font-bold text-vintage-gold mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-vintage-earth/70">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-vintage-gold/5 border-vintage-gold/30">
              <h4 className="font-serif text-xl font-semibold text-vintage-earth mb-4">
                Certificazioni e Formazione
              </h4>
              <div className="space-y-3 text-vintage-earth/80">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Diploma in Astrologia Psicologica - London School of Astrology</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Certificazione in Astrologia Evolutiva - Steven Forrest</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Master in Astrologia Oraria - Horary Academy</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Laurea in Psicologia - Università La Sapienza</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
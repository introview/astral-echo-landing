import { Card } from "@/components/ui/card";
import { Star, Award, BookOpen, Heart } from "lucide-react";
const About = () => {
  const achievements = [{
    icon: Star,
    number: "15+",
    label: "Anni di Esperienza"
  }, {
    icon: BookOpen,
    number: "500+",
    label: "Studenti Formati"
  }, {
    icon: Award,
    number: "3",
    label: "Certificazioni Internazionali"
  }, {
    icon: Heart,
    number: "1000+",
    label: "Consulenze Realizzate"
  }];
  return <section className="py-20 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-earth mb-6">Votre enseignant</h2>
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

          
        </div>
      </div>
    </section>;
};
export default About;
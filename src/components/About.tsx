import { Card } from "@/components/ui/card";
import { Star, Award, BookOpen, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Star,
      number: "15+",
      label: "Anni di Esperienza"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Studenti Formati"
    },
    {
      icon: Award,
      number: "3",
      label: "Certificazioni Internazionali"
    },
    {
      icon: Heart,
      number: "1000+",
      label: "Consulenze Realizzate"
    }
  ];

  return (
    <section className="py-20 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-earth mb-6">
              Votre enseignant
            </h2>
            <div className="space-y-6 text-vintage-earth/80 leading-relaxed">
              <p className="text-lg">
                Moi je m'appelle  <strong className="text-vintage-earth">Mattia Perez</strong>, je me suis formé pendant 20 ans d’études et de pratique au sein de l’académie d'astrologie de Florence créée par Monsieur Cesare Bartalesi, ancien élève de Monsieur André Barbault.

              </p>
              
              <p>
                En parallèle, j'ai effectué mes études pour devenir biologiste moléculaire. Et en 2016 je suis arrivé en France pour effectuer un doctorat en neurosciences. 

              </p>
              
              <p>
                 Je suis passionné de tout ce qui remonte à l'antiquité, et qui a réussi à traverser le temps et l'espace jusqu'à nos jours. Je ne partage pas l'impression assez courante que les peuples anciens étaient inférieurs à nous, ou bien à notre société.

              </p>
               <p>
À travers ce cours, je souhaite transmettre l'essentiel de l'astrologie traditionnelle. Avant que Colbert ait interdit aux astronomes de pratiquer l'astrologie, cette noble discipline était enseignée en faculté, et dans toutes les plus importantes universités d’Europe.
Des notions historiques seront aussi abordées, mais l’ objectif pédagogique le plus important reste le suivant : Être capable de lire et interpréter un horoscope de naissance.

              </p>
            </div>
            
            <div className="mt-8 p-6 bg-vintage-soft rounded-lg">
              <blockquote className="text-vintage-earth italic text-lg">
               "L’astrologie est bien plus importante, aujourd’hui, que ne le croient les gens ordinaires; mais aussi beaucoup moins que ne le croient les astrologues"

              </blockquote>
              <cite className="text-vintage-gold font-medium mt-2 block">Monsieur Gurdjieff, 1927</cite>
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
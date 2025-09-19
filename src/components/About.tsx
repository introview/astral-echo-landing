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
  return <section id="about" className="py-20 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 items-center">
          <div>
            <h2 className="font-parisienne text-4xl md:text-5xl font-bold text-vintage-earth mb-6">Votre enseignant</h2>
            <div className="space-y-6 text-vintage-earth/80 leading-relaxed">
              <p>
                Moi je m'appelle <strong className="text-vintage-earth">Mattia Perez</strong>, je me suis formé pendant 20 ans d’études et de pratique au sein de l’académie d'astrologie de Florence créée par Monsieur Cesare Bartalesi, ancien élève à Paris de Monsieur André Barbault.

              </p>
              
              <p>
En parallèle, j'ai effectué mes études pour devenir biologiste moléculaire. En 2016, je m’installe en France pour effectuer un doctorat en neurosciences. 
 Je suis passionné par tout ce qui remonte à l'antiquité, et qui a réussi à traverser le temps et l'espace jusqu'à nos jours. Je ne partage pas l'impression assez courante selon laquelle les peuples anciens étaient inférieurs à nous, ou bien à notre société.
L'âme poétique d'une époque lointaine, très reculée, rencontre dans l'astrologie l'esprit scientifique de l'homme contemporain. La sagesse de l'Orient se confronte au progrès technique occidental. Et cet équilibre, très harmonieux, a toujours été la condition préalable à toute nouvelle création.


              </p>
              
              <p>
À travers ce cours, je souhaite transmettre l'essentiel de l'astrologie traditionnelle.
Des notions historiques seront aussi abordées, mais l’ objectif pédagogique le plus important reste le suivant : 
être capable de lire et d'interpréter un horoscope de naissance.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-vintage-soft rounded-lg">
              <blockquote className="text-vintage-earth italic text-lg">
"L’astrologie est bien plus importante, aujourd’hui, que ne le croient les gens ordinaires ; mais aussi beaucoup moins que ne le croient les astrologues"
              </blockquote>
              <cite className="text-vintage-gold font-medium mt-2 block">Monsieur Gurdjieff, 1927</cite>
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;
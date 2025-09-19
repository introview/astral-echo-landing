import { Card } from "@/components/ui/card";
import { Moon, Sun, Stars, Compass } from "lucide-react";

const CourseDescription = () => {
  const features = [
    {
      icon: Moon,
      title: "Astronomie",
      description: "des notions de base seront abordées : l’astrologie est fondée sur l’astronomie réelle"
    },
    {
      icon: Sun,
      title: "Thème natal",
      description: "ou “Carte du ciel” ; comment dresser, lire et à interpréter des horoscopes de naissance personnalisés"
    },
    {
      icon: Stars,
      title: "Planètes, Signes du zodiaque et Maisons astrologiques",
      description: "quelle est leur origine et leur signification ? comment s’en servir ?"
    },
    
  ];

  return (
    <section id="course" className="py-20 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-parisienne text-4xl md:text-5xl font-bold text-vintage-earth mb-6">
 L’astrologie traditionnelle

          </h2>
          <p className="text-lg text-vintage-earth/80 max-w-3xl mx-auto leading-relaxed">
 Est l'ensemble des connaissances qui ont été transmises par les anciens maîtres, à partir de la civilisation mésopotamienne au Ve millénaire avant notre ère, notamment par transmission orale.

          </p>
          <p> Sujets principaux :</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
                <feature.icon size={32} className="text-vintage-earth" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-vintage-earth mb-3">
                {feature.title}
              </h3>
              <p className="text-vintage-earth/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-vintage-soft rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-parisienne text-3xl font-bold text-vintage-earth mb-6">
              Ce que vous apprendrez
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Connaître une astrologie intégralement fondée sur l'astronomie réelle ; le système solaire avec ses corps célestes, et les lois qui régissent son fonctionnement.
</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Qu’est-ce que l’astrologie ? Quelle est son utilité pratique ? 
</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Les principes fondamentaux de l’astrologie
</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Savoir dresser son propre thème natal
</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">La signification des planètes dans les signes et les douze maisons
</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Méthodes et techniques d’interprétation
</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">La prévision des événements : les transits

</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Notions sur l’histoire et la philosophie de la science astrologique




</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;
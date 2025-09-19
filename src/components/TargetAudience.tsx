import { Card } from "@/components/ui/card";
import { Users, BookOpen } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: BookOpen,
      title: "Néophytes",
      description: "aux néophytes qui souhaitent apprendre une astrologie de qualité, aussi bien que toute personne curieuse d'en connaître davantage."
    },
    {
      icon: Users,
      title: "Initiés et confirmés",
      description: "aux initiés et confirmés qui souhaitent se perfectionner; dans ce cas l'objectif est de remettre en cause sa propre approche, et corriger des erreurs méthodologiques qui peuvent parfois conduire à des conclusions trompeuses."
    }
  ];

  return (
    <section id="target-audience" className="py-20 bg-vintage-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-parisienne text-4xl md:text-5xl font-bold text-vintage-earth mb-6">
            À qui s'adresse cette école?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all duration-300 border-vintage-gold/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-vintage-gold/10 rounded-full mb-6">
                <audience.icon size={32} className="text-vintage-gold" />
              </div>
              <h3 className="font-parisienne text-2xl font-bold text-vintage-earth mb-4">
                {audience.title}
              </h3>
              <p className="text-vintage-earth leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
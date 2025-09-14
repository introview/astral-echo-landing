import { Card } from "@/components/ui/card";
import { Moon, Sun, Stars, Compass } from "lucide-react";

const CourseDescription = () => {
  const features = [
    {
      icon: Moon,
      title: "Cicli Lunari",
      description: "Comprendi l'influenza delle fasi lunari sulla vita quotidiana"
    },
    {
      icon: Sun,
      title: "Carta Natale",
      description: "Impara a interpretare e creare carte astrali personalizzate"
    },
    {
      icon: Stars,
      title: "Segni e Pianeti",
      description: "Scopri il significato profondo di ogni segno zodiacale"
    },
    {
      icon: Compass,
      title: "Case Astrologiche",
      description: "Naviga attraverso le 12 case e i loro significati"
    }
  ];

  return (
    <section className="py-20 bg-vintage-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-earth mb-6">
            Un Viaggio attraverso
            <span className="block text-vintage-gold">l'Antica Saggezza</span>
          </h2>
          <p className="text-lg text-vintage-earth/80 max-w-3xl mx-auto leading-relaxed">
            Il nostro corso ti guiderà attraverso i fondamenti dell'astrologia classica, 
            combinando tradizione millenaria e comprensione moderna per offrirti 
            una formazione completa e professionale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            <h3 className="font-serif text-3xl font-bold text-vintage-earth mb-6">
              Cosa Imparerai
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Lettura e interpretazione delle carte natali</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Significato dei pianeti nelle case e nei segni</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Aspetti planetari e loro interpretazioni</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Transiti e previsioni astrologiche</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Storia e filosofia dell'astrologia</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Tecniche di consulenza astrologica</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Astrologia evolutiva e psicologica</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-vintage-earth">Casi pratici e esercitazioni</p>
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
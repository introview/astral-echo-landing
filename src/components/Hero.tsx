import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";
import vitruvianHero from "@/assets/vitruvian-hero.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url(${vitruvianHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-vintage-cream/60" />
      
      {/* Decorative Stars */}
      <div className="absolute top-20 left-10 text-vintage-gold opacity-60" aria-hidden="true">
        <Star size={24} />
      </div>
      <div className="absolute top-40 right-20 text-vintage-gold opacity-40" aria-hidden="true">
        <Sparkles size={20} />
      </div>
      <div className="absolute bottom-32 left-20 text-vintage-gold opacity-50" aria-hidden="true">
        <Star size={16} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-parisienne text-6xl md:text-7xl lg:text-8xl font-bold text-vintage-earth mb-8 leading-tight">
          École-Académie d'Astrologie
        </h1>
        
        <p className="text-xl md:text-2xl text-vintage-earth mb-12 max-w-2xl mx-auto leading-relaxed">
          L'astrologie des anciens maîtres
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => {
              const element = document.querySelector('#course');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Découvrir les cours d'astrologie"
          >
            Je découvre 
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-vintage-earth text-vintage-earth hover:bg-vintage-earth hover:text-vintage-cream"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Contacter l'enseignant d'astrologie"
          >
           Contacter l'enseignant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
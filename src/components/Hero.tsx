import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/astrology-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Decorative Stars */}
      <div className="absolute top-20 left-10 text-vintage-gold opacity-60">
        <Star size={24} />
      </div>
      <div className="absolute top-40 right-20 text-vintage-gold opacity-40">
        <Sparkles size={20} />
      </div>
      <div className="absolute bottom-32 left-20 text-vintage-gold opacity-50">
        <Star size={16} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-vintage-gold mb-4">
            <Star size={20} className="animate-pulse" />
            <span className="text-sm font-medium tracking-wider uppercase">Corso di Astrologia</span>
            <Star size={20} className="animate-pulse" />
          </div>
        </div>
        
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-vintage-earth mb-8 leading-tight">
          École-Académie d’Astrologie
          
        </h1>
        
        <p className="text-xl md:text-2xl text-vintage-earth/80 mb-12 max-w-2xl mx-auto leading-relaxed">
“l’astrologie des anciens maîtres”

        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Découvrir
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-vintage-earth text-vintage-earth hover:bg-vintage-earth hover:text-vintage-cream">
Contactez l’enseignant          </Button>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-8 text-vintage-earth/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-vintage-gold">12</div>
            <div className="text-sm">Settimane</div>
          </div>
          <div className="w-px h-8 bg-vintage-earth/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-vintage-gold">24</div>
            <div className="text-sm">Lezioni</div>
          </div>
          <div className="w-px h-8 bg-vintage-earth/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-vintage-gold">100+</div>
            <div className="text-sm">Studenti</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
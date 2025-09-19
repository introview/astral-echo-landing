import hubbleImage from "@/assets/hubble-space.png";

const QuoteSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hubbleImage})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 md:p-12">
          <blockquote className="text-white text-lg md:text-xl leading-relaxed italic">
            "Ptolémée, le grand astrologue de l'antiquité, affirmait que parmi les disciplines qui font des prévisions fondées sur les astres, "deux sont les plus grandes et principales…". L'astronomie, qui est la première en ordre et en certitude, et l'astrologie, qui est utile mais qui n'arrive pas au niveau de certitude de la première. C'est drôle…il a raté précisément celle-là, étant donné qu'il fait tourner le Soleil autour de la terre !"
          </blockquote>
          <cite className="text-vintage-gold font-medium text-lg mt-4 block not-italic">
            [Prof. Cesare Bartalesi]
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
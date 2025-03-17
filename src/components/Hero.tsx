
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;

    if (heading) heading.classList.add('animate-fade-up');
    
    setTimeout(() => {
      if (subheading) subheading.classList.add('animate-fade-up');
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-up');
    }, 600);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      
      {/* Hero background with subtle parallax effect */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'url("https://images.unsplash.com/photo-1569172822933-23880e20d9f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.07
        }}
      ></div>
      
      <div className="section-container relative flex flex-col items-center text-center z-10">
        <h1 
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold mb-6 opacity-0 max-w-5xl"
        >
          Transforming Spaces with <span className="text-primary">Exceptional</span> Spray Art
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl opacity-0"
        >
          Creating stunning murals and custom spray paint designs that elevate your environment and tell your unique story.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
          <a href="#portfolio" className="btn-primary flex items-center justify-center gap-2">
            View Our Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
        <div className="w-[2px] h-6 bg-primary/30 relative">
          <div className="absolute w-[2px] h-3 bg-primary top-0 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

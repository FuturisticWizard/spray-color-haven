
import { useEffect } from 'react';
import { observeElements } from '@/utils/animations';

const About = () => {
  useEffect(() => {
    observeElements();
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1630510230099-74a8700b3e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Artist at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
            <h2 className="section-title mb-6">About Us</h2>
            <p className="text-foreground/80 mb-4">
              Founded with a passion for transforming spaces through art, our team brings together years of experience in spray painting, murals, and visual storytelling. What began as a small creative studio has evolved into a premier art service trusted by businesses and homeowners alike.
            </p>
            <p className="text-foreground/80 mb-6">
              We believe that every wall has potential, and every space tells a story. Our mission is to harness that potential and help tell your story through vibrant, thoughtful, and expertly crafted spray art that inspires and transforms.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">10+</span>
                </div>
                <div>
                  <h4 className="font-bold">Years Experience</h4>
                  <p className="text-sm text-foreground/70">Creating stunning art</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">250+</span>
                </div>
                <div>
                  <h4 className="font-bold">Projects Completed</h4>
                  <p className="text-sm text-foreground/70">Across the country</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">15+</span>
                </div>
                <div>
                  <h4 className="font-bold">Team Members</h4>
                  <p className="text-sm text-foreground/70">Talented artists</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">100%</span>
                </div>
                <div>
                  <h4 className="font-bold">Client Satisfaction</h4>
                  <p className="text-sm text-foreground/70">Our top priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

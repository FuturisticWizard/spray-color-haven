
import { useEffect } from 'react';
import { observeElements } from '@/utils/animations';
import { PaintBucket, Building2, Home, Shapes, Paintbrush, Compass } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Commercial Murals",
    icon: <Building2 size={24} className="text-primary" />,
    description: "Transform your business space with custom designed murals that reflect your brand identity and values."
  },
  {
    id: 2,
    title: "Residential Art",
    icon: <Home size={24} className="text-primary" />,
    description: "Add personality to your home with custom art pieces that complement your interior design and personal style."
  },
  {
    id: 3,
    title: "Abstract Designs",
    icon: <Shapes size={24} className="text-primary" />,
    description: "Create visual impact with abstract spray art that adds depth, texture, and movement to any space."
  },
  {
    id: 4,
    title: "Street Art",
    icon: <PaintBucket size={24} className="text-primary" />,
    description: "Revitalize urban spaces with stunning street art that engages the community and tells a story."
  },
  {
    id: 5,
    title: "Custom Artwork",
    icon: <Paintbrush size={24} className="text-primary" />,
    description: "Commission personalized spray art pieces tailored to your specific vision, theme, and requirements."
  },
  {
    id: 6,
    title: "Art Consultation",
    icon: <Compass size={24} className="text-primary" />,
    description: "Get expert guidance on incorporating spray art and murals into your space for maximum aesthetic impact."
  }
];

const Services = () => {
  useEffect(() => {
    observeElements();
  }, []);

  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Offer</span>
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2">Our Services</h2>
          <p className="mt-6 text-lg text-foreground/70">
            We provide a comprehensive range of spray painting and mural services, 
            each customized to meet your specific needs and aesthetic preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to transform your space?</h3>
              <p className="text-foreground/70">Contact us today to discuss your project and get a free consultation.</p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

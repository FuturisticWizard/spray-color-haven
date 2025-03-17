
import { useEffect } from 'react';
import { observeElements } from '@/utils/animations';

const portfolioItems = [
  {
    id: 1,
    title: "Urban Landscape Mural",
    category: "Mural",
    image: "https://images.unsplash.com/photo-1590486115893-ac6cccd37ae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "A vibrant cityscape mural covering the entire side of a downtown building."
  },
  {
    id: 2,
    title: "Abstract Corporate Art",
    category: "Office Art",
    image: "https://images.unsplash.com/photo-1587128647038-ee1c187a13a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Modern abstract artwork designed to enhance a corporate office environment."
  },
  {
    id: 3,
    title: "Wildlife Conservation Project",
    category: "Public Art",
    image: "https://images.unsplash.com/photo-1563091680547-e4b1785ce388?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "A community-focused mural highlighting endangered species and conservation efforts."
  },
  {
    id: 4,
    title: "Restaurant Interior Design",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Custom spray art that enhances dining ambiance and expresses the restaurant's brand identity."
  },
  {
    id: 5,
    title: "Residential Accent Wall",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1620504155085-d7b152a58e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    description: "A custom accent wall design that transforms a living space with personality and color."
  },
  {
    id: 6,
    title: "School Playground Project",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Interactive art installation designed to inspire creativity and play among students."
  }
];

const Portfolio = () => {
  useEffect(() => {
    observeElements();
  }, []);

  return (
    <section id="portfolio" className="bg-secondary/30 py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2">Portfolio</h2>
          <p className="mt-6 text-lg text-foreground/70">
            Browse through our collection of stunning murals and spray art projects 
            that showcase our artistic vision and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-item animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-overlay">
                <span className="text-primary-foreground/80 text-sm font-medium tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-primary-foreground text-xl font-bold">{item.title}</h3>
                <p className="text-primary-foreground/90 mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ArtSpray</h3>
            <p className="text-background/70 mb-4">
              Transforming spaces with exceptional spray art and murals tailored to your vision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-background transition-colors">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/70 hover:text-background transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">Commercial Murals</a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">Residential Art</a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">Abstract Designs</a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">Street Art</a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">Custom Artwork</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-background/70">
              <p>123 Art Studio Lane</p>
              <p>Creative District, CA 90210</p>
              <p className="mt-2">(123) 456-7890</p>
              <p>info@artspray.com</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-background/70">
          <p>&copy; {currentYear} ArtSpray. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

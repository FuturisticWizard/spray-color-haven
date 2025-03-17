
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/90 shadow-md backdrop-blur-md' : 'py-5 bg-transparent'
      )}
    >
      <div className="section-container py-0">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">ArtSpray</span>
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Get a Quote
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-screen py-5' : 'max-h-0 py-0'
        )}
      >
        <div className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg py-2 border-b border-border/30"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center my-2">
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { observeElements } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Initialize animation observer when component mounts
    observeElements();
    
    // Re-initialize on window resize to catch any new elements
    window.addEventListener('resize', observeElements);
    
    return () => {
      window.removeEventListener('resize', observeElements);
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

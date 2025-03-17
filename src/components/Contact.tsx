
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { observeElements } from '@/utils/animations';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    observeElements();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2">Contact Us</h2>
          <p className="mt-6 text-lg text-foreground/70">
            Ready to bring your vision to life? Reach out to discuss your project 
            and schedule a consultation with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="bg-white shadow-xl rounded-xl p-8 border border-border/30">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-foreground/70">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Commercial Murals">Commercial Murals</option>
                        <option value="Residential Art">Residential Art</option>
                        <option value="Abstract Designs">Abstract Designs</option>
                        <option value="Street Art">Street Art</option>
                        <option value="Custom Artwork">Custom Artwork</option>
                        <option value="Art Consultation">Art Consultation</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>Processing...</>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-primary/5 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Location</h4>
                    <p className="text-foreground/70">
                      123 Art Studio Lane<br />
                      Creative District, CA 90210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-foreground/70">
                      (123) 456-7890<br />
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-foreground/70">
                      info@artspray.com<br />
                      support@artspray.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold text-lg mb-4">Working Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

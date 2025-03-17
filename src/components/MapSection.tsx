
import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { observeElements } from '@/utils/animations';
import { toast } from "@/components/ui/use-toast";

// Define the location interface
interface Location {
  id: number;
  title: string;
  address: string;
  coordinates: { lat: number; lng: number };
  description: string;
}

// Sample locations data
const sampleLocations: Location[] = [
  {
    id: 1,
    title: 'Main Studio',
    address: '123 Art Studio Lane, Creative District, CA 90210',
    coordinates: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    description: 'Our headquarters and main art studio.'
  },
  {
    id: 2,
    title: 'Downtown Gallery',
    address: '456 Urban Street, Downtown, CA 90012',
    coordinates: { lat: 34.0407, lng: -118.2468 }, // Downtown LA
    description: 'Our gallery showcasing the latest murals and art pieces.'
  },
  {
    id: 3,
    title: 'Beachside Workshop',
    address: '789 Ocean Drive, Venice, CA 90291',
    coordinates: { lat: 33.9850, lng: -118.4695 }, // Venice Beach
    description: 'Our seasonal workshop space near the beach.'
  }
];

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string>('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const [loading, setLoading] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Try to get API key from localStorage
    const savedApiKey = localStorage.getItem('google_maps_api_key');
    if (savedApiKey) {
      setGoogleMapsApiKey(savedApiKey);
      setShowApiKeyInput(false);
    }
    
    observeElements();
    
    // Define the callback function that will be called when the Google Maps script loads
    window.initMap = () => {
      if (!mapRef.current) return;
      
      try {
        // Create the map
        const mapOptions = {
          center: { lat: 34.0522, lng: -118.2437 }, // Center on LA
          zoom: 10,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9e9e9e' }]
            }
          ]
        };
        
        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        
        // Add markers for each location
        sampleLocations.forEach(location => {
          const marker = new window.google.maps.Marker({
            position: location.coordinates,
            map: map,
            title: location.title,
            animation: window.google.maps.Animation.DROP,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: 'hsl(var(--primary))',
              fillOpacity: 1,
              strokeWeight: 1,
              strokeColor: 'white',
            }
          });
          
          // Add click listener for marker
          marker.addListener('click', () => {
            setActiveLocation(location);
            map.panTo(location.coordinates);
            map.setZoom(13);
          });
        });
        
        setMapLoaded(true);
        setLoading(false);
      } catch (error) {
        console.error('Error initializing map:', error);
        toast({
          title: "Error loading map",
          description: "There was a problem loading the Google Maps API. Please check your API key.",
          variant: "destructive"
        });
        setLoading(false);
      }
    };

    return () => {
      // Clean up the global callback when component unmounts
      window.initMap = () => {
        console.log("Map initialization prevented during cleanup");
      };
    };
  }, []);

  useEffect(() => {
    if (!googleMapsApiKey || !mapRef.current || mapLoaded) return;
    
    setLoading(true);
    
    // Remove previous script if it exists
    if (scriptRef.current && document.head.contains(scriptRef.current)) {
      document.head.removeChild(scriptRef.current);
      scriptRef.current = null;
    }
    
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      console.error('Google Maps script failed to load');
      toast({
        title: "Error loading Google Maps",
        description: "Please check your API key and try again.",
        variant: "destructive"
      });
      setLoading(false);
      
      // Clean up the failed script
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
    
    // Store script reference
    scriptRef.current = script;
    
    // Add script to document
    document.head.appendChild(script);
    
    return () => {
      // This cleanup function runs when the component unmounts or when dependencies change
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [googleMapsApiKey, mapLoaded]);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!googleMapsApiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter a Google Maps API key.",
        variant: "destructive"
      });
      return;
    }
    
    localStorage.setItem('google_maps_api_key', googleMapsApiKey);
    setShowApiKeyInput(false);
    setMapLoaded(false); // Reset map loaded state to trigger reinitialization
  };

  return (
    <section id="locations" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Locations</span>
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2">Find Us</h2>
          <p className="mt-6 text-lg text-foreground/70">
            Visit our studios and galleries across the city to see our work in person
            and discuss your next project.
          </p>
        </div>

        {showApiKeyInput ? (
          <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl mx-auto border border-border/30">
            <h3 className="text-xl font-bold mb-4">Google Maps API Key Required</h3>
            <p className="mb-4 text-foreground/70">
              To display the map, please enter your Google Maps API key. This will be stored
              locally in your browser and not sent to any server.
            </p>
            <form onSubmit={handleApiKeySubmit} className="space-y-4">
              <input
                type="text"
                value={googleMapsApiKey}
                onChange={(e) => setGoogleMapsApiKey(e.target.value)}
                placeholder="Enter your Google Maps API Key"
                className="w-full px-4 py-3 rounded-md border border-border bg-background/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
              <button type="submit" className="btn-primary w-full">
                Save and Load Map
              </button>
              <p className="text-xs text-foreground/50 mt-2">
                To get an API key, visit the <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Maps Platform</a>.
              </p>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll">
              <div 
                ref={mapRef} 
                className="w-full h-[500px] rounded-xl shadow-lg overflow-hidden"
              >
                {(loading || !mapLoaded) && (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-white shadow-xl rounded-xl p-6 border border-border/30 h-full">
                <h3 className="text-xl font-bold mb-4">Our Locations</h3>
                
                <div className="space-y-4">
                  {sampleLocations.map(location => (
                    <div 
                      key={location.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        activeLocation?.id === location.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary/50 hover:bg-secondary'
                      }`}
                      onClick={() => setActiveLocation(location)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 rounded-full ${
                          activeLocation?.id === location.id 
                            ? 'bg-primary-foreground/20' 
                            : 'bg-primary/10'
                          } w-8 h-8 flex items-center justify-center flex-shrink-0`}
                        >
                          <MapPin size={16} className={activeLocation?.id === location.id ? 'text-primary-foreground' : 'text-primary'} />
                        </div>
                        <div>
                          <h4 className="font-bold">{location.title}</h4>
                          <p className={activeLocation?.id === location.id ? 'text-primary-foreground/80' : 'text-foreground/70'}>
                            {location.address}
                          </p>
                          {activeLocation?.id === location.id && (
                            <p className="mt-2 text-sm text-primary-foreground/90">
                              {location.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MapSection;


import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  const scrollToConstituency = () => {
    const element = document.getElementById('constituency');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-union-black">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      </div>
      
      {/* Large Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[150vh] h-[150vh] opacity-10 animate-slow-spin">
          <img 
            src="/images/logo.png" 
            alt="CLW Labour Union Logo" 
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* Hero content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo above heading */}
          <div 
            className={cn(
              "w-32 h-32 mx-auto mb-6 transition-all duration-700 transform",
              isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <img 
              src="/images/logo.png" 
              alt="CLW Labour Union Logo" 
              className="w-full h-full"
            />
          </div>
          
          {/* Red accent line */}
          <div 
            className={cn(
              "h-1 w-16 bg-union-red mx-auto mb-6 md:mb-8 transition-all duration-700 transform",
              isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '400ms' }}
          />
          
          {/* Small chip above heading */}
          <div 
            className={cn(
              "chip bg-white/10 text-white mb-4 md:mb-6 transition-all duration-700",
              isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '600ms' }}
          >
            Unity & Struggle
          </div>
          
          {/* Main heading */}
          <h1 
            className={cn(
              "text-white font-medium tracking-tight leading-tight mb-6 transition-all duration-700",
              isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '800ms' }}
          >
            Welcome to the <span className="text-union-red">C.L.W.</span> Labour Union
          </h1>
          
          {/* Subheading */}
          <p 
            className={cn(
              "max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8 md:mb-10 transition-all duration-700",
              isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '1000ms' }}
          >
            Building a future with dignity, equality and justice for all workers
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToConstituency}
            className={cn(
              "inline-flex items-center justify-center h-12 px-8 py-3 text-base font-medium text-white bg-union-red rounded-md shadow-md hover:bg-union-darkred transition-all duration-500 button-hover group",
              isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: '1200ms' }}
          >
            Find Out Who's Standing For Election
            <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: '1400ms' }}
      >
        {/* <p className="text-white/70 text-sm mb-2">Scroll to explore</p> */}
        {/* <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

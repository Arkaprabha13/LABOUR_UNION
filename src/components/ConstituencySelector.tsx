import { useState, useEffect } from 'react';
import { constituencies, Constituency } from '@/lib/data';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/animations';

interface ConstituencySelectorProps {
  onSelect: (constituency: Constituency) => void;
}

const ConstituencySelector: React.FC<ConstituencySelectorProps> = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView(0.2);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Track if section has been viewed to trigger animation once
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  
  useEffect(() => {
    // Select the first constituency by default after animation
    if (hasAnimated && constituencies.length > 0 && !selectedId) {
      setSelectedId(constituencies[0].id);
      onSelect(constituencies[0]);
    }
  }, [hasAnimated, onSelect, selectedId]);
  
  const handleSelect = (id: string | number) => {
    let selected;
    if (typeof id === 'number') {
      selected = constituencies[id - 1]; // Map number to index (1-based to 0-based)
    } else {
      selected = constituencies.find(c => c.id === id);
    }
    if (selected) {
      setSelectedId(selected.id);
      onSelect(selected);
    }
    setIsOpen(false);
  };
  
  const selectedConstituency = constituencies.find(c => c.id === selectedId);

  return (
    <section 
      id="constituency" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-24 px-4 sm:px-6 bg-union-lightgray"
    >
      <div className="max-w-5xl mx-auto">
        <div 
          className={cn(
            "text-center mb-12 transition-all duration-700",
            hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          )}
        >
          <div className="chip bg-union-red/10 text-union-red mb-4">
            Electoral Candidates
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-union-black mb-4">
            Find Who's Standing in Your Area
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your constituency to view the candidates running for election in your area.
            Each representative is committed to advancing labor rights and worker protections.
          </p>
        </div>
        
        <div 
          className={cn(
            "relative w-full max-w-md mx-auto mb-12 transition-all duration-700",
            hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <div 
            className="flex items-center justify-between p-4 border bg-union-red rounded-lg shadow-sm cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={!selectedConstituency ? "text-muted-foreground" : "text-white"}>
              {selectedConstituency ? selectedConstituency.name : "Select your constituency"}
            </span>
            <ChevronDown 
              className={cn(
                "h-5 w-5 text-black transition-transform duration-200",
                isOpen && "transform rotate-180"
              )} 
            />
          </div>
          
          {isOpen && (
            <div className="absolute z-20 mt-1 w-full bg-black border rounded-lg shadow-lg overflow-hidden animate-fadeIn">
              {constituencies.map((constituency, index) => (
                <div
                  key={constituency.id}
                  className={cn(
                    "p-4 cursor-pointer hover:bg-red-500 transition-colors duration-150",
                    selectedId === constituency.id && "bg-union-red/5 font-medium"
                  )}
                  onClick={() => handleSelect(index + 1)}
                >
                  {constituency.name}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {selectedConstituency && (
          <div 
            className={cn(
              "bg-red-500 p-4 sm:p-6 rounded-xl shadow-soft-xl transition-all duration-700",
              hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                {selectedConstituency.name}
              </h3>
              <p className="text-white">
                {selectedConstituency.description}
              </p>
            </div>
            
            <div className="h-px w-full bg-gray-100 my-6" />
            
            <p className="text-sm text-white mb-2">
              {selectedConstituency.members.length} candidates standing for election
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConstituencySelector;
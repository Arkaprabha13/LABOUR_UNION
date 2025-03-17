
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/animations';

const Join = () => {
  const { ref, isInView } = useInView(0.2);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  
  return (
    <section 
      id="join" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4 sm:px-6 bg-union-black text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(190,0,0,0.2)_25%,rgba(190,0,0,0.2)_50%,transparent_50%,transparent_75%,rgba(190,0,0,0.2)_75%,rgba(190,0,0,0.2))]" style={{ backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div>
            <div 
              className={cn(
                "h-1 w-16 bg-union-red mb-8 transition-all duration-700",
                hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-x-8"
              )}
            />
            
            <h2 
              className={cn(
                "text-3xl md:text-4xl font-medium mb-6 transition-all duration-700",
                hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Join the Movement for <span className="text-union-red">Workers' Rights</span>
            </h2>
            
            <p 
              className={cn(
                "text-gray-300 mb-8 max-w-lg transition-all duration-700",
                hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '200ms' }}
            >
              By becoming a member, you add your voice to thousands of others fighting for fair wages, 
              better working conditions, and dignity on the job. Together, we are stronger.
            </p>
            
            <div 
              className={cn(
                "flex flex-wrap gap-4 transition-all duration-700",
                hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '300ms' }}
            >
              <button className="px-6 py-3 bg-union-red hover:bg-union-darkred text-white rounded-md shadow-md transition-colors duration-200 button-hover">
                Become a Member
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md transition-colors duration-200 button-hover">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Benefits cards */}
          <div className="space-y-6">
            <BenefitCard 
              title="Member Benefits"
              description="Access legal support, educational resources, and exclusive training opportunities."
              delayOffset={0}
              hasAnimated={hasAnimated}
            />
            
            <BenefitCard 
              title="Collective Bargaining"
              description="Gain representation in negotiations for better wages, hours, and working conditions."
              delayOffset={1}
              hasAnimated={hasAnimated}
            />
            
            <BenefitCard 
              title="Community & Support"
              description="Join a community of like-minded individuals dedicated to advancing workers' rights."
              delayOffset={2}
              hasAnimated={hasAnimated}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
  delayOffset: number;
  hasAnimated: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  title, 
  description, 
  delayOffset,
  hasAnimated 
}) => {
  return (
    <div 
      className={cn(
        "bg-glass-gradient p-6 rounded-xl backdrop-blur-lg border border-white/10 transition-all duration-700 transform",
        hasAnimated ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      )}
      style={{ transitionDelay: `${400 + (delayOffset * 100)}ms` }}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default Join;

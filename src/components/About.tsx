
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/animations';
import { Users, Shield, Award } from 'lucide-react';
import TiltedCard from './TiltedCard';
import LampEffect from './LampEffect';
import { motion } from 'framer-motion';

const About = () => {
  const { ref, isInView } = useInView(0.2);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  
  const features = [
    {
      icon: <Users className="h-7 w-7" />,
      title: "Collective Power",
      description: "Together, we advocate for rights that would be impossible to secure individually. Our collective action has won better wages and working conditions.",
      image: "data:image/jpeg;base64,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"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Worker Protection",
      description: "We provide legal support, representation, and resources to defend workers against unfair practices and ensure their rights are respected.",
      image: "https://img.freepik.com/free-photo/labor-union-members-working-together_23-2150995041.jpg"
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Democratic Values",
      description: "Our union is built on democratic principles, where every member has a voice in shaping our policies, strategies, and leadership.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepDOBKEx6wT0_hlfyfZCgRCyfl_hoGuTmEixUOfVscreOCQAwCCeiEbpMCccawedzsEg&usqp=CAU"
    }
  ];
  
  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <LampEffect width="250px" delay={0.2}>
            <div 
              className={cn(
                "chip bg-union-red/10 text-union-red mb-12 transition-all duration-700 text-4xl",
                hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
              )}
            >
              Our Mission
            </div>
          </LampEffect>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-medium text-union-white mb-4 transition-all duration-700",
              hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '100ms' }}
          >
            Standing for Workers' Rights
          </h2>
          <p 
            className={cn(
              "text-muted-foreground max-w-2xl text-union-lightgray mx-auto transition-all duration-700",
              hasAnimated ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            For decades, we have fought to secure fair wages, safe working conditions, 
            and dignity for all workers. Our union is committed to building a just society
            where labor is respected and valued.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
            >
              <TiltedCard
                imageSrc={feature.image}
                altText={`${feature.title} illustration`}
                captionText={feature.title}
                containerHeight="250px"
                containerWidth="100%"
                imageHeight="200px"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-6 bg-black/30 backdrop-blur-sm w-full h-full rounded-xl flex flex-col justify-end">
                    <div className="w-14 h-14 bg-union-red/10 rounded-lg flex items-center justify-center text-union-red mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {feature.description}
                    </p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

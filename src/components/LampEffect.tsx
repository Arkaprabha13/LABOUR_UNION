
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface LampEffectProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  delay?: number;
}

const LampEffect: React.FC<LampEffectProps> = ({
  children,
  width = '100%',
  height = '100%',
  color = '#BE0000',
  delay = 0.3
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  return (
    <div ref={ref} className="relative">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { width: 0 },
          visible: { width: width, transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1.0] } }
        }}
        className="absolute h-1 bg-union-red z-0 left-0 right-0 mx-auto top-1/2 transform -translate-y-1/2"
        style={{ boxShadow: `0 0 15px 3px ${color}` }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.5, 
              delay: delay + 0.4,
              ease: "easeOut"
            } 
          }
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default LampEffect;

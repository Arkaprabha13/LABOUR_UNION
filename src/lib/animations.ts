
import { useEffect, useState, useRef } from 'react';

// Hook to track when an element is in view
export const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isInView };
};

// Hook for lazy loading images
export const useLazyImage = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setCurrentSrc(src);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);
  
  return { isLoaded, currentSrc };
};

// Hook for staggered animations
export const useStaggeredAnimation = (items: any[], delay = 100) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);
  
  useEffect(() => {
    const newAnimatedItems = Array(items.length).fill(false);
    
    items.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * delay);
    });
    
    return () => {
      setAnimatedItems([]);
    };
  }, [items, delay]);
  
  return animatedItems;
};

// Hook for smooth counter animation
export const useSmoothCounter = (end: number, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      
      if (countRef.current !== value) {
        countRef.current = value;
        setCount(value);
      }
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, start]);
  
  return count;
};

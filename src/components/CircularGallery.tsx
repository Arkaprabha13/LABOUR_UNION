import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CircularGallery.css';
import MemberCard from './MemberCard';

interface GalleryItem {
  image: string;
  text: string;
  component?: React.ReactNode;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
}

const CircularGallery: React.FC<CircularGalleryProps> = ({
  items = [],
  textColor = "#ffffff",
  borderRadius = 0.05,
}) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Clone items to create an infinite scroll effect
  const galleryItems = [...items, ...items];
  
  useEffect(() => {
    // Add animation delay to each item for staggered entrance
    const itemElements = document.querySelectorAll('.gallery-item');
    itemElements.forEach((item, index) => {
      (item as HTMLElement).style.setProperty('--delay', `${index * 0.1}s`);
    });
  }, [items]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
    galleryRef.current.classList.add('active');
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (galleryRef.current) {
      galleryRef.current.classList.remove('active');
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (galleryRef.current) {
      galleryRef.current.classList.remove('active');
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="circular-gallery">
      <div
        className="gallery-wrapper"
        ref={galleryRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={`${item.text}-${index}`}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {item.component ? (
              item.component
            ) : (
              <>
                <div className="gallery-img-wrapper" style={{ borderRadius: `${borderRadius * 100}%` }}>
                  <img
                    src={item.image}
                    alt={item.text}
                    className="gallery-img"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-text" style={{ color: textColor }}>
                  {item.text}
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CircularGallery;
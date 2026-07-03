"use client";

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  threshold?: number;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.6,
  className = '',
  threshold = 0.1
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to keep it visible
          if (currentRef) observer.unobserve(currentRef);
        }
      });
    }, {
      threshold
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'up': return 'translateY(24px)';
      case 'down': return 'translateY(-24px)';
      case 'left': return 'translateX(24px)';
      case 'right': return 'translateX(-24px)';
      case 'none': return 'translate(0, 0)';
      default: return 'translateY(24px)';
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

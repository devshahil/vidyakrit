"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface MobileCarouselProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function MobileCarousel({ children, className, itemClassName }: MobileCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      duration: 60, // Higher number = slower, smoother glide transition
      breakpoints: {
        '(min-width: 768px)': { active: false }
      }
    },
    [Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true, playOnInit: true })]
  );

  const childArray = React.Children.toArray(children);
  // We need enough slides for the loop to work seamlessly on mobile.
  const isFewSlides = childArray.length < 6;

  return (
    <div ref={emblaRef} className="embla-mobile-viewport">
      <div className={`embla-mobile-container ${className || ""}`}>
        {childArray.map((child, i) => (
          <div key={i} className={itemClassName || "embla-mobile-slide"}>
            {child}
          </div>
        ))}
        {/* Duplicate slides for infinite looping only visible on mobile */}
        {isFewSlides && childArray.map((child, i) => (
          <div key={`dup1-${i}`} className={`${itemClassName || "embla-mobile-slide"} mobile-only-slide`}>
            {child}
          </div>
        ))}
        {isFewSlides && childArray.map((child, i) => (
          <div key={`dup2-${i}`} className={`${itemClassName || "embla-mobile-slide"} mobile-only-slide`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

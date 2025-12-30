import { useRef, useEffect, useState, useCallback } from 'react';
import type { ProductCardData } from '../types';
import { ProductCard } from './ProductCard';

interface CardCarouselProps {
  title: string;
  subtitle?: string;
  items: ProductCardData[];
  headerButton?: React.ReactNode;
}

export const CardCarousel = ({ title, subtitle, items, headerButton }: CardCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [showNav, setShowNav] = useState(false);

  // Calculate card width on mount and resize
  useEffect(() => {
    const updateCardWidth = () => {
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector('article');
        if (firstCard) {
          const rect = firstCard.getBoundingClientRect();
          const gap = 24; // 1.5rem (gap-6)
          setCardWidth(rect.width + gap);
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    
    // Show nav only if we have multiple cards
    setShowNav(items.length > 1);

    return () => window.removeEventListener('resize', updateCardWidth);
  }, [items.length]);

  // Update active index based on scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [cardWidth]);

  const scrollToCard = useCallback((direction: 'prev' | 'next') => {
    if (!trackRef.current) return;

    const currentScroll = trackRef.current.scrollLeft;
    const targetScroll = direction === 'next' 
      ? currentScroll + cardWidth 
      : currentScroll - cardWidth;

    trackRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, [cardWidth]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!trackRef.current) return;
      
      // Only handle if carousel or its children have focus
      if (!trackRef.current.contains(document.activeElement)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToCard('prev');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToCard('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [scrollToCard]);

  const canScrollPrev = activeIndex > 0;
  const canScrollNext = activeIndex < items.length - 1;

  return (
    <section 
      aria-label={title}
      className="relative w-full pb-16 bg-gradient-to-b from-[#0b0e13] to-[#141821] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 md:mt-3 text-sm md:text-base text-white/70 max-w-2xl">
                  {subtitle}
                </p>
              )}
            </div>
            {headerButton && (
              <div className="flex-shrink-0">
                {headerButton}
              </div>
            )}
          </div>
        </header>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          {showNav && (
            <>
              <button
                onClick={() => scrollToCard('prev')}
                disabled={!canScrollPrev}
                aria-label="Previous product"
                className={`hidden md:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center transition-all duration-200 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#0b0e13] ${!canScrollPrev ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => scrollToCard('next')}
                disabled={!canScrollNext}
                aria-label="Next product"
                className={`hidden md:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center transition-all duration-200 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#0b0e13] ${!canScrollNext ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Scrollable Track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            role="region"
            aria-label="CompX product carousel"
            tabIndex={0}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[85vw] md:w-[60vw] xl:w-[700px] h-[480px] md:h-[550px]"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>

          {/* Instructional Text */}
          <div className="text-center mt-4 mb-3">
            {/* Mobile */}
            <p className="md:hidden text-xs text-white/50 font-medium">
              Swipe to view the ecosystem
            </p>
            {/* Desktop */}
            <p className="hidden md:block text-xs text-white/50 font-medium">
              Scroll to explore the ecosystem
            </p>
          </div>

          {/* Dot Indicators */}
          {showNav && items.length > 1 && (
            <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Product indicators">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (trackRef.current) {
                      trackRef.current.scrollTo({
                        left: index * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to ${item.name}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#0b0e13] ${
                    index === activeIndex 
                      ? 'w-8 bg-pink-500' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


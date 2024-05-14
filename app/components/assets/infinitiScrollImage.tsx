'use client';

import React, { useRef, useEffect, useState } from 'react';

type Props = {
  hoveredSrc: string;
  defaultSrc: string;
  tagsSrc: string;
  alt: string;
  width: string;
  height: string;
};

const InfiniteScrollImage = ({ hoveredSrc, defaultSrc, tagsSrc, alt, width, height }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContentsRef = useRef<HTMLDivElement[]>([]);

  // rolling animation
  useEffect(() => {
    if (!containerRef.current || !imageContentsRef.current) return;

    const container = containerRef.current;
    const imageContents = imageContentsRef.current;
    const imageWidth = imageContents[0].offsetWidth;
    const duration = 10;

    let left = 0;
    let intervalId: number | null = null;

    const animate = () => {
      left -= 1;
      if (left <= -imageWidth) {
        left = 0;
      }
      imageContents.forEach((el) => {
        el.style.transform = `translateX(${left}px)`;
      });
    };

    const startAnimation = () => {
      intervalId = window.setInterval(animate, duration);
    };

    startAnimation();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div
      className="overflow-auto w-full h-[442px] relative"
      ref={containerRef}
    >
      <div className="h-full relative"
           style={{ display: 'flex', minWidth: '3596px' }}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
        {
          Array.from({ length: 2 }).map((_, index) => (
            <div
              className="relative flex-shrink-0 w-full h-full"
              ref={(el) => {
                if (!el) return;
                imageContentsRef.current.push(el);
              }}
              key={index}
            >
              <img src={isHovered ? hoveredSrc : defaultSrc} alt={alt} width={width} height={height}
                   className="absolute translate-x-0 w-fit"
                   style={{ width: '100%', height: '100%' }} />
              <img src={tagsSrc} alt={alt} width={width} height={height}
                   className="absolute w-fit"
                   style={{ width: '100%', height: '100%' }} />
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default InfiniteScrollImage;

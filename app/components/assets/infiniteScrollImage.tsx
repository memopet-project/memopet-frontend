'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  hoveredSrc?: string;
  defaultSrc: string;
  tagsSrc: string;
  alt: string;
  width: string;
  height: string;
  isMobile?: boolean;
};

const InfiniteScrollImage = ({ hoveredSrc, defaultSrc, tagsSrc, alt, width, height, isMobile }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContentsRef = useRef<HTMLDivElement[]>([]);

  // rolling animation
  useEffect(() => {
    if (!containerRef.current || !imageContentsRef.current) return;

    const imageContents: HTMLDivElement[] = imageContentsRef.current;
    const imageWidth: number = imageContents[0].offsetWidth;
    const duration = 10;

    let left = 0;
    let intervalId: number | null = null;

    const animate = (): void => {
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
      className="overflow-hidden w-full h-[221px] md:h-[442px] relative"
      ref={containerRef}
    >
      <div className="h-full relative flex min-w-[1798px] md:min-w-[3596px]"
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
              {isMobile ? (
                <img src={defaultSrc} alt={alt} width={width} height={height}
                     className="absolute w-full h-full"
                />
              ) : (
                <img src={isHovered ? hoveredSrc : defaultSrc} alt={alt} width={width} height={height}
                     className="absolute w-full h-full"
                />
              )}
              <img src={tagsSrc} alt={alt} width={width} height={height}
                   className="absolute w-full h-full"
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default InfiniteScrollImage;

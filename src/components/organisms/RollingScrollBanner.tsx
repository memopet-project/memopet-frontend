'use client';

import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import BannerImage from '@/assets/images/slideBanner.png';
import BannerImage2 from '@/assets/images/slideBanner2.png';
import BannerTags from '@/assets/images/slideBannerTags.png';

export type RollingScrollBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
}

const RollingScrollBanner = ({ children, ...rest }: RollingScrollBannerProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
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
      css={css`
        overflow: hidden;
        width: 100%;
        height: 442px;
        position: relative;
      `}
      {...rest}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={containerRef}
    >
      <div
        css={css`
          height: 100%;
          position: relative;
          display: flex;
          min-width: 3596px;
        `}
      >
        {
          Array.from({ length: 2 }).map((_, index) => (
            <div
              css={css`
                position: relative;
                flex-shrink: 0;
                width: 100%;
                height: 100%;
              `}
              ref={(el) => {
                if (el) {
                  imageContentsRef.current.push(el);
                }
              }}
              key={index}
            >
              <Image
                css={css`
                  height: 100%;
                  width: 100%;
                  position: absolute;
                `}
                width={3596}
                height={442}
                src={isHover ? BannerImage2 : BannerImage}
                alt="banner"
              />
              <Image
                css={css`
                  height: 100%;
                  width: 100%;
                  position: absolute;
                `}
                src={BannerTags}
                width={3596}
                height={442}
                alt="banner"
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default RollingScrollBanner;

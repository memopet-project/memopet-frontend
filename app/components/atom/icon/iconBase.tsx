import React from 'react';
import Image from 'next/image';

type Props = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  src: string | React.ReactNode;
  alt: string;
  width: number;
  height: number;
  className?: string;

}

const IconBase = ({ src, alt, height, width, size, className }: Props) => {

  const sizeMap = {
    'xs': 'w-[8px] h-[8px]',
    'sm': 'w-[16px] h-[16px]',
    'md': 'w-[24px] h-[24px]',
    'lg': 'w-[32px] h-[32px]',
    'xl': 'w-[48px] h-[48px]',
    '2xl': 'w-[64px] h-[64px]',
  };

  const containerSizeClass = (): string => {
    let defaultClass = 'flex items-center justify-center';

    const sizeClass = sizeMap[size];

    if (sizeClass) {
      return `${defaultClass} ${sizeClass}`;
    }

    return `${defaultClass} ${sizeMap['md']}`;
  };

  return (
    <div className={containerSizeClass()}>
      {typeof src === 'string' ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      ) : (
        src
      )}
    </div>
  );
};

export default IconBase;

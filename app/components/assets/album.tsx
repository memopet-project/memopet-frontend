import React from 'react';

type Props = {
    imgSrc: string;
    maskSrc: string;
    width: string | number;
    height: string | number;
};

const Album = ({imgSrc, maskSrc, width, height}: Props) => {
    const containerStyle = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        backgroundImage: `url(${imgSrc})`,
        maskImage: `url(${maskSrc})`,
        WebkitMaskImage: `url(${maskSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div style={containerStyle}>
        </div>
    );
};

export default Album;

import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import PhotoArrowButton from '@/components/atoms/buttons/PhotoArrowButton';

interface IProps {
  thumbImgs: string[];
}

const MemoryPhoto = ({ thumbImgs }: IProps) => {
  const theme = useTheme();

  const [curPhotoIdx, setCurPhotoIdx] = useState(0);

  const handleClickPrevBtn = () => {};
  const handleClickNextBtn = () => {};
  const handleClickIndicator = () => {};

  return (
    <div
      css={css`
        position: relative;
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: calc(50% - 20px);
          left: 0;
        `}
      >
        <PhotoArrowButton direction='left' />
      </div>
      <div
        css={css`
          position: absolute;
          top: calc(50% - 20px);
          right: 0;
        `}
      >
        <PhotoArrowButton direction='right' />
      </div>
      <Image
        src={sampleMemoryThumbnail}
        alt='썸네일 이미지'
        css={css`
          border-radius: 8px;
          object-fit: contain;
          width: 400px;
          height: 600px;
          @media ${theme.device.mobile} {
            width: 335px;
            height: 480px;
          }
        `}
      />
      <ul
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 8px;
          position: absolute;
          bottom: 16px;
          @media ${theme.device.mobile} {
            position: static;
            gap: 6px;
          }
        `}
      >
        {thumbImgs.map((v, idx) => (
          <li
            key={v}
            css={css`
              display: flex;
            `}
          >
            <button
              css={css`
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: ${theme.colors.grey[200]};
                opacity: ${idx === curPhotoIdx ? 1 : 0.5};
                @media ${theme.device.mobile} {
                  width: 6px;
                  height: 6px;
                }
              `}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoryPhoto;

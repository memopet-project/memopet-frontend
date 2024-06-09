import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import { css } from '@emotion/react';
import PhotoArrowButton from '@/components/atoms/button/PhotoArrowButton';
import { useState } from 'react';
import common from '@/styles/common';

interface PropsType {
  thumbImgs: string[];
}

const MemoryPhoto = ({ thumbImgs }: PropsType) => {
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
        <PhotoArrowButton type='prev' />
      </div>
      <div
        css={css`
          position: absolute;
          top: calc(50% - 20px);
          right: 0;
        `}
      >
        <PhotoArrowButton type='next' />
      </div>
      <Image
        src={sampleMemoryThumbnail}
        alt='썸네일 이미지'
        css={css`
          border-radius: 8px;
          object-fit: contain;
          width: 400px;
          height: 600px;
          @media screen and (max-width: 743px) {
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
          @media screen and (max-width: 743px) {
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
                background: ${common.colors.gray[200]};
                opacity: ${idx === curPhotoIdx ? 1 : 0.5};
                @media screen and (max-width: 743px) {
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

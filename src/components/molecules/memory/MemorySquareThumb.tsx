import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import common from '@/styles/common';
import { css } from '@emotion/react';
import Image from 'next/image';

interface PropsType {
  thumbImg: string;
  date: string;
  title: string;
}

const MemorySquareThumb = ({ thumbImg, date, title }: PropsType) => {
  return (
    <div
      css={css`
        position: relative;
        width: fit-content;
        display: flex;
        cursor: pointer;
        &:hover > div {
          display: flex;
        }
      `}
    >
      <Image
        src={sampleMemoryThumbnail}
        alt='썸네일 이미지'
        width={344}
        height={344}
        css={css`
          object-fit: cover;
        `}
      />
      <div
        css={css`
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
          flex-direction: column;
          justify-content: end;
          gap: 4px;
          padding: 16px;
          color: ${common.colors.gray[0]};
        `}
      >
        <span
          css={css`
            font-size: 13px;
          `}
        >
          {date}
        </span>
        <p
          css={css`
            font-weight: 500;
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default MemorySquareThumb;

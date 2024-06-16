import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import ThumbMoreBadge from '@/components/atoms/ThumbMoreBadge';
import { css, useTheme } from '@emotion/react';
import Image from 'next/image';

interface IProps {
  thumbImgs: string[];
  date: string;
  title: string;
}

const MemorySquareThumb = ({ thumbImgs, date, title }: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        width: fit-content;
        display: flex;
        cursor: pointer;
        &:hover > div:last-of-type {
          display: flex;
        }
      `}
    >
      <div
        css={css`
          width: fit-content;
          position: relative;
        `}
      >
        {thumbImgs.length > 1 ? (
          <div
            css={css`
              z-index: 1;
              position: absolute;
              top: 8px;
              right: 8px;
            `}
          >
            <ThumbMoreBadge moreNum={thumbImgs.length - 1} />
          </div>
        ) : null}
        <div
          css={css`
            display: flex;
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
        </div>
      </div>
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
        `}
      >
        <span
          css={css`
            font-size: 13px;
            color: ${theme.colors.grey[0]};
          `}
        >
          {date}
        </span>
        <p
          css={css`
            font-weight: ${theme.fontWeights.medium};
            color: ${theme.colors.grey[0]};
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default MemorySquareThumb;

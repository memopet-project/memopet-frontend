import { css, useTheme } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import ThumbMoreBadge from '@/components/atoms/ThumbMoreBadge';

interface IProps {
  thumbImgs: string[];
}

const HistorySquareTumnb = ({ thumbImgs }: IProps) => {
  const theme = useTheme();
  return (
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
          position: relative;
          width: 240px;
          height: 240px;
          @media ${theme.device.mobile} {
            width: 120px;
            height: 120px;
          }
        `}
      >
        <Image
          src={sampleMemoryThumbnail}
          alt='썸네일 이미지'
          layout='fill'
          css={css`
            border-radius: 8px;
            object-fit: cover;
          `}
        />
      </div>
    </div>
  );
};

export default HistorySquareTumnb;

import { css, useTheme } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';

interface IProps {
  thumbImgs: string[];
  date: string;
  state?: boolean;
}

const MemoryTimeline = ({ thumbImgs, date, state }: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding: 16px 0;
        display: flex;
        align-items: center;
        gap: 8px;
        &:hover {
          img {
            border: ${state ? '' : `1px solid ${theme.colors.grey[900]}`};
          }
          & > span {
            color: ${state ? '' : theme.colors.grey[400]};
          }
        }
      `}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {thumbImgs.length > 1 ? (
          <div
            css={css`
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              width: ${state ? 32 : 24}px;
              height: ${state ? 32 : 24}px;
              border-radius: 50%;
              background: #00000066;
              font-weight: ${theme.fontWeights.semibold};
              font-size: ${state ? theme.fontSizes.xs : '11px'};
              color: ${theme.colors.grey[0]};
            `}
          >
            +{thumbImgs.length - 1}
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
            width={40}
            height={40}
            css={css`
              border-radius: 50%;
              object-fit: cover;
              width: ${state ? 64 : 40}px;
              height: ${state ? 64 : 40}px;
              border: ${state
                ? `2px solid ${theme.colors.grey[900]}`
                : `0.5px solid ${theme.colors.grey[300]}`};
            `}
          />
        </div>
      </div>
      <span
        css={css`
          font-weight: ${theme.fontWeights.medium};
          font-size: ${state ? theme.fontSizes.sm : theme.fontSizes.xs};
          color: ${state ? theme.colors.primary[500] : 'inherit'};
        `}
      >
        {date}
      </span>
    </div>
  );
};

export default MemoryTimeline;

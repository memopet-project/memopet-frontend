import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import { css, useTheme } from '@emotion/react';
import { toEllipsisStyle } from '../history/UserItem';

interface IProps {
  thumbImg: string;
  title: string;
  content: string;
  type?: 'default' | 'skeleton';
}

const SearchMemoryItem = ({
  thumbImg,
  title,
  content,
  type = 'default',
}: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 8px;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        {type === 'skeleton' ? (
          <div
            css={css`
              width: 64px;
              height: 64px;
              border-radius: 50%;
              background: #1717171a;
            `}
          ></div>
        ) : (
          <Image
            src={sampleMemoryThumbnail}
            alt='썸네일 이미지'
            width={64}
            height={64}
            css={css`
              border-radius: 6px;
              object-fit: cover;
            `}
          />
        )}
      </div>
      {type === 'skeleton' ? (
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 8px;
          `}
        >
          <div
            css={css`
              height: 16px;
              border-radius: 4px;
              background: #1717171a;
            `}
          ></div>
          <div
            css={css`
              height: 16px;
              border-radius: 4px;
              background: #1717171a;
            `}
          ></div>
        </div>
      ) : (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            font-size: ${theme.fontSizes.sm};
          `}
        >
          <p
            css={css`
              font-weight: ${theme.fontWeights.medium};
              ${toEllipsisStyle(1)}
            `}
          >
            {title}
          </p>
          <p
            css={css`
              ${toEllipsisStyle(2)}
            `}
          >
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchMemoryItem;

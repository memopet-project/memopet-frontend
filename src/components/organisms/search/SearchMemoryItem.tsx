import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import { css } from '@emotion/react';

interface PropsType {
  thumbImg: string;
  title: string;
  content: string;
}

const SearchMemoryItem = ({ thumbImg, title, content }: PropsType) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 8px;
      `}
    >
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
      <div
        css={css`
          display: flex;
          flex-direction: column;
          font-size: 14px;
        `}
      >
        <p
          css={css`
            font-weight: 500;
          `}
        >
          {title}
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SearchMemoryItem;

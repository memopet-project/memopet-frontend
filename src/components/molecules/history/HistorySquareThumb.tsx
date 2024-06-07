import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';

interface PropsType {
  thumbImg: string;
}

const HistorySquareTumnb = ({ thumbImg }: PropsType) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <Image
        src={sampleMemoryThumbnail}
        alt='썸네일 이미지'
        width={240}
        height={240}
        css={css`
          border-radius: 8px;
          object-fit: cover;
        `}
      />
    </div>
  );
};

export default HistorySquareTumnb;

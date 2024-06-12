import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';

interface IProps {
  thumbImg: string;
}

const HistorySquareTumnb = ({ thumbImg }: IProps) => {
  return (
    <div
      css={css`
        position: relative;
        width: 240px;
        height: 240px;
        @media screen and (max-width: 743px) {
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
  );
};

export default HistorySquareTumnb;

import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import IconButton from '@/components/atoms/buttons/IconButton';
import TrashIcon from '@/assets/icon/TrashIcon';

interface PropsType {
  thumbImg: string;
  comment: string;
}

const HistoryMemoryCommentItem = ({ thumbImg, comment }: PropsType) => {
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
        `}
      />
      <p
        css={css`
          font-size: 14px;
        `}
      >
        {comment}
      </p>
      <IconButton>
        <TrashIcon color={'var(--grey-400)'} />
      </IconButton>
    </div>
  );
};

export default HistoryMemoryCommentItem;

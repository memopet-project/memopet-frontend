import TrashIcon from '@/assets/icon/TrashIcon';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import IconButton from '@/components/atoms/button/IconButton';
import common from '@/styles/common';
import { css } from '@emotion/react';
import Image from 'next/image';

interface PropsType {
  profileImg: string;
  name: string;
  comment: string;
}

const HistoryCommentItem = ({ profileImg, name, comment }: PropsType) => {
  return (
    <div
      css={css`
        border-radius: 8px;
        border: 1px solid ${common.colors.gray[700]};
        padding: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        background: ${common.colors.gray[50]};
      `}
    >
      <Image
        src={sampleMemoryThumbnail}
        alt='프로필 이미지'
        width={32}
        height={32}
        css={css`
          border-radius: 50%;
          border: 0.5px solid ${common.colors.gray[900]};
          object-fit: cover;
        `}
      />
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4px;
        `}
      >
        <div
          css={css`
            font-weight: 500;
            font-size: 12px;
          `}
        >
          <span
            css={css`
              color: ${common.colors.gray[500]};
            `}
          >
            {name}
          </span>
          <span>에게</span>
        </div>
        <p
          css={css`
            font-size: 14px;
          `}
        >
          {comment}
        </p>
      </div>
      <IconButton>
        <TrashIcon color={common.colors.gray[400]} />
      </IconButton>
    </div>
  );
};

export default HistoryCommentItem;

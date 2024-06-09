import MoreVerticalIcon from '@/assets/icon/MoreVerticalIcon';
import IconButton from '@/components/atoms/button/IconButton';
import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';

interface PropsType {
  profileImg: string;
  name: string;
  time: string;
  comment: string;
}

const CommentItem = ({ profileImg, name, time, comment }: PropsType) => {
  return (
    <div
      css={css`
        position: relative;
        width: 360px;
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        border-radius: 8px;
        border: 1px solid var(--grey-700);
        background: var(--grey-50);
        &:hover {
          box-shadow: 0px 4px 0px 0px #171717;
          background: var(--grey-100);
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 4px;
          right: 0;
        `}
      >
        <IconButton>
          <MoreVerticalIcon />
        </IconButton>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 12px;
        `}
      >
        <Image
          src={sampleMemoryThumbnail}
          alt='프로필 이미지'
          width={32}
          height={32}
          css={css`
            border-radius: 50%;
            border: 0.5px solid var(--grey-900);
            object-fit: cover;
          `}
        />
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 4px;
          `}
        >
          <span
            css={css`
              font-weight: 700;
            `}
          >
            {name}
          </span>
          <span
            css={css`
              font-size: 13px;
              color: var(--grey-500);
            `}
          >
            {time}
          </span>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default CommentItem;

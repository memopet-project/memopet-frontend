import MoreVerticalIcon from '@/assets/icon/MoreVerticalIcon';
import IconButton from '@/components/atoms/buttons/IconButton';
import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';

interface IProps {
  profileImg: string;
  name: string;
  time: string;
  comment: string;
  type?: 'default' | 'reply' | 'my';
}

const MemoryCommentItem = ({
  profileImg,
  name,
  time,
  comment,
  type = 'default',
}: IProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4px;
        padding: ${type === 'reply'
          ? '8px 0 8px 16px'
          : type === 'my'
            ? '8px'
            : 0};
        background: ${type === 'reply'
          ? 'var(--grey-100)'
          : type === 'my'
            ? 'var(--main-red-50)'
            : 'none'};
        border: ${type === 'default'
          ? 'none'
          : `1px solid
          ${type === 'reply' ? 'var(--grey-200)' : 'var(--main-red-500)'};`};
        border-radius: 6px;
      `}
    >
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
            padding: 4px 0;
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
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 2px;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 4px;
            `}
          >
            <span
              css={css`
                font-weight: 600;
                font-size: 14px;
              `}
            >
              {name}
            </span>
            <span
              css={css`
                font-size: 12px;
                color: var(--grey-500);
              `}
            >
              {time}
            </span>
          </div>
          <p
            css={css`
              font-size: 14px;
            `}
          >
            {comment}
          </p>
        </div>
      </div>
      <IconButton>
        <MoreVerticalIcon />
      </IconButton>
    </div>
  );
};

export default MemoryCommentItem;

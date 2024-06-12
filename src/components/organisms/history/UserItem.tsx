import { css, useTheme } from '@emotion/react';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import Image from 'next/image';
import IconButton from '@/components/atoms/buttons/IconButton';
import MoreVerticalIcon from '@/assets/icon/MoreVerticalIcon';
import MemoryActionButton from '@/components/molecules/memory/MemoryActionButton';

interface IProps {
  name: string;
  intro: string;
  state?: 'default' | 'block';
}

const UserItem = ({ name, intro, state = 'default' }: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 376px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4px;
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
              border: 0.5px solid ${theme.colors.grey[900]};
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
          <span
            css={css`
              font-weight: 600;
              font-size: 14px;
            `}
          >
            {name}
          </span>
          <p
            css={css`
              font-size: 12px;
              color: ${theme.colors.grey[400]};
            `}
          >
            {intro}
          </p>
        </div>
      </div>
      {state === 'default' ? (
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <MemoryActionButton type='like' amount={123} />
          <IconButton>
            <MoreVerticalIcon />
          </IconButton>
        </div>
      ) : (
        <button>차단 해제</button>
      )}
    </div>
  );
};

export default UserItem;

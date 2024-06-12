import { css, useTheme } from '@emotion/react';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import Image from 'next/image';
import IconButton from '@/components/atoms/buttons/IconButton';
import MoreVerticalIcon from '@/assets/icon/MoreVerticalIcon';
import MemoryActionButton from '@/components/molecules/memory/MemoryActionButton';
import RoundButton from '@/components/atoms/buttons/RoundButton';

interface IProps {
  profileImg: string;
  name: string;
  intro: string;
  type: 'like' | 'flower' | 'block' | 'skeleton';
  amount?: number;
  state?: boolean;
}

export const toEllipsisStyle = (line: number) => css`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

const UserItem = ({
  profileImg,
  name,
  intro,
  type,
  amount = 0,
  state,
}: IProps) => {
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
          width: 100%;
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
          {type === 'skeleton' ? (
            <div
              css={css`
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: #1717171a;
              `}
            ></div>
          ) : (
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
          )}
        </div>
        {type === 'skeleton' ? (
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
              gap: 2px;
            `}
          >
            <span
              css={css`
                font-weight: ${theme.fontWeights.semibold};
                font-size: ${theme.fontSizes.sm};
              `}
            >
              {name}
            </span>
            <p
              css={css`
                font-size: ${theme.fontSizes.xs};
                color: ${theme.colors.grey[400]};
                ${toEllipsisStyle(1)}
              `}
            >
              {intro}
            </p>
          </div>
        )}
      </div>
      {type === 'skeleton' ? null : type === 'block' ? (
        <RoundButton type='outline'>차단 해제</RoundButton>
      ) : (
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <MemoryActionButton type={type} state={state} amount={amount} />
          <IconButton>
            <MoreVerticalIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default UserItem;

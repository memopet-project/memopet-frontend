import { css, useTheme } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import PlusIcon from '@/assets/icon/PlusIcon';
import CloseIcon from '@/assets/icon/CloseIcon';

interface IProps {
  thumbImg?: string;
  state: 'empty' | 'inactive' | 'active' | 'add' | 'disabled';
}

const MemoryThumbItem = ({ thumbImg, state }: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid
          ${state === 'inactive'
            ? theme.colors.grey[900]
            : state === 'active'
              ? theme.colors.primary[500]
              : theme.colors.grey[200]};
        background: ${state === 'empty' ||
        state === 'add' ||
        state === 'disabled'
          ? theme.colors.grey[100]
          : 'none'};
        opacity: ${state === 'disabled' ? 0.5 : 1};
        cursor: ${state === 'inactive' || state === 'active' || state === 'add'
          ? 'pointer'
          : 'auto'};
        &:hover {
          background: ${state === 'add' ? theme.colors.grey[150] : ''};
          /* layer */
          & > div {
            display: block;
          }
          /* delete */
          & > button {
            display: flex;
          }
        }
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        {state === 'inactive' || state === 'active' ? (
          <Image
            src={sampleMemoryThumbnail}
            alt='썸네일 이미지'
            width={62}
            height={62}
            css={css`
              border-radius: 8px;
              object-fit: cover;
            `}
          />
        ) : null}
      </div>
      {state === 'inactive' || state === 'active' ? (
        <div
          css={css`
            display: none;
            width: 64px;
            height: 64px;
            background: #1717171a;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 8px;
          `}
        ></div>
      ) : null}
      {state === 'inactive' || state === 'active' ? (
        <button
          css={css`
            position: absolute;
            top: 3px;
            right: 3px;
            width: 16px;
            height: 16px;
            display: none;
            justify-content: center;
            align-items: center;
            background: #17171780;
            border-radius: 50%;
          `}
        >
          <CloseIcon color={theme.colors.grey[0]} size={8} />
        </button>
      ) : null}
      {state === 'add' || state === 'disabled' ? (
        <span
          css={css`
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px dashed ${theme.colors.grey[300]};
            border-radius: 50%;
          `}
        >
          <PlusIcon color={theme.colors.grey[500]} />
        </span>
      ) : null}
    </div>
  );
};

export default MemoryThumbItem;

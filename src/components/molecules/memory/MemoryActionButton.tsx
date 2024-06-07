import CommentIcon from '@/assets/icon/CommentIcon';
import FlowerIcon from '@/assets/icon/FlowerIcon';
import LikeIcon from '@/assets/icon/LikeIcon';
import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  type: 'flower' | 'like' | 'comment';
  amount: number;
}

const MemoryActionButton = ({ type, amount }: PropsType) => {
  return (
    <button
      css={css`
        display: flex;
        align-items: center;
        gap: 4px;
      `}
    >
      {type === 'flower' ? (
        <FlowerIcon color={common.colors.gray[700]} />
      ) : type === 'like' ? (
        <LikeIcon color={common.colors.gray[700]} />
      ) : (
        <CommentIcon color={common.colors.gray[700]} />
      )}
      <span
        css={css`
          color: ${common.colors.gray[700]};
          font-size: 16px;
        `}
      >
        {amount}
      </span>
    </button>
  );
};

export default MemoryActionButton;

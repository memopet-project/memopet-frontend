import CommentIcon from '@/assets/icon/CommentIcon';
import FlowerIcon from '@/assets/icon/FlowerIcon';
import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  type: 'flower' | 'comment';
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
      ) : (
        <CommentIcon color={common.colors.gray[700]} />
      )}
      <span
        css={css`
          color: ${common.colors.gray[700]};
        `}
      >
        {amount}
      </span>
    </button>
  );
};

export default MemoryActionButton;

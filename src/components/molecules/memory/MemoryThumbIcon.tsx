import CommentIcon from '@/assets/icon/CommentIcon';
import FlowerIcon from '@/assets/icon/FlowerIcon';
import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  type: 'flower' | 'comment';
  amount: number;
}

const MemoryThumbIcon = ({ type, amount }: PropsType) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 2px;
      `}
    >
      {type === 'flower' ? (
        <FlowerIcon color={common.colors.gray[500]} size={14} />
      ) : (
        <CommentIcon color={common.colors.gray[500]} size={14} />
      )}
      <span
        css={css`
          font-size: 12px;
          color: ${common.colors.gray[500]};
        `}
      >
        {amount}
      </span>{' '}
    </div>
  );
};

export default MemoryThumbIcon;

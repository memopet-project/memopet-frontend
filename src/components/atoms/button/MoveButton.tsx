import ArrowLeftIcon from '@/assets/icon/ArrowLeftIcon';
import ArrowRightIcon from '@/assets/icon/ArrowRightIcon';
import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  type: 'before' | 'after';
  state: 'enabled' | 'disabled';
}

const MoveButton = ({ type, state = 'enabled' }: PropsType) => {
  return (
    <button
      css={css`
        width: 48px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: 1px solid ${common.colors.gray[700]};
        opacity: ${state === 'disabled' ? 0.5 : 1};
        cursor: ${state === 'enabled' ? 'pointer' : 'auto'};
        &:hover {
          background: ${state === 'enabled' ? '#1717170d' : 'none'};
        }
      `}
    >
      {type === 'before' ? (
        <ArrowRightIcon size={16} />
      ) : (
        <ArrowLeftIcon size={16} />
      )}
    </button>
  );
};

export default MoveButton;

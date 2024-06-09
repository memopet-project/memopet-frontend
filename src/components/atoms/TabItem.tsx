import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  state?: 'selected' | 'unselected';
  text: string;
  amount?: number;
}

const TabItem = ({ state = 'selected', text, amount }: PropsType) => {
  return (
    <button
      css={css`
        width: 160px;
        height: 36px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        box-shadow: ${state === 'selected'
          ? '0px 0px 3px 0px #1717171A'
          : 'none'};
        font-weight: 600;
        color: ${state === 'unselected' ? common.colors.gray[500] : 'inherit'};
        &:hover {
          background: ${state === 'unselected' ? '#1717170D' : 'none'};
        }
      `}
    >
      <span>{text}</span>
      <span>{amount}</span>
    </button>
  );
};

export default TabItem;

import CloseIcon from '@/assets/icon/CloseIcon';
import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  text: string;
}

const Keyword = ({ text }: PropsType) => {
  return (
    <button
      css={css`
        width: 79px;
        height: 32px;
        border-radius: 99px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        background: ${common.colors.gray[100]};
        &:hover {
          background: ${common.colors.gray[200]};
          & > span {
            color: ${common.colors.gray[700]};
          }
          & > svg path {
            stroke: ${common.colors.gray[700]};
          }
        }
      `}
    >
      <span
        css={css`
          font-weight: 600;
          font-size: 14px;
          color: ${common.colors.gray[500]};
        `}
      >
        {text}
      </span>
      <CloseIcon color={common.colors.gray[500]} size={16} />
    </button>
  );
};

export default Keyword;

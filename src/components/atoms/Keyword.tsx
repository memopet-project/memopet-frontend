import CloseIcon from '@/assets/icon/CloseIcon';
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
        background: var(--grey-100);
        &:hover {
          background: var(--grey-200);
          & > span {
            color: var(--grey-700);
          }
          & > svg path {
            stroke: var(--grey-700);
          }
        }
      `}
    >
      <span
        css={css`
          font-weight: 600;
          font-size: 14px;
          color: var(--grey-500);
        `}
      >
        {text}
      </span>
      <CloseIcon color={'var(--grey-500)'} size={16} />
    </button>
  );
};

export default Keyword;

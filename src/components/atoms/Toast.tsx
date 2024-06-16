import { css } from '@emotion/react';

interface IToastProps {
  text: string;
}

const Toast: React.FC<IToastProps> = ({ text }) => {
  return (
    <div
      css={css`
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: -0.5px;
        padding: 5.5px 12px;
        color: var(--grey-100);
        background: var(--grey-800);
        width: fit-content;
        border-radius: 99px;
      `}
    >
      {text}
    </div>
  );
};

export default Toast;

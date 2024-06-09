import CloseIcon from '@/assets/icon/CloseIcon';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
  onClose: () => void;
}

const Popup = ({ children, onClose }: PropsType) => {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.3);
      `}
      onClick={onClose}
    >
      <div
        css={css`
          max-height: 85%;
          border-radius: 16px;
          border: 1px solid var(--grey-700);
          padding: 20px;
          background-color: var(--grey-0);
          position: relative;
          box-shadow: 0px 4px 4px 0px #00000040;
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          css={css`
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 20px;
            right: 20px;
          `}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;

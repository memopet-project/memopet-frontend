import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const IconButton = ({ children }: IProps) => {
  return (
    <button
      css={css`
        min-width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </button>
  );
};

export default IconButton;

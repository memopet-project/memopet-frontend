import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

const IconButton = ({ children }: PropsType) => {
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

import { css } from '@emotion/react';

interface IProps {
  type: 'profile' | 'thumbnail' | 'text';
  size: number;
}

const Skeleton = ({ type, size }: IProps) => {
  return (
    <div
      css={css`
        background: #1717171a;
        width: ${type === 'text' ? '100%' : `${size}px`};
        height: ${size}px;
        border-radius: ${type === 'profile' ? '50%' : '4px'};
      `}
    ></div>
  );
};

export default Skeleton;

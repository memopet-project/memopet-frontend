import { css } from '@emotion/react';

interface IProps {
  state?: 'default' | 'empty';
  text: string;
}

const ResultItem = ({ state = 'default', text }: IProps) => {
  return (
    <div
      css={css`
        width: 360px;
        padding: 8px 12px;
        color: ${state === 'empty' ? 'var(--grey-400)' : 'inherit'};
        &:hover {
          background: var(--main-red-50);
        }
      `}
    >
      {state === 'empty' ? '결과 없음' : text}
    </div>
  );
};

export default ResultItem;

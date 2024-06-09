import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  state?: 'default' | 'empty';
  text: string;
}

const ResultItem = ({ state = 'default', text }: PropsType) => {
  return (
    <div
      css={css`
        width: 360px;
        padding: 8px 12px;
        color: ${state === 'empty' ? common.colors.gray[400] : 'inherit'};
        &:hover {
          background: ${common.colors.accent.red.container};
        }
      `}
    >
      {state === 'empty' ? '결과 없음' : text}
    </div>
  );
};

export default ResultItem;

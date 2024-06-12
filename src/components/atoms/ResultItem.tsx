import { css, useTheme } from '@emotion/react';

interface IProps {
  state?: 'default' | 'empty';
  text: string;
}

const ResultItem = ({ state = 'default', text }: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 360px;
        padding: 8px 12px;
        color: ${state === 'empty' ? theme.colors.grey[400] : 'inherit'};
        &:hover {
          background: ${state === 'empty' ? 'none' : theme.colors.primary[50]};
        }
      `}
    >
      {state === 'empty' ? '결과 없음' : text}
    </div>
  );
};

export default ResultItem;

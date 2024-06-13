import { css, useTheme } from '@emotion/react';

interface IProps {
  moreNum: number;
}

const ThumbMoreBadge = ({ moreNum }: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        border-radius: 999px;
        padding: 0 12px 1px;
        background: #00000066;
        font-weight: ${theme.fontWeights.semibold};
        font-size: 13px;
        color: ${theme.colors.grey[0]};
      `}
    >
      +{moreNum}
    </div>
  );
};

export default ThumbMoreBadge;

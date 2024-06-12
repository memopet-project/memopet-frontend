import { css, useTheme } from '@emotion/react';

interface IProps {
  year: number;
  state?: 'enabled' | 'selected' | 'disabled';
}

const YearItem = ({ year, state = 'enabled' }: IProps) => {
  const theme = useTheme();
  return (
    <span
      css={css`
        font-weight: ${theme.fontWeights.bold};
        font-size: ${theme.fontSizes.xl};
        color: ${state === 'selected'
          ? theme.colors.primary[500]
          : state === 'disabled'
            ? theme.colors.grey[400]
            : 'inherit'};
        &:hover {
          color: ${theme.colors.primary[500]};
        }
        @media screen and (max-width: 743px) {
          font-weight: ${theme.fontWeights.semibold};
          font-size: ${theme.fontSizes.lg};
        }
      `}
    >
      {year}
    </span>
  );
};

export default YearItem;

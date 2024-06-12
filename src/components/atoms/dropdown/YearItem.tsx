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
        font-weight: 700;
        font-size: 20px;
        color: ${state === 'selected'
          ? theme.colors.primary[500]
          : state === 'disabled'
            ? theme.colors.grey[400]
            : 'inherit'};
        &:hover {
          color: ${theme.colors.primary[500]};
        }
        @media screen and (max-width: 743px) {
          font-weight: 600;
          font-size: 18px;
        }
      `}
    >
      {year}
    </span>
  );
};

export default YearItem;

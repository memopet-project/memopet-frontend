import { css } from '@emotion/react';

interface PropsType {
  year: number;
  state?: 'enabled' | 'selected' | 'disabled';
}

const YearItem = ({ year, state = 'enabled' }: PropsType) => {
  return (
    <span
      css={css`
        font-weight: 700;
        font-size: 20px;
        color: ${state === 'selected'
          ? 'var(--main-red-500)'
          : state === 'disabled'
            ? 'var(--grey-400)'
            : 'inherit'};
        &:hover {
          color: var(--main-red-500);
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

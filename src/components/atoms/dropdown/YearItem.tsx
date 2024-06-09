import common from '@/styles/common';
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
          ? common.colors.accent.red.text
          : state === 'disabled'
            ? common.colors.gray[400]
            : 'inherit'};
        &:hover {
          color: ${common.colors.accent.red.text};
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

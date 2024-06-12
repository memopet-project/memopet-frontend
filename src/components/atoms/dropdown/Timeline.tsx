import ArrowDropdownIcon from '@/assets/icon/ArrowDropdownIcon';
import ArrowDropdownUpIcon from '@/assets/icon/ArrowDropdownUpIcon';
import { css, useTheme } from '@emotion/react';
import YearItem from './YearItem';

interface IProps {
  color?: 'white' | 'ivory';
  open: boolean;
  selectedYear: number;
}

const YEAR_LIST = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

const Timeline = ({ color = 'white', open, selectedYear }: IProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 120px;
      `}
    >
      <button
        css={css`
          width: 100%;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <span
          css={css`
            font-weight: ${theme.fontWeights.bold};
            font-size: ${theme.fontSizes.xl};
          `}
        >
          {selectedYear}
        </span>
        {open ? <ArrowDropdownUpIcon /> : <ArrowDropdownIcon />}
      </button>
      {open ? (
        <ul
          css={css`
            padding: 16px 12px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background-color: ${color === 'white' ? '#FFFFFFF2' : '#F7F5F1F2'};
            border: ${color === 'white'
              ? 'none'
              : `1px solid ${theme.colors.grey[700]}`};
          `}
        >
          {YEAR_LIST.map((v) => (
            <li key={v}>
              <button>
                <YearItem
                  year={v}
                  state={v === selectedYear ? 'selected' : 'enabled'}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Timeline;

import ArrowDropdownIcon from '@/assets/icon/ArrowDropdownIcon';
import ArrowDropdownUpIcon from '@/assets/icon/ArrowDropdownUpIcon';
import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  color?: 'white' | 'ivory';
  open: boolean;
  selectedYear: number;
}

const YEAR_LIST = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

const Timeline = ({ color = 'white', open, selectedYear }: PropsType) => {
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
            font-weight: 700;
            font-size: 20px;
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
              : `1px solid ${common.colors.gray[700]}`};
          `}
        >
          {YEAR_LIST.map((v) => (
            <li
              key={v}
              css={css`
                display: flex;
              `}
            >
              <button
                css={css`
                  font-weight: 700;
                  font-size: 20px;
                  color: ${v === selectedYear
                    ? common.colors.accent.red.text
                    : 'inherit'};
                  &:hover {
                    color: ${common.colors.accent.red.text};
                  }
                `}
              >
                {v}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Timeline;

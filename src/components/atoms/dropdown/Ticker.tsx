import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  month: number;
  state?: 'enabled' | 'disabled' | 'selected' | 'withYear';
  year?: number;
}

const Ticker = ({ month, state = 'enabled', year }: PropsType) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 4px;
      `}
    >
      {state === 'selected' ? (
        <span
          css={css`
            width: 4px;
            height: 4px;
            background: ${common.colors.accent.red.text};
            border-radius: 50%;
          `}
        ></span>
      ) : null}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: end;
        `}
      >
        <span
          css={css`
            font-weight: 600;
            color: ${state === 'disabled'
              ? common.colors.gray[400]
              : 'inherit'};
          `}
        >
          {month}월
        </span>
        {state === 'withYear' ? (
          <span
            css={css`
              font-size: 12px;
              color: ${common.colors.accent.red.text};
            `}
          >
            {year}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Ticker;

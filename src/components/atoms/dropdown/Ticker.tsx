import common from '@/styles/common';
import { css } from '@emotion/react';

interface PropsType {
  month: number;
  state?: 'enabled' | 'disabled' | 'selected' | 'withYear';
  year?: number;
  type?: 'vertical' | 'horizontal';
}

const Ticker = ({
  month,
  state = 'enabled',
  year,
  type = 'vertical',
}: PropsType) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 4px;
      `}
    >
      {type === 'vertical' && state === 'selected' ? (
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
          flex-direction: ${type === 'horizontal'
            ? 'column-reverse'
            : 'column'};
          align-items: ${type === 'horizontal' ? 'center' : 'end'};
          gap: ${type === 'horizontal' ? '16px' : 0};
        `}
      >
        <span
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            color: ${type === 'horizontal' && state === 'selected'
              ? common.colors.gray[0]
              : state === 'disabled'
                ? common.colors.gray[400]
                : 'inherit'};
            width: ${type === 'horizontal' && state === 'selected'
              ? '40px'
              : 'auto'};
            height: ${type === 'horizontal' && state === 'selected'
              ? '40px'
              : 'auto'};
            background: ${type === 'horizontal' && state === 'selected'
              ? common.colors.accent.red.text
              : 'none'};
            border-radius: 50%;
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

import { SerializedStyles, css } from '@emotion/react';

type Types = 'prev' | 'next';

interface IProfileMoveButtonProps {
  type: Types;
  disabled?: boolean;
}

const styles: { [key in Types]: SerializedStyles } = {
  prev: css`
    color: var(--grey-700);
    &:hover:enabled {
      background: #1717170d;
    }
  `,
  next: css`
    flex-direction: row-reverse;
    color: var(--main-red-500);
    &:hover:enabled {
      background: #f151391a;
    }
  `,
};

export default function ProfileMoveButton({
  type = 'next',
  disabled = false,
}: IProfileMoveButtonProps) {
  const isNext = Boolean(type === 'next');

  return (
    <button
      disabled={disabled}
      css={css(
        css`
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 999px;
          background: transparent;
          outline: none;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.25px;
          line-height: 1rem;
          &:disabled {
            color: var(--grey-400);
          }
        `,
        styles[type],
      )}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        css={css`
          transform: ${isNext ? 'rotate(180deg)' : 'rotate(0)'};
        `}
      >
        <path
          d='M21 12H3M3 12L10 5M3 12L10 19'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <span>{isNext ? '다음' : '이전'}</span>
    </button>
  );
}

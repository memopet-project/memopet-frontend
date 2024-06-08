import { css } from '@emotion/react';

export default function CommentArrowButton() {
  return (
    <button
      type='button'
      css={css`
        width: 48px;
        height: 48px;
        background: var(--grey-200);
        border-radius: 50%;
        border: 1px solid var(--grey-700);
        box-shadow: 0px 3px 0px 0px #0000001a;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover:enabled {
          background: var(--grey-300);
          box-shadow: 0px 2px 0px 0px var(--grey-900);
        }
      `}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 8L14 12L10 16'
          stroke='#171717'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}

import { css } from '@emotion/react';
import type { Dispatch, SetStateAction } from 'react';

interface IRadioButtonProps {
  name: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

export default function RadioButton({
  name,
  selected,
  setSelected,
  disabled = false,
}: IRadioButtonProps) {
  function select() {
    setSelected((prev) => !prev);
  }

  return (
    <label>
      <input
        type='radio'
        name={name}
        css={css`
          display: none;
        `}
        onChange={select}
        disabled={disabled}
      />
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke={
          disabled
            ? 'var(--grey-300)'
            : selected
              ? 'var(--main-red-500)'
              : 'var(--grey-300)'
        }
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='12'
          cy='12'
          r='11'
          fill={
            disabled
              ? 'var(--grey-300)'
              : selected
                ? 'var(--main-red-500)'
                : 'transparent'
          }
        />
        <path
          d='M7 12L10.3333 15L17 9'
          stroke={
            disabled
              ? 'var(--grey-0)'
              : selected
                ? 'var(--grey-0)'
                : 'var(--grey-300)'
          }
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </label>
  );
}

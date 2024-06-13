import { css } from '@emotion/react';
import { useState } from 'react';

interface IProfileMoreButtonProps {
  color: 'default' | 'white';
}

const ProfileMoreButton: React.FC<IProfileMoreButtonProps> = ({ color }) => {
  const isDefault = Boolean(color === 'default');
  const [toggle, setToggle] = useState(false);

  function click() {
    setToggle((prev) => !prev);
  }

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <svg
        onClick={click}
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill={isDefault ? 'var(--grey-400)' : 'var(--grey-0)'}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14 21.25C14.6904 21.25 15.25 20.6904 15.25 20C15.25 19.3096 14.6904 18.75 14 18.75C13.3096 18.75 12.75 19.3096 12.75 20C12.75 20.6904 13.3096 21.25 14 21.25Z'
          fill='inherit'
        />
        <path
          d='M20 21.25C20.6904 21.25 21.25 20.6904 21.25 20C21.25 19.3096 20.6904 18.75 20 18.75C19.3096 18.75 18.75 19.3096 18.75 20C18.75 20.6904 19.3096 21.25 20 21.25Z'
          fill='inherit'
        />
        <path
          d='M26 21.25C26.6904 21.25 27.25 20.6904 27.25 20C27.25 19.3096 26.6904 18.75 26 18.75C25.3096 18.75 24.75 19.3096 24.75 20C24.75 20.6904 25.3096 21.25 26 21.25Z'
          fill='inherit'
        />
      </svg>
      {toggle && (
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 2px;
            background: var(--grey-0);
            padding: 6px 12px;
            border: 1px solid var(--grey-500);
            border-radius: 8px;
            width: fit-content;
            position: absolute;
            top: 40px;
            left: 0;
          `}
        >
          <span
            css={css`
              width: 40px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              font-weight: 500;
              line-height: 16.71px;
              letter-spacing: -0.5px;
              color: var(--grey-400);
            `}
          >
            차단
          </span>
          |
          <span
            css={css`
              width: 40px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              font-weight: 500;
              line-height: 16.71px;
              letter-spacing: -0.5px;
              color: var(--danger);
            `}
          >
            신고
          </span>
          |
          <span
            css={css`
              width: 40px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              font-weight: 500;
              line-height: 16.71px;
              letter-spacing: -0.5px;
              color: var(--grey-700);
            `}
          >
            공유
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileMoreButton;

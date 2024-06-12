import { css } from '@emotion/react';
import { useState } from 'react';

interface ISearchButtonProps {
  color: 'default' | 'white';
}

const SearchButton: React.FC<ISearchButtonProps> = ({ color = 'default' }) => {
  const isDefault = Boolean(color === 'default');
  const [active, setActive] = useState(false);

  function click() {
    setActive((prev) => !prev);
  }
  return (
    <>
      {!active ? (
        <div
          onClick={click}
          css={css`
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              border: ${isDefault
                ? '1px solid rgba(64, 64, 64, 0)'
                : '1px solid var(--grey-0)'};
              background: rgba(23, 23, 23, 0.05);
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
              d='M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z'
              stroke={isDefault ? 'var(--grey-700)' : 'var(--grey-0)'}
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      ) : (
        <div
          css={css`
            position: relative;
          `}
        >
          <input
            type='text'
            placeholder='사용자 또는 키워드를 검색해 보세요'
            css={css`
              height: 40px;
              font-size: 1rem;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: -0.5px;
              padding: 8px 16px 8px 48px;
              width: 300px;
              border-radius: 99px;
              border: ${isDefault
                ? '1px solid var(--grey-700)'
                : '1px solid var(--grey-0)'};
              color: ${isDefault ? 'var(--grey-700)' : 'var(--grey-0)'};
              background: ${isDefault
                ? 'var(--grey-0)'
                : 'rgba(23, 23, 23, 0.5)'};
              &:focus {
                outline: none;
              }
              &::placeholder {
                color: var(--grey-400);
              }
            `}
          />
          <svg
            onClick={click}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            css={css`
              position: absolute;
              top: 8px;
              left: 16px;
            `}
          >
            <path
              d='M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z'
              stroke={isDefault ? 'var(--grey-700)' : 'var(--grey-0)'}
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default SearchButton;

import { css } from '@emotion/react';
import Image from 'next/image';
import { type MouseEvent, type ChangeEvent, useEffect, useState } from 'react';
import RoundButton from '../buttons/RoundButton';
import { IInputItemProps } from '@/types/common';

const InputWithButtonItem: React.FC<IInputItemProps> = ({
  value,
  setValue,
  validate,
  errorMessage,
  disabled = false,
  placeholder,
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onFocus();
  };
  const preventEventHandler = (e: MouseEvent<HTMLButtonElement>) =>
    e.preventDefault();

  return (
    <>
      <div
        css={css`
          position: relative;
          width: 100%;
        `}
      >
        <button
          onMouseDown={preventEventHandler}
          type='button'
          css={css`
            position: absolute;
            top: 14px;
            left: 12px;
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
              d='M10.4986 7.49586L12.7507 5.24378C14.4091 3.58541 17.0978 3.5854 18.7562 5.24378C20.4146 6.90216 20.4146 9.59093 18.7562 11.2493L16.5041 13.5014M6.5 11.5L5.24378 12.7507C3.58541 14.4091 3.5854 17.0978 5.24378 18.7562C6.90216 20.4146 9.59093 20.4146 11.2493 18.7562L12.5 17.5M9.5 14.5L14.5 9.5'
              stroke={value ? 'var(--grey-900)' : 'var(--grey-400)'}
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <input
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          type='text'
          css={css`
            width: 100%;
            height: 52px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.5px;
            outline: none;
            padding: 14px 12px;
            padding-left: 44px;
            padding-right: ${focus && Boolean(value) ? '108px' : '76px'};
            border: 1px solid
              ${!validate && errorMessage ? 'var(--main-red-500)' : 'var(--grey-700)'};
            border-radius: 6px;
            &:focus {
              border: 1px solid var(--main-red-500);
            }
            &::placeholder {
              color: var(--grey-400);
            }
            &:disabled {
              opacity: 50%;
              background: var(--grey-0);
            }
          `}
        />
        {Boolean(value) && focus && (
          <button
            type='button'
            onMouseDown={preventEventHandler}
            onClick={() => {
              setValue('');
              onBlur();
            }}
            css={css`
              position: absolute;
              top: 14px;
              right: 76px;
            `}
          >
            <Image
              src='/button-delete.svg'
              width={24}
              height={24}
              alt='delete-button'
            />
          </button>
        )}
        <div
          css={css`
            position: absolute;
            right: 12px;
            top: 10px;
          `}
        >
          <RoundButton
            disabled={Boolean(!value) || disabled}
            type='filled'
            onClick={() => {
              // TODO: 클립보드 복사인지 확인
            }}
          >
            복사
          </RoundButton>
        </div>
      </div>
      {!validate && errorMessage && (
        <div
          css={css`
            margin-top: 4px;
            display: flex;
            gap: 4px;
            align-items: center;
            color: var(--danger);
            font-size: 13px;
            font-weight: 400;
            line-height: 19.5px;
            letter-spacing: -0.25px;
          `}
        >
          <Image
            src='/icon-error.svg'
            width={16}
            height={16}
            alt='icon-error'
          />
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default InputWithButtonItem;

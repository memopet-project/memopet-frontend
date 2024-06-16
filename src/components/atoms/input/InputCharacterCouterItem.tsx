import { IInputItemProps } from '@/types/common';
import { css } from '@emotion/react';
import Image from 'next/image';
import { type ChangeEvent, useEffect, useState } from 'react';

const InputCharacterCounterItem: React.FC<IInputItemProps> = ({
  value,
  setValue,
  validate,
  erorrMessage,
  disabled = false,
  placeholder,
}) => {
  const [count, setCount] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value.length);
    setValue(e.target.value);
  };

  useEffect(() => {
    validate();
  }, [value, validate]);

  return (
    <>
      <div
        css={css`
          position: relative;
          width: 100%;
        `}
      >
        <input
          disabled={disabled}
          placeholder={placeholder}
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
            border: 1px solid
              ${erorrMessage ? 'var(--main-red-500)' : 'var(--grey-700)'};
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
      </div>

      <div
        css={css`
          margin-top: 4px;
          display: flex;
          justify-content: ${erorrMessage ? 'space-between' : 'flex-end'};
          align-items: center;
        `}
      >
        {erorrMessage && (
          <span
            css={css`
              display: flex;
              gap: 4px;
              align-items: center;
              color: var(--danger);
              font-size: 13px;
              font-weight: 400;
              line-height: 19.5px;
              letter-spacing: -0.25px;
              white-space: nowrap;
              overflow: hidden;
            `}
          >
            <Image
              src='/icon-error.svg'
              width={16}
              height={16}
              alt='icon-error'
            />
            {erorrMessage}
          </span>
        )}
        <span
          css={css`
            color: var(--danger);
            font-size: 13px;
            font-weight: 400;
            line-height: 19.5px;
            letter-spacing: -0.25px;
          `}
        >
          {count}/90
        </span>
      </div>
    </>
  );
};

export default InputCharacterCounterItem;

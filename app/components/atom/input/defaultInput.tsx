'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TInputState } from '@/types/common';

type Props = {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  state?: TInputState['state']
  disabled?: boolean
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

const DefaultInput = ({
                        placeholder,
                        type,
                        value,
                        name,
                        state = 'default',
                        disabled = false,
                        onChange = (e) => {
                        },
                        onBlur = () => {
                        },
                      }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const containerClass = (): string => {
    let commonClass = 'h-[52px] w-full relative flex border rounded-[6px] overflow-hidden px-3 py-[14px] gap-[10px]';

    // 0 = default, 1 = focused, 2 = error, 3 = disabled
    let inputState: number = 0;
    if (isFocused) inputState = 1;
    if (state === 'error') inputState = 2;
    if (disabled) inputState = 3;

    switch (inputState) {
      case 0:
        return `${commonClass} border-[#525252]`;
      case 1:
        return `${commonClass} border-[#F15139]`;
      case 2:
        return `${commonClass} border-[#E43333]`;
      case 3:
        return `${commonClass} border-[#525252] opacity-50`;
      default:
        return `${commonClass} border-[#525252]`;
    }
  };

  return (
    <div className={containerClass()}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        onFocus={() => setIsFocused(true)}
        disabled={disabled}
        className="w-full h-full outline-none"
      />
      {(value.length > 0 && !disabled) && (
        <button
          onClick={() => {
            onChange('');
            setIsFocused(false);
          }}
        >
          <Image
            src="/svg/close.svg"
            alt="close"
            width={24}
            height={24}
          />
        </button>
      )}
    </div>
  );
};

export default DefaultInput;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  isError?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

const DefaultInput = ({
                        placeholder,
                        type,
                        value,
                        name,
                        isError = false,
                        onChange = (e) => {
                        },
                        onBlur = () => {
                        },
                      }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const containerClass = (): string => {
    let commonClass = 'h-[52px] w-full relative flex border rounded-[6px] overflow-hidden px-3 py-[14px] gap-[10px]';

    // 0 = default, 1 = focused, 2 = error
    let state: number = 0;
    if (isFocused) state = 1;
    if (isError) state = 2;

    switch (state) {
      case 0:
        return `${commonClass} border-[#525252]`;
      case 1:
        return `${commonClass} border-[#F15139]`;
      case 2:
        return `${commonClass} border-[#E43333]`;
      default:
        return `${commonClass} border-[#525252]`;
    }
  };

  return (
    <div className={containerClass()}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        onFocus={() => setIsFocused(true)}
        className="w-full h-full outline-none"
      />
      {value.length > 0 && (
        <button onClick={() => {
          onChange('');
          setIsFocused(false);
        }}>
          <Image
            src="/images/close.svg"
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

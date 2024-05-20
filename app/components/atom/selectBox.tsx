'use client';

import React, { useMemo, useRef, useState } from 'react';
import SearchSVG from '@/public/svg/search.svg';
import Image from 'next/image';

type Props = {
  id: string;
  value: string;
  placeholder: string;
  options: string[];
  onSelect: (value: string) => void;
  canFocus?: () => boolean;
}

const SelectBox = ({ id, value, placeholder, options, onSelect, canFocus = () => true }: Props) => {
  const [searchValue, setSearchValue] = useState<string>(value); // 검색어
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  const containerClass = (): string => {
    let commonClass = 'h-[52px] w-full relative flex border rounded-[6px] overflow-hidden px-3 py-[14px] gap-[10px]';

    // 0 = default, 1 = focused
    let inputState: number = 0;
    if (isFocused) inputState = 1;

    switch (inputState) {
      case 0:
        return `${commonClass} border-[#525252]`;
      case 1:
        return `${commonClass} border-[#F15139]`;
      default:
        return `${commonClass} border-[#525252]`;
    }
  };

  const optionClass = (option: string): string => {
    let commonClass = 'px-3 py-2 cursor-pointer hover:bg-redBlur';

    if (option === '일치하는 결과가 없습니다.') return `${commonClass} text-gray04 pointer-events-none`;

    return commonClass;
  };

  const charClass = (char: string, option: string): string => {
    if (option === '일치하는 결과가 없습니다.') return 'text-gray04';

    if (searchValue.length === 0) return 'text-inherit';

    if (searchValue.includes(char) && option.includes(searchValue)) return 'text-red-500';

    return 'text-inherit';
  };

  const sortedOptions = useMemo(() => {
    if (searchValue.length === 0) return options;

    // 검색어가 포함된 옵션만 필터링
    const filteredOptions = options.filter((option) => option.includes(searchValue));

    if (filteredOptions.length === 0) return ['일치하는 결과가 없습니다.'];

    // 검색어가 포함된 옵션을 앞으로
    return filteredOptions.sort((a, b) => a.indexOf(searchValue) - b.indexOf(searchValue));

  }, [options, searchValue]);

  const handleFocus = () => {
    if (!canFocus()) {
      inputRef.current?.blur();
      return;
    }
    setIsFocused(true);
    if (searchValue.length > 0) setIsOpenOptions(true);
  };


  return (
    <>
      <div className="relative">
        <label htmlFor={id} className={containerClass()}>
          <input
            type="text"
            className="w-full h-full outline-none"
            value={searchValue}
            placeholder={placeholder}
            id={id}
            ref={inputRef}
            onChange={(e) => {
              setSearchValue(e.target.value);
              if (e.target.value.length > 0) setIsOpenOptions(true);
              else setIsOpenOptions(false);
            }}
            onFocus={handleFocus}
            onBlur={() => setIsFocused(false)}
          />
          {(searchValue.length > 0 && isOpenOptions) && (
            <button
              onClick={() => {
                setSearchValue('');
                setIsFocused(false);
                setIsOpenOptions(false);
              }}
              tabIndex={-1}
            >
              <Image
                src="/svg/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </button>
          )}
          <SearchSVG />
        </label>
        {(isOpenOptions && options.length > 0) && (
          <div className="absolute top-[56px] w-full bg-white border border-[#525252] rounded-[6px] overflow-hidden">
            <ul className="flex flex-col max-h-40 overflow-auto">
              {sortedOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    onSelect(option);
                    setSearchValue(option);
                    setIsOpenOptions(false);
                  }}
                  className={optionClass(option)}
                >
                  {option.replace(' ', '').split('').map((char, index) => (
                    <span
                      key={index}
                      className={charClass(char, option)}
                    >
                    {char}
                  </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectBox;

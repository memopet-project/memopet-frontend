'use client';

import React, { useCallback, useState } from 'react';
import { IInputItemProps } from '@/types/common';
import InputSearchItem from '@/components/atoms/input/InputSearchItem';
import { css, useTheme } from '@emotion/react';
import { useDebounce } from '@/hooks/useDebounce';

interface Props extends IInputItemProps {
  searchResults: string[];
}

const SearchResultsList = (
  {
    searchResults,
    value,
    setValue,
    placeholder,
  }: Props) => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState<string>(value);

  const { debouncedValue } = useDebounce({ value: searchText, delay: 500 });

  const listOpen = useCallback(() => {
    return value !== debouncedValue && debouncedValue.length > 0;
  }, [value, debouncedValue]);

  return (
    <div css={css`
      position: relative;
    `}>
      <InputSearchItem
        value={searchText}
        setValue={setSearchText}
        placeholder={placeholder}
        errorMessage={''}
        validate={true}
      />
      {listOpen() && (
        <ul css={css`
          padding: 8px 0;
          background: ${theme.colors.grey[0]};
          position: absolute;
          z-index: 1;
          top: calc(100% + 4px);
          width: 100%;
          border: 1px solid rgba(82, 82, 82, 1);
          border-radius: 6px;
          display: flex;
          flex-direction: column;
        `}>
          {searchResults.map((result, index) => (
            <li
              key={index}
              css={css`
                width: 100%;
                padding: 8px 12px 8px 12px;
                line-height: 24px;

                &:hover {
                  background: ${theme.colors.primary[50]};
                }
              `}
              onClick={() => {
                setValue(result);
                setSearchText(result);
              }}
            >
              {result.split('').map((char, index) => {
                  if (char.toLowerCase() === searchText[index]?.toLowerCase()) {
                    return <span key={index} style={{ color: theme.colors.primary[500] }}>{char}</span>;
                  }
                  return <span key={index}>{char}</span>;
                },
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResultsList;

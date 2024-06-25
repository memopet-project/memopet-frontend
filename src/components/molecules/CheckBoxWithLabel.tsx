import React from 'react';
import { css } from '@emotion/react';
import ThemedText from '@/components/atoms/ThemedText';
import CheckButton from '@/components/atoms/buttons/CheckButton';

type Props = {
  name: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
}

export default function CheckBoxWithLabel(
  {
    name,
    value,
    onChange,
    disabled,
    label,
  }: Props) {
  return (
    <label
      css={css`
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        width: fit-content;
      `}
      htmlFor={`checkbox-${name}`}
    >
      <input
        name={name}
        type="checkbox"
        css={css`
          display: none;
        `}
        onChange={onChange}
        disabled={disabled}
        checked={value}
        id={`checkbox-${name}`}
      />
      <CheckButton
        checked={value}
      />
      <ThemedText>{label}</ThemedText>
    </label>
  );
}
import React from 'react';
import DefaultInput from '@/app/components/atom/input/defaultInput';
import { TInputState } from '@/types/common';

type Props = {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  state?: TInputState['state'];
  description?: string | React.ReactNode;
  disabled?: boolean
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

const DefaultInputField = ({
                             label, placeholder, state, description, onBlur, value, name, onChange = () => {
  }, disabled, type,
                           }: Props) => {
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <DefaultInput
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        state={state}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      {state && (
        <span className="">{description}</span>
      )}
    </fieldset>
  );
};

export default DefaultInputField;

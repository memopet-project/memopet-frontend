import React from 'react';
import CheckBox from '@/app/components/atom/checkBox';

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledCheckBox = ({ id, label, checked, onChange }: Props) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-1"
    >
      <CheckBox
        checked={checked}
        id={id}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default LabeledCheckBox;

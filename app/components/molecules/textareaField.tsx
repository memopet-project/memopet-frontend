import React from 'react';
import Textarea from '@/app/components/atom/textarea';

type Props = {
  placeholder: string;
  value: string;
  name: string;
  id: string;
  max: number;
  onChange: (value: string) => void;
}

const TextareaField = ({ placeholder, value, name, id, max, onChange }: Props) => {
  return (
    <div className="flex flex-col relative gap-1">
      <label htmlFor={id}>{name}</label>
      <Textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        max={max}
      />
    </div>
  );
};

export default TextareaField;

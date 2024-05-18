'use client';

import React from 'react';
import CheckSVG from '@/public/svg/check.svg';

type Props = {
  checked: boolean;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ checked, id, onChange }: Props) => {
  return (
    <div className="flex items-center justify-center w-6 h-6">
      {checked && <CheckSVG fill={'#F15139'} stroke={'#Fff'} />}
      {!checked && <CheckSVG fill={'none'} stroke={'#D4D4D4'} />}
      <input
        type="checkbox"
        className={'hidden'}
        id={id}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckBox;

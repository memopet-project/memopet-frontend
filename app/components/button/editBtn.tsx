import React, { useMemo } from 'react';
import Edit from '@/public/svg/edit.svg';

interface buttonType {
  text?: string;
  onClick?: () => void;
  className: string;
  outline?: boolean;
}

const EditBtn = ({ text, onClick, className, outline = false }: buttonType) => {
  const buttonColor: string = useMemo(() => {
    return outline
      ? 'border border-gray06 text-[#525252]'
      : 'bg-gray06 text-gray06'; //미정
  }, [outline]);
  return (
    <button
      className={`flex font-semibold text-base text-white bg-white px-5 py-2 flex-nowrap whitespace-nowrap rounded-full items-center justify-between ${className} ${buttonColor}`}
      onClick={onClick}
    >
      <Edit className="w-6 h-6 text-[#525252] mr-2" /> {text}
    </button>
  );
};

export default EditBtn;

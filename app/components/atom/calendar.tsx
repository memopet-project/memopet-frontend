'use client';

import React from 'react';

type Props = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  onFocus: () => void;
  disabled?: boolean;
  error?: boolean;
}

const Calendar = ({ id, error, value, onFocus, onBlur, placeholder, onChange, disabled }: Props) => {
  const [focused, setFocused] = React.useState<boolean>(false);

  const containerClass = (): string => {
    let commonClass = 'h-[52px] md:w-full relative flex outline-none border rounded-[6px] overflow-hidden md:px-3 px-4 py-[14px] gap-[10px] focus:border-[#F15139]';

    // 0 = default, 1 = focused, 2 = error, 3 = disabled
    let inputState: number = 0;
    if (focused) inputState = 1;
    if (error) inputState = 2;
    if (disabled) inputState = 3;

    switch (inputState) {
      case 0:
        return `${commonClass} border-[#525252]`;
      case 1:
        return `${commonClass} border-[#F15139]`;
      case 2:
        return `${commonClass} border-[#E43333]`;
      case 3:
        return `${commonClass} border-[#525252] opacity-50 pointer-events-none`;
      default:
        return `${commonClass} border-[#525252]`;
    }
  };

  return (
    <input
      type="date"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      onFocus={onFocus}
      className={containerClass()}
    />
    // <div className={containerClass()}>
    //   <input
    //     type="text"
    //     id={id}
    //     value={value}
    //     placeholder={placeholder}
    //     onChange={(e) => onChange(e.target.value)}
    //     onBlur={() => {
    //       onBlur();
    //       setFocused(false);
    //     }}
    //     onFocus={() => {
    //       onFocus();
    //       setFocused(true);
    //     }}
    //     disabled={disabled}
    //     className="w-full h-full outline-none"
    //   />
    //   <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2">
    //     <CalendarSVG />
    //   </button>
    // </div>
  );
};

export default Calendar;

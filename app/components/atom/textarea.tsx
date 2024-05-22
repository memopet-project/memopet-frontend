'use client';

import React, { useRef, useState } from 'react';

type Props = {
  placeholder: string;
  value: string;
  name: string;
  id: string;
  max: number;
  onChange: (value: string) => void;
}

const Textarea = ({
                    placeholder,
                    value,
                    name,
                    id,
                    max,
                    onChange,
                  }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
    if (textareaRef.current === null) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <>
      <div className="relative">
        <textarea
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          ref={textareaRef}
          maxLength={max}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={1}
          className="min-h-[52px] w-full relative flex border border-[#525252] rounded-[6px] overflow-hidden px-3 py-[14px] gap-[10px] outline-none resize-none focus:border-[#F15139]"
        />
        {isFocused && (
          <span className="text-[#F15139] text-sm right-0 mt-1 absolute top-full">
          {value.length}/{max}
        </span>
        )}
      </div>
    </>
  );
};

export default Textarea;

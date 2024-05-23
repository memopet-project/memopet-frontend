'use client';

import React, { useMemo } from 'react';
import { TTagColor } from '@/types/petProfile';
import { tagColors } from '@/app/constants/common';
import TooltipPicker from '@/app/components/atom/tooltipPicker';
import CheckSVG from '@/public/svg/check_default.svg';

type Props = {
  placeholder: string;
  value: string;
  name: string;
  onChange: (value: string) => void;
}

const TagInput = () => {
  const [color, setColor] = React.useState<string>('pink');
  const [palletOpen, setPalletOpen] = React.useState<boolean>(false);
  const containerStyle = useMemo(() => {
    const style = 'rounded-full border border-gray09 px-3 py-[6px] w-fit flex gap-[6px] items-center';
    const currentColor = tagColors.find((tagColor) => tagColor.name === color) || tagColors[0];

    return `${style} ${currentColor.className}`;
  }, [color]);

  const colorPickerClass = (str: string): string => {
    const style = 'rounded-full border-white w-[18px] h-[18px] relative';
    const selected = str === color ? 'border' : 'border-0';

    return `${style} bg-${str} ${selected}`;
  };

  return (
    <div className={containerStyle}>
      <div className="relative">
        <button
          className="rounded-full border-2 border-white w-[18px] h-[18px] bg-inherit"
          onClick={() => setPalletOpen(!palletOpen)}
        />
        {palletOpen && (
          <TooltipPicker
            direction={'top'}
            directionPosition={'center'}
          >
            <ul className="flex p-3 rounded-md gap-[6px]">
              {
                tagColors.map((tagColor: TTagColor) => (
                  <li key={tagColor.name} className="flex items-center">
                    <button
                      className={colorPickerClass(tagColor.name)}
                      onClick={() => setColor(tagColor.name)}
                    >
                      {tagColor.name === color && (
                        <CheckSVG
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                        />
                      )}
                    </button>
                  </li>
                ))
              }
            </ul>
          </TooltipPicker>
        )}
      </div>
      <input
        type="text"
        placeholder="태그를 입력하세요"
        className="w-fit bg-transparent placeholder:text-[#17171780] focus:outline-none"
      />
    </div>
  );
};

export default TagInput;

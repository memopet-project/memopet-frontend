import React from 'react';

type Props = {
  direction: 'top' | 'bottom' | 'left' | 'right';
  directionPosition: 'start' | 'center' | 'end';
  children: React.ReactNode;
}

const TooltipPicker = ({ direction, children }: Props) => {

  const positionClass = {
    top: 'bottom-full transform translate-y-1/2',
    bottom: 'top-full transform -translate-y-1/2',
    left: 'right-full transform translate-x-1/2',
    right: 'left-full transform -translate-x-1/2',
  };

  const triangleClass = `absolute w-[12px] h-[12px] rotate-45 bg-gray07 ${positionClass[direction]}`;

  return (
    <div className="absolute top-full -translate-x-1/2">
      <div className="relative bg-gray07 rounded-[8px] flex items-center justify-center">
        <div className={triangleClass} />
        <div className="flex">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TooltipPicker;

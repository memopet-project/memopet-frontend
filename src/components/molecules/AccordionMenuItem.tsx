import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { Nullable } from '@/types/global';
import RadioButton from '@/components/atoms/buttons/RadioButton';

export type DataType = {
  id: number;
  desc: string;
  title: string;
  [key: string]: any;
};

interface IAccordionMenuItemProps {
  name: string;
  data: DataType;
  selected: Nullable<number>;
  setSelected: Dispatch<SetStateAction<Nullable<number>>>;
}

export default function AccordionMenuItem({
  name,
  data,
  selected,
  setSelected,
}: IAccordionMenuItemProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function select() {
    setSelected(data.id);
  }

  useEffect(() => {
    setIsSelected(Boolean(data.id === selected));
  }, [data.id, selected]);

  return (
    <div
      css={css`
        padding: 20px;
        &:not(:first-of-type) {
          padding-top: 0;
        }
        font-weight: 400;
        letter-spacing: -0.25px;
      `}
    >
      <div
        onClick={select}
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            font-size: 1rem;
            line-height: 24px;
            color: var(--grey-900);
          `}
        >
          <RadioButton
            name={name}
            selected={isSelected}
            setSelected={setIsSelected}
          />

          <span>{data.title}</span>
        </div>
        <Image
          src='/arrow-dropdown.svg'
          width={24}
          height={24}
          alt='arrow'
          css={css`
            transform: ${isSelected ? 'rotateX(180deg)' : 'rotateX(0)'};
          `}
        />
      </div>
      {isSelected && (
        <div
          css={css`
            @keyframes slideout {
              from {
                transform: scaleY(0%);
              }
              to {
                transform: scaleY(100%);
              }
            }
            animation: slideout 0.3s;
            transform-origin: top center;
            background: var(--grey-100);
            margin-top: 8px;
            padding: 12px;
            font-size: 13px;
            line-height: 19.5px;
            color: var(--grey-700);
            max-height: 160px;
            overflow-y: scroll;
          `}
        >
          {data.desc}
        </div>
      )}
    </div>
  );
}

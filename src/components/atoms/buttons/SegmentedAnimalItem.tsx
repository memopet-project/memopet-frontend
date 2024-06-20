import { css } from '@emotion/react';
import AnimalIcon, { Animals } from '../AnimalIcon';
import type { Dispatch, SetStateAction } from 'react';
import type { Nullable } from '@/types/global';

interface ISegmentedAnimalItemProps {
  type: Animals;
  selected: Nullable<Animals>;
  setSelected: Dispatch<SetStateAction<Nullable<Animals>>>;
}

export const i18n: { [key in Animals]: { ko: string; en?: string } } = {
  dog: { ko: '개' },
  dog2: { ko: '개' },
  cat: { ko: '고양이' },
  cat2: { ko: '고양이' },
  bird: { ko: '새' },
  bird2: { ko: '새' },
  turtle: { ko: '거북이' },
  fish: { ko: '물고기' },
  rabbit: { ko: '토끼' },
  rabbit2: { ko: '토끼' },
  lizard: { ko: '도마뱀' },
  hedgehog: { ko: '고슴도치' },
  frog: { ko: '개구리' },
  hamster: { ko: '햄스터' },
  other: { ko: '기타' },
};

export default function SegmentedAnimalItem({
  type,
  selected,
  setSelected,
}: ISegmentedAnimalItemProps) {
  const isSelected = Boolean(type === selected);

  return (
    <>
      <input
        onChange={(e) => {
          const value = e.target.value as Nullable<Animals>;
          setSelected(value);
        }}
        type='radio'
        name='animalType'
        id={type}
        value={type}
        css={css`
          display: none;
          &:checked {
            + label {
              color: var(--grey-700);
              background: var(--grey-0);
              border: 1px solid var(--grey-700);
            }
          }
        `}
      />
      <label
        htmlFor={type}
        css={[
          css`
            width: 80px;
            height: 75px;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 6px;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: -0.25px;
            border: 1px solid var(--grey-400);
            color: var(--grey-400);
            background: var(--grey-0);
            &:hover {
              background: #1717170d;
            }
          `,
        ]}
      >
        <span>
          <AnimalIcon type={type} selected={isSelected} />
        </span>
        <span>{i18n[type].ko}</span>
      </label>
    </>
  );
}

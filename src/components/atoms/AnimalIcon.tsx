import type { Nullable } from '@/types/global';
import { css } from '@emotion/react';
import Image from 'next/image';

export type Animals =
  | 'dog'
  | 'dog2'
  | 'cat'
  | 'cat2'
  | 'bird'
  | 'bird2'
  | 'turtle'
  | 'fish'
  | 'rabbit'
  | 'rabbit2'
  | 'lizard'
  | 'hedgehog'
  | 'frog'
  | 'hamster'
  | 'other'
  ;

interface IAnimalIconProps {
  type: Animals;
  selected: Boolean;
}

export default function AnimalIcon({ type, selected }: IAnimalIconProps) {
  return (
    <Image
      width={32}
      height={32}
      src={`/${type}.svg`}
      alt='animal'
      css={[
        !selected &&
          css`
            filter: opacity(40%);
          `,
      ]}
    />
  );
}

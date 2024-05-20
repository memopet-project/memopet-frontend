'use client';

import { atom, RecoilRoot, RecoilState } from 'recoil';
import { TIndicatorStep } from '@/types/common';
import { TPetTypeParam } from '@/types/petProfile';

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

const persistAtom = <T extends unknown>(key: string, defaultValue: T) => {
  const item = localStorage.getItem(key);
  return atom({
    key,
    default: item ? JSON.parse(item) : defaultValue,
    effects_UNSTABLE: [
      ({ onSet }) => {
        onSet((newValue) => {
          localStorage.setItem(key, JSON.stringify(newValue));
        });
      },
    ],
  });

};

export const textState = atom({
  key: 'textState',
  default: '',
});

export const indicatorState: RecoilState<TIndicatorStep> = persistAtom('indicatorState', {
  maxStep: 4,
  currentStep: 1,
});

export const petTypeState: RecoilState<TPetTypeParam> = persistAtom<TPetTypeParam>('petTypeState', {
  pet_nm: '',
  pet_desc: '',
  pet_spec_m: '',
  pet_spec_s: '',
  dont_know: false,
  pet_gender: '',
  pet_profile_url: '',
  back_img_url: '',
  birth_dt: '',
  death_dt: '',
  like_behaviour: [],
});

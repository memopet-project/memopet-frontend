"use client";

import { atom, RecoilRoot, RecoilState } from 'recoil';
import { TIndicatorStep } from '@/types/common';

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export const textState = atom({
  key: 'textState',
  default: ''
})

export const indicatorState: RecoilState<TIndicatorStep> = atom({
  key: 'indicatorState',
  default: {
    maxStep: 4,
    currentStep: 1,
  },
});

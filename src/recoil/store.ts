import { atom, RecoilState, selector } from 'recoil';
import { Animals } from '@/components/atoms/AnimalIcon';
import { Nullable } from '@/types/global';

export type TPostProfileStep = {
  maxStep: number;
  step: 1 | 2 | 3 | 4;
  data: {
    email: string;
    petName: string;
    petDesc: string;
    petSpecM: string;
    petSpecS: string;
    petProfileFrame: string;
    petGender: string;
    birthDate: string;
    deathDate: string;
    petFavs: string[];
  };
}

export const postProfileStepState: RecoilState<TPostProfileStep> = atom({
  key: 'postProfileStep',
  default: {
    maxStep: 4,
    step: 1,
    data: {
      email: '',
      petName: '',
      petDesc: '',
      petSpecM: '',
      petSpecS: '',
      petProfileFrame: '',
      petGender: '',
      birthDate: '',
      deathDate: '',
      petFavs: [],
    },
  },
});

type FirstStepData = {
  petName: string;
  petSpecM: string
  petSpecS: string;
};

export const firstStep = selector<FirstStepData>({
  key: 'firstStep',
  get: ({ get }) => {
    const { data } = get(postProfileStepState);
    return {
      petName: data.petName,
      petSpecM: data.petSpecM,
      petSpecS: data.petSpecS,
    };
  },
  set: ({ set, get }, newValue) => {
    const currentState = get(postProfileStepState);
    set(postProfileStepState, {
      ...currentState,
      data: {
        ...currentState.data,
        ...newValue,
      },
    });
  },
});

import { atom, RecoilState } from 'recoil';

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

export const postProfileStepState:RecoilState<TPostProfileStep> = atom({
  key: 'postProfileStep',
  default: {
    maxStep: 4,
    step: 1,
    data: {
      email: "",
      petName:"",
      petDesc:"",
      petSpecM:"",
      petSpecS:"",
      petProfileFrame:"",
      petGender:"",
      birthDate:"",
      deathDate:"",
      petFavs:[],
    },
  },
});

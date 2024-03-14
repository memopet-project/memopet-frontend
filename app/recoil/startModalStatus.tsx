import { atom } from 'recoil';

type Status = '' | 'findEmail' | 'findPassword' | 'join' | 'start' | 'resetPassword' | 'login'

export const modalStatus = atom<Status>({
  key: 'modalStatus',
  default: '',
});
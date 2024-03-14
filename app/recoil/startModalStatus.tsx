import { atom, selector } from 'recoil';

export type Status = '' | 'findEmail' | 'findPassword' | 'join' | 'start' | 'resettingPassword' | 'emailLogin'

export const modalStatus = atom<Status>({
  key: 'modalStatus',
  default: 'start',
});

export const modalTitle = selector({
  key: 'modalTitle',
  get: ({ get }) => {
    const status = get(modalStatus)
    const titles = {
      'findEmail': '이메일 찾기',
      'findPassword': '비밀번호 찾기',
      'join': '회원가입',
      'start': '시작하기',
      'resettingPassword': '비밀번호 재설정',
      'emailLogin': '이메일 로그인',
      '': ''
    }
    return titles[status]
  }
})
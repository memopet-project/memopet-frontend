import { type ChangeEvent } from 'react';

export interface ValidateObj {
  msg: string; 
  status: null | boolean;
}
export type ChangeEvt = ChangeEvent<HTMLInputElement>['target']['value']

export interface UserData {
  username: string;
  user_status: string;
  user_role: 'GU' | 'SA'; // GU: 일반 사용자, SA:시스템관리자
  login_fail_count: number; // 5회일 경우 계정 정지
  access_token_expiry: string;
  token: string;
}
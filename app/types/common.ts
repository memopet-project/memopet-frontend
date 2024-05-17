import React, { type ChangeEvent } from 'react';

export interface ValidateObj {
  msg: string;
  status: null | boolean;
}
export type ChangeEvt = ChangeEvent<HTMLInputElement>["target"]["value"];

export interface UserData {
  username: string;
  user_status: string;
  user_role: "GU" | "SA"; // GU: 일반 사용자, SA:시스템관리자
  login_fail_count: number; // 5회일 경우 계정 정지
  access_token_expiry: string;
  token: string;
}
export interface buttonProps {
  text: string;
  bgColor: "white" | "gray" | "red";
  marginRight?: boolean;
  onClick?: () => void;
}

export interface userInfoType {
  id: number;
  nickname: string;
  profileImg: string;
}

export type TInputState = {
  state: 'default' | 'warn' | 'error';
  msg: null | string | React.ReactNode;
};

// indicator type
export type TIndicatorStep = {
  maxStep: number;
  currentStep: number;
}

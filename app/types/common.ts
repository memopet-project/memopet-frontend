import { type ChangeEvent } from 'react';

export interface ValidateObj {
  msg: string; 
  status: null | boolean;
}
export type ChangeEvt = ChangeEvent<HTMLInputElement>['target']['value']

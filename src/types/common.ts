import type { Dispatch, SetStateAction } from 'react';

export interface IIconProps {
  color?: string;
  size?: number;
}

export interface IInputItemProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  validate: () => void;
  errorMessage: string;
  disabled?: boolean;
  placeholder?: string;
}

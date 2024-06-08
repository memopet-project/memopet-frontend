import { useEffect, useState } from 'react';

type TUseDebounceProps<T> = {
  value: T;
  delay: number;
};

export const useDebounce = <T, >({ value, delay }:TUseDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue };
}


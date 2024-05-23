// 외부에서 정의한 atom을 인자로 받는 커스텀 훅
import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

export function useClientSideRecoil<T>(recoilAtom: RecoilState<T>) {
  const [state, setState] = useRecoilState(recoilAtom);
  const [isClient, setIsClient] = useState(false); // 클라이언트 사이드 확인

  useEffect(() => {
    // 클라이언트 사이드에서 실행됨을 보장
    setIsClient(true);
  }, []);

  // 클라이언트 사이드에서만 상태 변경 허용
  const setClientState = (newValue: T) => {
    if (isClient) {
      setState(newValue);
    }
  };

  console.log(recoilAtom);
  // 초기 렌더링에서 서버 사이드인 경우 기본값을 제공
  const value = isClient ? state : recoilAtom;

  return [value, setClientState] as const;
}

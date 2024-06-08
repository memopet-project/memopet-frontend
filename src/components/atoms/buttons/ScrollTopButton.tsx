import { Global, css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ScrollTopButton() {
  const [isVisable, setIsVisable] = useState(false);

  function scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  function onScroll() {
    if (window.scrollY > 50) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!isVisable) return;
  return (
    <div
      css={css`
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 0px; // TODO: 전체 페이지에서 위치 확인 후 설정
        left: 0px; // TODO: 전체 페이지에서 위치 확인 후 설정
      `}
    >
      <div
        onClick={scrollToTop}
        css={css`
          width: 40px;
          height: 40px;
          border: 1.25px solid var(--main-red-500);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--main-red-50);
        `}
      >
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.99997 17.5L15 12.5L20 17.5'
            stroke='#F15139'
            strokeWidth='1.87501'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  );
}

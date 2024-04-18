'use client';
import { useEffect, useState } from 'react';
import Search from '@/public/svg/search.svg';
import Login from './login';
import Logout from './logout';

const Header = () => {
  let iconContainerClass =
    'h-10 w-14 px-2 flex items-center justify-center cursor-pointer';
  const [scrollPosition, setScrollPosition] = useState('bg-transparent');
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition === 0) {
        setScrollPosition('bg-transparent');
      } else {
        setScrollPosition('bg-[#FFFFFFCC]');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-screen flex justify-center left-0 top-0 z-50 bg-transparent fixed">
      <div className="w-[1160px] items-center px-4 py-5 flex justify-between">
        <h1 className="text-gray07 font-header font-normal text-xl">memopet</h1>
        <ul
          className={`font-pretendard flex items-center justify-end rounded-[99px] ${scrollPosition}`}
        >
          <li className={iconContainerClass}>
            <Search className="text-gray07" />
          </li>
          {login ? (
            <Login iconContainerClass={iconContainerClass} />
          ) : (
            <Logout />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

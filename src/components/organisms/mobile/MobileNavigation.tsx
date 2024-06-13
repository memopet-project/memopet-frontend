import ProgressIndicatorDot from '@/components/atoms/ProgressIndicatorDot';
import { css } from '@emotion/react';
import Image from 'next/image';
import { type Dispatch, type SetStateAction, useState } from 'react';

type PageType = 'home' | 'user' | 'upload' | 'noti' | 'search';

interface IMobileNavigationProps {}

interface IMenuItemProps {
  menu: PageType;
  selected: PageType;
  setSelected: Dispatch<SetStateAction<PageType>>;
}

const MobileNavigation: React.FC<IMobileNavigationProps> = () => {
  const [selected, setSelected] = useState<PageType>('home');
  const menu: Array<PageType> = ['home', 'noti', 'search', 'upload', 'user'];
  return (
    <div
      css={css`
        height: 56px;
        background: var(--grey-0);
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {menu.map((m, i) => (
        <MenuItem
          key={i}
          menu={m}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

const MenuItem: React.FC<IMenuItemProps> = ({
  menu,
  selected,
  setSelected,
}) => {
  const hasNew = true; // TODO: store에서 가져오기

  return (
    <div
      css={css`
        width: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <button
        css={css`
          all: unset;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          &:active {
            background: #1717170d;
          }
        `}
      >
        <div
          css={css`
            position: relative;
          `}
        >
          <Image
            onClick={() => setSelected(menu)}
            src={
              selected === menu
                ? `/navigation-icon-${menu}-selected.svg`
                : `/navigation-icon-${menu}.svg`
            }
            alt='home'
            width={24}
            height={24}
          />
          {menu === 'noti' && hasNew && (
            <ProgressIndicatorDot
              isMobile
              type='primaryPresent'
              top='1px'
              right='4px'
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default MobileNavigation;

import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

interface IGalleryItemProps {
  id: number;
  selected: Array<number>;
  setSelected: Dispatch<SetStateAction<Array<number>>>;
  children: React.ReactNode;
}

export default function GalleryItem({
  id,
  selected,
  setSelected,
  children,
}: IGalleryItemProps) {
  const [index, setIndex] = useState<number>(-1);

  function select() {
    if (index > -1) {
      const _selected = [...selected];
      _selected.splice(index, 1);
      setSelected(_selected);
    } else {
      setSelected((prev) => [...prev, id]);
    }
  }

  useEffect(() => {
    const ind = selected.findIndex((v) => v === id);
    setIndex(ind);
  }, [selected, id]);

  return (
    <div
      onClick={select}
      css={css`
        width: 120px;
        height: 120px;
        position: relative; // children의 ImageTag에 fill objectFit='contain' 설정
      `}
    >
      {children}
      {index === -1 && (
        <Image
          src='/gallery.svg'
          alt='checkbox'
          width={24}
          height={24}
          css={css`
            position: absolute;
            right: 8px;
            top: 8px;
          `}
        />
      )}
      {index > -1 && (
        <div
          css={css`
            width: 24px;
            height: 24px;
            position: absolute;
            right: 8px;
            top: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <span
            css={css`
              background: var(--main-red-500);
              width: 22px;
              height: 22px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--grey-0);
              font-weight: 600;
              font-size: 14px;
              line-height: 1em;
              letter-spacing: -0.25px;
            `}
          >
            {index + 1}
          </span>
        </div>
      )}
    </div>
  );
}

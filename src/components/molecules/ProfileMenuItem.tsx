import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

interface IProfileMenuItemProps {
  url: string;
  title: string;
  link: string;
}

const ProfileMenuItem: React.FC<IProfileMenuItemProps> = ({
  url,
  title,
  link,
}) => {
  return (
    <Link href={link}>
      <li
        css={css`
          padding: 14px 16px;
          width: 100%;
          height: 52px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          line-height: 1em;
          letter-spacing: -0.25px;
          &:hover {
            background: rgba(23, 23, 23, 0.05);
          }
        `}
      >
        <Image width={24} height={24} src={url} alt='menu' />
        <span
          css={css`
            color: ${title === '로그아웃'
              ? 'var(--grey-400)'
              : 'var(--grey-700)'};
          `}
        >
          {title}
        </span>
      </li>
    </Link>
  );
};

export default ProfileMenuItem;

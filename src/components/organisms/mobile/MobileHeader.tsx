import ProfileImage from '@/components/atoms/ProfileImage';
import type { ExtractPropertyType, Nullable } from '@/types/global';
import { css } from '@emotion/react';

type PageType = 'default' | 'profile';

interface IBaseMobileHeaderProps {
  color: 'default' | 'white';
  page: PageType;
}

interface IDefaultPageProps extends IBaseMobileHeaderProps {
  page: 'default';
  title: string;
  url?: never;
}

interface IProfilePageProps extends IBaseMobileHeaderProps {
  page: 'profile';
  url: Nullable<string>;
  title?: never;
}

// 최종 타입 정의
type IMobileHeaderProps = IDefaultPageProps | IProfilePageProps;

const MobileHeader: React.FC<IMobileHeaderProps> = ({
  page = 'default',
  color = 'default',
  url,
  title,
}) => {
  const isWhite = Boolean(color === 'white');
  const isProfile = Boolean(page === 'profile');

  return (
    <div
      css={css`
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background: ${isWhite ? 'transparent' : 'rgba(255, 255, 255, 1)'};
      `}
    >
      <span>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 12H3M3 12L10 5M3 12L10 19'
            stroke={isWhite ? 'var(--grey-0)' : 'var(--grey-900)'}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
      {isProfile ? (
        <span
          css={css`
            display: flex;
            align-items: center;
            gap: 4px;
          `}
        >
          <ProfileImage
            size={24}
            url={url as Nullable<string>}
            color='default'
            useHover={false}
          />
          <span
            css={css`
              font-size: 14px;
              font-weight: 500;
              line-height: 21px;
              letter-spacing: -0.25px;
              color: ${isWhite ? 'var(--grey-0)' : 'var(--grey-900)'};
            `}
          >
            user
          </span>
        </span>
      ) : (
        <span
          css={css`
            font-size: 1rem;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: -0.25px;
            color: ${isWhite ? 'var(--grey-0)' : 'var(--grey-900)'};
          `}
        >
          {title}
        </span>
      )}
      <span>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z'
            stroke={isWhite ? 'var(--grey-0)' : 'var(--grey-900)'}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
    </div>
  );
};

export default MobileHeader;

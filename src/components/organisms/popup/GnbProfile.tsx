import { css } from '@emotion/react';
import Link from 'next/link';
import CommentItem from '../../molecules/notice/CommentItem';
import FollowItem from '../../molecules/notice/FollowItem';
import type { Nullable } from '@/types/global';
import Image from 'next/image';
import ProfileImage from '@/components/atoms/ProfileImage';
import ProfileMenuItem from '@/components/molecules/ProfileMenuItem';

interface IGnbProfileProps {
  data: { url: string; name: string };
}

const GnbProfile: React.FC<IGnbProfileProps> = ({ data }) => {
  const menu = [
    { url: '/icon-profile.svg', title: '계정 설정', link: '/' },
    { url: '/icon-friends.svg', title: '친구 관리', link: '/' },
    { url: '/icon-like.svg', title: '활동 내역', link: '/' },
    { url: '/icon-change.svg', title: '프로필 전환', link: '/' },
    { url: '/icon-logout.svg', title: '로그아웃', link: '/' },
  ];

  return (
    <div
      css={css`
        width: 240px;
        height: 400px;
        border-radius: 16px;
        border: 1px solid var(--grey-700);
        box-shadow:
          0px 2px 4px 0px rgba(0, 0, 0, 0.05),
          0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        overflow: hidden;
      `}
    >
      {/* header */}
      <div
        css={css`
          padding: 24px 16px 24px 8px;
          display: flex;
          align-items: center;
          height: 112px;
          gap: 12px;
        `}
      >
        <ProfileImage url={data.url} size={64} color='default' />
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 8px;
          `}
        >
          <div
            css={css`
              color: var(--grey-900);
              font-size: 18px;
              font-weight: 700;
              line-height: 23.4px;
              letter-spacing: -0.5px;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              display: -webkit-box;
              overflow: hidden;
            `}
          >
            {data.name}
          </div>
          <Image width={4} height={8} src='/gnbprofile-arrow.svg' alt='arrow' />
        </div>
      </div>
      {/* body */}
      <div
        css={css(css`
          border-top: 4px solid var(--grey-100);
          width: 100%;
          height: 288px;
          overflow-y: scroll;
          padding: 12px 0px;
        `)}
      >
        <ul>
          {menu.map((m, i) => (
            <ProfileMenuItem
              key={i}
              url={m.url}
              title={m.title}
              link={m.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GnbProfile;

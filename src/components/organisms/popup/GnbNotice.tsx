import { css } from '@emotion/react';
import Link from 'next/link';
import CommentItem from '@/components/molecules/notice/CommentItem';
import FollowItem from '@/components/molecules/notice/FollowItem';
import { useEffect, useState } from 'react';
import type { Nullable } from '@/types/global';

type Data = any; // TODO: api 확인

const GnbNotice: React.FC = () => {
  const [data, setData] = useState<Nullable<Data>>(null);

  function fetch() {
    // TODO: notice api 연결
  }

  useEffect(() => {
    fetch();
  }, []);

  if (!data) return;
  return (
    <div
      css={css`
        width: 320px;
        border-radius: 16px;
        border: 1px solid var(--grey-700);
        box-shadow:
          0px 2px 4px 0px rgba(0, 0, 0, 0.05),
          0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        min-height: 228px;
        max-height: 308px;
        overflow: hidden;
      `}
    >
      {/* header */}
      <div
        css={css`
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        `}
      >
        <div
          css={css`
            color: var(--grey-900);
            font-size: 18px;
            font-weight: 700;
            line-height: 23.4px;
            letter-spacing: -0.5px;
            display: flex;
            align-items: center;
            gap: 6px;
          `}
        >
          알림
          <div
            css={css`
              padding: 4px 12px;
              border-radius: 999px;
              background: rgba(241, 81, 57, 0.1);
              font-size: 13px;
              font-weight: 600;
              line-height: 1rem;
              letter-spacing: -0.5px;
              color: var(--main-red-500);
            `}
          >
            +{1}
          </div>
        </div>
        <Link
          href='/'
          css={css`
            color: var(--grey-500);
            font-size: 12px;
            font-weight: 400;
            line-height: 14.52px;
            letter-spacing: -0.5px;
          `}
        >
          전체 보기
        </Link>
      </div>
      {/* body */}
      <div
        css={css(
          css`
            border-top: 4px solid var(--grey-100);
            width: 100%;
            min-height: 160px;
            max-height: 240px;
            overflow-y: scroll;
          `,
          data.length === 0 &&
            css`
              display: flex;
              justify-content: center;
              align-items: center;
            `,
        )}
      >
        {data.length === 0 && (
          <span
            css={css`
              font-size: 14px;
              font-weight: 400;
              line-height: 21px;
              letter-spacing: -0.5px;
              color: var(--grey-500);
            `}
          >
            새로운 알림이 없습니다.
          </span>
        )}
        {/*  TODO: api 확인 필요 */}
        {data.map((d: any, i: number) => {
          if (d.type === 'comment') {
            return <CommentItem key={i} data={d.contents} isNew />;
          }
          if (d.type === 'follow') {
            return <FollowItem key={i} data={d} />;
          }
        })}
      </div>
    </div>
  );
};

export default GnbNotice;

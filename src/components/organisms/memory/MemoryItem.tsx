import common from '@/styles/common';
import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail3.png';
import MoreVerticalIcon from '@/assets/icon/MoreVerticalIcon';
import MemoryThumbIcon from '@/components/molecules/memory/MemoryThumbIcon';
import MemoryActionButton from '@/components/molecules/memory/MemoryActionButton';
import ShareIcon from '@/assets/icon/ShareIcon';

interface PropsType {
  thumbImg: string;
  date: string;
  title: string;
  content: string;
  flowerAmount: number;
  commentAmount: number;
  isProfile?: boolean;
  profileImg: string;
  name: string;
}

const MemoryItem = ({
  thumbImg,
  date,
  title,
  content,
  flowerAmount,
  commentAmount,
  isProfile,
  profileImg,
  name,
}: PropsType) => {
  return (
    <div
      css={css`
        border-radius: 12px;
        border: 1px solid ${common.colors.gray[700]};
        padding: 8px;
        background: ${common.colors.gray[0]};
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 360px;
        &:hover {
          background: ${common.colors.gray[100]};
        }
        @media screen and (max-width: 743px) {
          width: 343px;
        }
      `}
    >
      {isProfile ? (
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 8px;
            `}
          >
            <Image
              src={sampleMemoryThumbnail}
              alt='프로필 이미지'
              width={32}
              height={32}
              css={css`
                border-radius: 50%;
                border: 0.5px solid ${common.colors.gray[900]};
                object-fit: cover;
              `}
            />
            <span
              css={css`
                font-weight: 500;
                font-size: 14px;
              `}
            >
              {name}
            </span>
          </div>
          <button
            css={css`
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <MoreVerticalIcon color={common.colors.gray[400]} />
          </button>
        </div>
      ) : null}
      <Image
        src={sampleMemoryThumbnail}
        alt='썸네일 이미지'
        css={css`
          border-radius: 8px;
          border: 1px solid ${common.colors.gray[700]};
          object-fit: cover;
          width: 100%;
          height: 100%;
          @media screen and (max-width: 743px) {
            width: 327px;
            height: 280px;
          }
        `}
      />
      <div
        css={css`
          padding: 4px 8px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-size: 13px;
              color: ${common.colors.gray[500]};
            `}
          >
            {date}
          </span>
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 8px;
              @media screen and (max-width: 743px) {
                display: none;
              }
            `}
          >
            <MemoryThumbIcon type='flower' amount={flowerAmount} />
            <MemoryThumbIcon type='comment' amount={commentAmount} />
          </div>
        </div>
        <p
          css={css`
            font-weight: 500;
          `}
        >
          {title}
        </p>
        <p
          css={css`
            display: none;
            font-size: 14px;
            color: ${common.colors.gray[700]};
            @media screen and (max-width: 743px) {
              display: block;
            }
          `}
        >
          {content}
        </p>
      </div>
      <div
        css={css`
          display: none;
          justify-content: space-between;
          align-items: center;
          padding-top: 4px;
          border-top: 1px solid ${common.colors.gray[200]};
          @media screen and (max-width: 743px) {
            display: flex;
          }
        `}
      >
        <div
          css={css`
            padding: 0 8px;
            display: flex;
            gap: 12px;
          `}
        >
          <MemoryActionButton type='flower' amount={flowerAmount} />
          <MemoryActionButton type='comment' amount={commentAmount} />
        </div>
        <button>
          <ShareIcon color={common.colors.gray[700]} />
        </button>
      </div>
    </div>
  );
};

export default MemoryItem;

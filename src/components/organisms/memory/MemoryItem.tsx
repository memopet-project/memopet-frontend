import common from '@/styles/common';
import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import MoreVerticalIcon from '@/assets/icon/MoreVerticalIcon';
import MemoryThumbIcon from '@/components/molecules/button/MemoryThumbIcon';

interface PropsType {
  thumbImg: string;
  date: string;
  title: string;
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
        background-color: ${common.colors.gray[0]};
        width: fit-content;
      `}
    >
      {isProfile ? (
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 8px;
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
        width={344}
        height={518}
        css={css`
          border-radius: 8px;
          border: 1px solid ${common.colors.gray[700]};
          object-fit: cover;
        `}
      />
      <div
        css={css`
          padding: 12px 8px;
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
      </div>
    </div>
  );
};

export default MemoryItem;

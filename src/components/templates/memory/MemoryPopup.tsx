import MemoryActionButton from '@/components/molecules/memory/MemoryActionButton';
import Popup from '@/components/molecules/Popup';
import common from '@/styles/common';
import { css } from '@emotion/react';
import Image from 'next/image';
import sampleMemoryThumbnail from '@/assets/images/sampleMemoryThumbnail.png';
import ShareIcon from '@/assets/icon/ShareIcon';
import MoreVerticalIcon from '@/assets/icon/MoreVerticalIcon';
import { useState } from 'react';
import InputComment from '@/components/organisms/comment/InputComment';
import CommentInput from '@/components/organisms/comment/CommentInput';
import CommentItem from '@/components/organisms/comment/CommentItem';
import MemoryCommentItem from '@/components/organisms/memory/MemoryCommentItem';

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

const MemoryPopup = ({
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
  const [isOpenComment, setIsOpenComment] = useState(false);

  const handleToggleComment = () => {
    setIsOpenComment(!isOpenComment);
  };

  return (
    <Popup onClose={() => {}}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        {isProfile ? (
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
        ) : null}
        <div
          css={css`
            display: flex;
            gap: 24px;
          `}
        >
          <Image
            src={sampleMemoryThumbnail}
            alt='썸네일 이미지'
            width={400}
            height={600}
            css={css`
              border-radius: 8px;
              object-fit: contain;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: end;
              gap: 8px;
              width: 400px;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                gap: 16px;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  gap: 4px;
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
                <p
                  css={css`
                    font-weight: 700;
                    font-weight: 18px;
                  `}
                >
                  {title}
                </p>
              </div>
              {!isOpenComment ? <p>{content}</p> : null}
            </div>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 8px;
                border-top: 1px solid ${common.colors.gray[200]};
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  gap: 12px;
                `}
              >
                <MemoryActionButton type='flower' amount={flowerAmount} />
                <MemoryActionButton
                  type='comment'
                  amount={commentAmount}
                  onClick={handleToggleComment}
                />
                <button>
                  <ShareIcon color={common.colors.gray[700]} />
                </button>
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
            {isOpenComment ? (
              <>
                <ul
                  css={css`
                    border-radius: 6px;
                    border: 1px solid ${common.colors.gray[100]};
                    padding: 12px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    background: ${common.colors.gray[50]};
                    height: 100%;
                    overflow-y: auto;
                  `}
                ></ul>
                <InputComment placeHolder='답글을 작성해 주세요' />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default MemoryPopup;

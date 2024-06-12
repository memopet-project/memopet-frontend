import ProfileImage from '@/components/atoms/ProfileImage';
import {
  getKoreanConnectiveParticle,
  getKoreanSubjectMarker,
} from '@/utils/common';
import { css } from '@emotion/react';
import Image from 'next/image';

interface ICommentItemProps {
  data: {
    //TODO: data type 지정 필요 (api 참고)
    imageUrl: string;
    userName: string;
    time: string;
  }[];
  isNew?: boolean;
}

const CommentItem: React.FC<ICommentItemProps> = ({ data, isNew = false }) => {
  if (!data) return;
  const length = data.length;

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        gap: 4px;
        background: ${isNew ? `rgba(241, 81, 57, 0.05)` : 'transparent'};
        &:hover {
          background: ${isNew
            ? `rgba(241, 81, 57, 0.1)`
            : `rgba(23, 23, 23, 0.05)`};
        }
      `}
    >
      {length === 1 ? (
        <OneUser data={data} />
      ) : length === 2 ? (
        <TwoUsers data={data} />
      ) : (
        <MultiUsers data={data} />
      )}
      <Image
        width={24}
        height={24}
        src='/arrow-dropdown.svg'
        alt='arrow'
        css={css`
          transform: rotateZ(-90deg);
        `}
      />
    </div>
  );
};

const OneUser = ({ data }) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 8px;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--grey-0);
        `}
      >
        <ProfileImage
          url={data[0].imageUrl}
          color='default'
          size={32}
          useHover={false}
        />
      </div>
      <div>
        <div
          css={css`
            display: flex;
            gap: 8px;
          `}
        >
          <span
            css={css`
              font-weight: 600;
              font-size: 14px;
              line-height: 14px;
              letter-spacing: -0.25px;
              color: var(--grey-900);
            `}
          >
            {data[0].userName}
          </span>
          <span
            css={css`
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              letter-spacing: -0.25px;
              color: var(--grey-600);
            `}
          >
            {data[0].time}
          </span>
        </div>
        <div
          css={css`
            color: var(--grey-900);
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: -0.5px;
          `}
        >
          게시물에 댓글을 달았습니다.
        </div>
      </div>
    </div>
  );
};

const TwoUsers = ({ data }) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 8px;
        align-items: center;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 32px;
          height: 32px;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            background: var(--grey-0);
            border-radius: 50%;
          `}
        >
          <ProfileImage
            url={data[1].imageUrl}
            color='default'
            size={24}
            useHover={false}
          />
        </div>
        <div
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
            background: var(--grey-0);
            border-radius: 50%;
          `}
        >
          <ProfileImage
            url={data[0].imageUrl}
            color='default'
            size={24}
            useHover={false}
          />
        </div>
      </div>
      <div>
        <div
          css={css`
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: -0.25px;
            color: var(--grey-600);
          `}
        >
          {data[0].time}
        </div>
        <div
          css={css`
            color: var(--grey-900);
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: -0.5px;
          `}
        >
          <b
            css={css`
              font-weight: 600;
            `}
          >
            {data[0].userName}
          </b>
          {getKoreanConnectiveParticle(data[0].userName)}{' '}
          <b
            css={css`
              font-weight: 600;
            `}
          >
            {data[1].userName}
          </b>
          {getKoreanSubjectMarker(data[1].userName)} 게시물에 댓글을 달았습니다.
        </div>
      </div>
    </div>
  );
};

const MultiUsers = ({ data }) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 8px;
        align-items: center;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 32px;
          height: 32px;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 4px;
            left: -2px;
            background: var(--grey-0);
            border-radius: 50%;
          `}
        >
          <ProfileImage
            url={data[0].imageUrl}
            color='default'
            size={16}
            useHover={false}
          />
        </div>
        <div
          css={css`
            position: absolute;
            right: -5px;
            top: 1px;
            background: var(--grey-0);
            border-radius: 50%;
          `}
        >
          <ProfileImage
            url={data[1].imageUrl}
            color='default'
            size={16}
            useHover={false}
          />
        </div>
        <div
          css={css`
            position: absolute;
            right: 1px;
            bottom: -1px;
            background: var(--grey-0);
            border-radius: 50%;
          `}
        >
          <ProfileImage
            url={data[2].imageUrl}
            color='default'
            size={16}
            useHover={false}
          />
        </div>
      </div>
      <div>
        <div
          css={css`
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: -0.25px;
            color: var(--grey-600);
          `}
        >
          {data[0].time}
        </div>
        <div
          css={css`
            color: var(--grey-900);
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: -0.5px;
          `}
        >
          <b
            css={css`
              font-weight: 600;
            `}
          >
            {data[0].userName}
          </b>
          {getKoreanConnectiveParticle(data[0].userName)} 여러 명의 친구가
          게시물에 댓글을 달았습니다.
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

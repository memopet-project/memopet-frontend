import ProfileImage from '@/components/atoms/ProfileImage';
import RoundButton from '@/components/atoms/buttons/RoundButton';
import { getKoreanObjectParticle } from '@/utils/common';
import { css } from '@emotion/react';

interface IFollowItemProps {
  data: {
    //TODO: data type 지정 필요 (api 참고)
    imageUrl: string;
    userName: string;
    me: string;
    time: string;
    following: boolean;
    isNew: boolean;
  };
}

const FollowItem: React.FC<IFollowItemProps> = ({ data }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        gap: 4px;
        background: ${data.isNew ? `rgba(241, 81, 57, 0.05)` : 'transparent'};
        &:hover {
          background: ${data.isNew
            ? `rgba(241, 81, 57, 0.1)`
            : `rgba(23, 23, 23, 0.05)`};
        }
      `}
    >
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
            url={data.imageUrl}
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
              {data.userName}
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
              {data.time}
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
            {data.me}
            {getKoreanObjectParticle(data.me)} 팔로우합니다.
          </div>
        </div>
      </div>
      <RoundButton
        type={data.following ? 'outline' : 'filled'}
        onClick={() => {}}
      >
        {data.following ? '팔로잉' : '팔로우'}
      </RoundButton>
    </div>
  );
};

export default FollowItem;

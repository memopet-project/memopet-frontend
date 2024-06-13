import Image from 'next/image';
import ProfileImage from '../atoms/ProfileImage';
import { css } from '@emotion/react';
import ViewMoreButton from '../atoms/buttons/ViewMoreButton';

interface ISwitchAccountItemProps {
  data: any;
  isSelected: boolean;
  isMobile?: boolean;
}

const SwitchAccountItem: React.FC<ISwitchAccountItemProps> = ({
  data,
  isSelected = false,
  isMobile = false,
}) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 12px;
        &:hover {
          background: rgba(23, 23, 23, 0.05);
        }
      `}
    >
      <div
        css={css`
          display: flex;
          gap: ${isMobile ? '8px' : '12px'};
          align-items: center;
          font-size: ${isMobile ? '1rem' : '18px'};
          font-weight: ${isMobile ? '500' : '700'};
          line-height: 23.4px;
          letter-spacing: -0.5px;
          text-align: left;
        `}
      >
        <ProfileImage
          size={isMobile ? 40 : 64}
          color='default'
          url={data.url}
          useActive={isSelected}
        />
        <div
          css={css`
            display: flex;
            gap: 4px;
            align-items: center;
          `}
        >
          <span
            css={css`
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              word-break: break-all;
            `}
          >
            {data.name}
          </span>
          {isSelected && (
            <Image src='/check.svg' width={10} height={6} alt='check-icon' />
          )}
        </div>
      </div>
      {/* TODO: CommentActionButton 추가 */}
      {!isSelected && <ViewMoreButton />}
    </div>
  );
};

export default SwitchAccountItem;

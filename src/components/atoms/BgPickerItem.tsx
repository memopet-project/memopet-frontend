import { css } from '@emotion/react';
import Image from 'next/image';

interface IBgPickerItemProps {
  type: 'upload' | 'update';
}

const BgPickerItem: React.FC<IBgPickerItemProps> = ({ type }) => {
  const isUpload = Boolean(type === 'upload');

  return (
    <div
      css={css`
        display: flex;
        gap: 4px;
        padding: 7px 8px;
        align-items: center;
      `}
    >
      <Image
        src={isUpload ? '/picker-plus.svg' : '/picker-check.svg'}
        alt='picker-icon'
        width={16}
        height={16}
      />
      <span
        css={css`
          color: var(--grey-0);
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: -0.25px;
          &:hover {
            text-decoration: underline;
          }
        `}
      >
        {isUpload ? '사진 업로드' : '사진 바꾸기'}
      </span>
    </div>
  );
};

export default BgPickerItem;

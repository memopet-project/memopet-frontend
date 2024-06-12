import MaximizeIcon from '@/assets/icon/MaximizeIcon';
import MinimizeIcon from '@/assets/icon/MinimizeIcon';
import { css } from '@emotion/react';

interface IProps {
  type: 'maximize' | 'minimize';
}

const ScaleButton = ({ type }: IProps) => {
  return (
    <button
      css={css`
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: var(--grey-900);
        opacity: 0.5;
        @media screen and (max-width: 743px) {
          width: 40px;
          height: 40px;
          & > svg {
            width: 20px;
            height: 20px;
          }
        }
        &:hover {
          opacity: 0.7;
        }
      `}
    >
      {type === 'maximize' ? (
        <MaximizeIcon color={'var(--grey-0)'} size={16} />
      ) : (
        <MinimizeIcon color={'var(--grey-0)'} size={16} />
      )}
    </button>
  );
};

export default ScaleButton;

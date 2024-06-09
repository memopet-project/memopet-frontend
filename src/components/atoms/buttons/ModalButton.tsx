import { type SerializedStyles, css } from '@emotion/react';

type ModalButtonType = 'pos' | 'neg';

interface IModalButtonProps {
  type: ModalButtonType;
  disabled?: boolean;
  children: React.ReactNode;
}

const styles: { [key in ModalButtonType]: SerializedStyles } = {
  pos: css`
    background: var(--main-red-500);
    color: var(--grey-0);
    &:disabled {
      background: var(--grey-300);
    }
  `,
  neg: css`
    background: var(--grey-200);
    color: var(--grey-600);
    &:disabled {
      background: var(--grey-100);
      color: var(--grey-400);
    }
  `,
};

export default function ModalButton({
  type = 'pos',
  disabled = false,
  children,
}: IModalButtonProps) {
  return (
    <button
      disabled={disabled}
      type='button'
      css={css(
        css`
          border: none;
          outline: none;
          width: 180px;
          height: 44px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1rem;
          letter-spacing: -0.25px;
          &:active:enabled {
            filter: brightness(90%);
          }
        `,
        styles[type],
      )}
    >
      {children}
    </button>
  );
}

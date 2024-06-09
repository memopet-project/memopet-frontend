import { css } from '@emotion/react';

interface ISegmentedButtonProps {
  active: boolean;
  children: React.ReactNode;
}

export default function SegmentedButton({
  active = false,
  children,
}: ISegmentedButtonProps) {
  return (
    <button
      type='button'
      css={css([
        css`
          width: 128px;
          height: 52px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--grey-700);
          border-radius: 6px;
          oueline: none;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1rem;
          letter-spacing: -0.25px;
          color: var(--grey-700);
          background: var(--grey-0);
          &:hover:enabled {
            background: ${active ? 'var(--grey-700)' : '#1717170d'};
          }
        `,
        active &&
          css`
            background: var(--grey-700);
            color: var(--grey-0);
          `,
      ])}
    >
      {children}
    </button>
  );
}

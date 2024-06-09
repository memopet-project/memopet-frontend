import { css, useTheme } from '@emotion/react';

export default function Home() {
  const theme = useTheme()

  return (
    <div
      css={css`
        color: var(--grey-900);
        background: ${theme.colors.primary['100']};
        height: 100dvh;
      `}
    >
      main page
    </div>
  );
}

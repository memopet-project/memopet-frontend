import common from '@/styles/common';
import { css } from '@emotion/react';

export default function Home() {

  return (
    <div
      css={css`
        color: ${common.colors.primary[600]};
      `}
    >
      main page
    </div>
  );
}

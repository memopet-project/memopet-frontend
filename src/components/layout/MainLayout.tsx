import React from 'react';
import Footer from '@/components/organisms/Footer';
import { css } from '@emotion/react';

type Props = {
  isMobile?: boolean;
  children: React.ReactNode;
};

const MainLayout = ({ isMobile, children }: Props) => {
  return (
    <>
      <main
        css={css`
          min-height: 100dvh;
          position: relative;
        `}
      >
        {children}
      </main>
      {
        !isMobile && <Footer />
      }
    </>
  );
};

export default MainLayout;

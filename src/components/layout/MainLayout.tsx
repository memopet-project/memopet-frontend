import React from 'react';
import Footer from '@/components/organisms/Footer';
import { css, useTheme } from '@emotion/react';

type Props = {
  isMobile?: boolean;
  footerShown?: boolean;
  children: React.ReactNode;
};

const MainLayout = ({ footerShown, children }: Props) => {
  const theme = useTheme()

  return (
    <>
      <main
        css={css`
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          @media ${theme.device.mobile} {
            
          }
        `}
      >
        {children}
      {
        footerShown && <Footer />
      }
      </main>
    </>
  );
};

export default MainLayout;

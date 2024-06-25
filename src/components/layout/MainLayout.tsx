import React from 'react';
import Footer from '@/components/organisms/Footer';
import { css, useTheme } from '@emotion/react';
import { useDevice } from '@/context/DeviceContext';

type Props = {
  isMobile?: boolean;
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const theme = useTheme()

  const { isMobile } = useDevice();

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
        !isMobile && <Footer />
      }
      </main>
    </>
  );
};

export default MainLayout;

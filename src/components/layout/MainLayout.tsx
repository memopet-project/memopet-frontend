import React from 'react';
import Footer from '@/components/organisms/Footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

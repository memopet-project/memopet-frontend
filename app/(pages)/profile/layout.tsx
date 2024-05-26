import React from 'react';
import LogoSVG from '@/public/svg/logo.svg';
import { isMobileDevice } from '@/app/libs/responsive';

type Props = {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  const isMobile = isMobileDevice();
  return (
    <main className="w-full min-h-screen flex flex-col gap-[72px]">
      {!isMobile && (
        <LogoSVG className="mx-auto mt-[48px] mb-[36px]" />
      )}
      <section className="flex-1">
        {children}
      </section>
    </main>
  );
};

export default Page;

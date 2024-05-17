import React from 'react';
import LogoSVG from '@/public/svg/logo.svg';

type Props = {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-[72px]">
      <LogoSVG className="mx-auto mt-[48px] mb-[36px]" />
      <section className="flex justify-center">
        {children}
      </section>
    </main>
  );
};

export default Page;

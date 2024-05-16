import React from 'react';
import Image from 'next/image';
import ProfileSettingForm from '@/app/components/form/profileSettingForm';

const Page = () => {
  return (
    <main className="w-full min-h-screen">
      <Image
        src={'/images/logo.svg'}
        alt="logo"
        width={120}
        height={40}
        priority={true}
        className="mx-auto mt-[48px] mb-[36px]"
      />
      <section className="flex justify-center">
        <ProfileSettingForm></ProfileSettingForm>
      </section>
    </main>
  );
};

export default Page;

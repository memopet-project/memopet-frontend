import React from 'react';
import InfiniteScrollImage from '@/app/components/assets/infiniteScrollImage';
import Link from 'next/link';
import MainBtn from '@/app/components/button/mainBtn';

const Page = () => {
  let isMobile = true;
  return (
    <main>
      <div className="w-full h-screen flex flex-col gap-[64px] bg-white relative overflow-hidden items-center">
        <div className="mt-[84px] px-[20px] flex flex-col gap-4 text-center leading-normal">
          <span className="text-4xl font-[700]">환영합니다</span>
          <p className="text-[16px] font-[400] font-pretendard">
            memopet의 소중한 회원이 되어주셔서 감사합니다!
            <br />
            간단히 프로필을 만들고 반려동물과의 추억을 공유해 보세요
          </p>
        </div>
        <InfiniteScrollImage
          hoveredSrc="/images/slider/hover.png"
          defaultSrc="/images/slider/default.png"
          tagsSrc="/images/slider/tags.png"
          alt="bannerSlider"
          width="3596"
          height="442"
          isMobile={isMobile}
        />
        <div className="w-full px-[20px] py-[40px] fixed bottom-0">
          <Link href="#">
            <MainBtn
              text="프로필 만들기"
              className="mx-auto mt-4"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;

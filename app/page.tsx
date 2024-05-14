import Image from 'next/image';
import EditBtn from './components/button/editBtn';
import MainBtn from '@/app/components/button/mainBtn';
import Album from '@/app/components/assets/album';
import InfinitiScrollImage from '@/app/components/assets/infinitiScrollImage';

type ImageType = {
  top?: string;
  bottom?: string;
  left: string;
  width: string;
  height: string;
};
const images: ImageType[] = [
  {
    top: 'top-[95px]',
    left: 'left-[1580px]',
    width: 'w-[440px]',
    height: 'h-[370px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[87px]',
    left: 'left-[154px]',
    width: 'w-[346.3px]',
    height: 'h-[440px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[573px]',
    left: 'left-0',
    width: 'w-[440px]',
    height: 'h-[346.67px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[500px]',
    left: 'left-[400px]',
    width: 'w-[346.68px]',
    height: 'h-[440px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-0',
    left: 'left-[2096px]',
    width: 'w-[400px] max-w-[400px]',
    height: 'h-[480px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[919.67px]',
    left: 'left-[293px]',
    height: 'h-[440px]',
    width: 'w-[440px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[590px]',
    left: 'left-[860px]',
    width: 'w-[440px]',
    height: 'h-[370px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[960px]',
    left: 'left-[860px]',
    width: 'w-[346.68px]',
    height: 'h-[440px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[1007px]',
    left: 'left-[1334px]',
    width: 'w-[440px]',
    height: 'h-[346.61px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[60px]',
    left: 'left-[1127px]',
    width: 'w-[346.67px]',
    height: 'h-[440px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[465px]',
    left: 'left-[1700px]',
    width: 'w-[346.68px]',
    height: 'h-[440px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-0',
    left: 'left-[593px]',
    width: 'w-[440px]',
    height: 'h-[346.67px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[106px]',
    left: 'left-[2560px]',
    width: 'w-[440px]',
    height: 'h-[346.91px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[545px]',
    left: 'left-[2165px]',
    width: 'w-[440px]',
    height: 'h-[346.65px]',
  },
  {
    top: 'top-[924px]',
    left: 'left-[1923px]',
    width: 'w-[346.69px]',
    height: 'h-[440px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[1040px]',
    left: 'left-[2401px]',
    width: 'w-[440px]',
    height: 'h-[360px]',
    bottom: 'bottom-[0]',
  },
  {
    top: 'top-[567px]',
    left: 'left-[2653px]',
    width: 'w-[346.65px]',
    height: 'h-[440px]',
    bottom: 'bottom-[0]',
  },
];
const updatedImages = images.map((img, index): ImageType => {
  const widthValue = parseInt(
    img.width.replace('w-[', '').replace('px]', ''),
    10,
  );
  const positionValue = widthValue >= 440 ? '36px' : '48px';
  const isTopHalf = index < images.length / 2;

  if (isTopHalf) {
    return { ...img, top: `top-[${positionValue}]` };
  } else {
    const { top, ...rest } = img;
    return { ...rest, bottom: `bottom-[${positionValue}]` };
  }
});
export default function Home() {
  return (
    <main>
      <section className="w-full h-screen flex flex-col gap-[120px] bg-white relative overflow-hidden items-center">
        <div className="w-[410px] mt-[58px] flex flex-col gap-4 text-center leading-normal">
          <span className="text-4xl font-[700]">환영합니다</span>
          <p className="text-[18px] font-[400] font-pretendard">
            memopet의 소중한 회원이 되어주셔서 감사합니다!
            <br />
            간단히 프로필을 만들고 반려동물과의 추억을 공유해 보세요
          </p>
          <MainBtn
            text="로그인"
            className="mx-auto mt-4"
          />
        </div>
        {/*<div className="overflow-hidden h-[442px] relative">*/}
        {/*  <div className="h-full">*/}
        {/*    <Image*/}
        {/*      src="/images/slider/default.png"*/}
        {/*      alt="bannerSlider"*/}
        {/*      width={3596}*/}
        {/*      height={442}*/}
        {/*      className={`object-none h-full object-left-top`}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <InfinitiScrollImage
          hoveredSrc="/images/slider/hover.png"
          defaultSrc="/images/slider/default.png"
          tagsSrc="/images/slider/tags.png"
          alt="bannerSlider"
          width="3596"
          height="442"
        />
      </section>
    </main>
  );
}

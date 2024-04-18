import Image from 'next/image';
import EditBtn from './components/button/editBtn';
const images = [
  {
    top: 'top-[95px]',
    left: 'left-[1580px]',
    width: 'w-[440px]',
    height: 'h-[370px]',
  },
  {
    top: 'top-[87px]',
    left: 'left-[154px]',
    width: 'w-[346.3px]',
    height: 'h-[440px]',
  },
  {
    top: 'top-[573px]',
    left: 'left-0',
    width: 'w-[440px]',
    height: 'h-[346.67px]',
  },
  {
    top: 'top-[500px]',
    left: 'left-[400px]',
    width: 'w-[346.68px]',
    height: 'h-[440px]',
  },
  {
    top: 'top-0',
    left: 'left-[2096px]',
    width: 'w-[400px] max-w-[400px]',
    height: 'h-[480px]',
  },
  {
    top: 'top-[919.67px]',
    left: 'left-[293px]',
    height: 'h-[440px]',
    width: 'w-[440px]',
  },
  {
    top: 'top-[590px]',
    left: 'left-[860px]',
    width: 'w-[440px]',
    height: 'h-[370px]',
  },
  {
    top: 'top-[960px]',
    left: 'left-[860px]',
    width: 'w-[346.68px]',
    height: 'h-[440px]',
  },
  {
    top: 'top-[1007px]',
    left: 'left-[1334px]',
    width: 'w-[440px]',
    height: 'h-[346.61px]',
  },
  {
    top: 'top-[60px]',
    left: 'left-[1127px]',
    width: 'w-[346.67px]',
    height: 'h-[440px]',
  },
  {
    top: 'top-[465px]',
    left: 'left-[1700px]',
    width: 'w-[346.68px]',
    height: 'h-[440px]',
  },
  {
    top: 'top-0',
    left: 'left-[593px]',
    width: 'w-[440px]',
    height: 'h-[346.67px]',
  },
  {
    top: 'top-[106px]',
    left: 'left-[2560px]',
    width: 'w-[440px]',
    height: 'h-[346.91px]',
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
  },
  {
    top: 'top-[1040px]',
    left: 'left-[2401px]',
    width: 'w-[440px]',
    height: 'h-[360px]',
  },
  {
    top: 'top-[567px]',
    left: 'left-[2653px]',
    width: 'w-[346.65px]',
    height: 'h-[440px]',
  },
];

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen flex flex-col bg-white relative overflow-hidden">
        {images.map((img, idx) => (
          <div
            className={`${img.width} ${img.height} absolute ${img.top} ${
              img.left
            } p-20 overflow-hidden animate-fall animation-delay-[${
              idx * 0.1
            }s]`}
            key={`login_${idx + 1}`}
          >
            <Image
              src={`/images/login_${idx + 1}.png`}
              sizes="210px"
              priority
              width={100}
              height={100}
              className="opacity-50 relative rounded-lg w-full h-full"
              alt={`login_${idx + 1}`}
            />
          </div>
        ))}
        <div className="w-[340px] absolute top-1/2 left-1/2 z-50 -translate-x-2/4 -translate-y-2/4 text-center leading-normal">
          <p className="text-4xl mb-6">
            새로운 추억을 발견하고
            <b />
            공유해 보세요.
          </p>
          <EditBtn text="추억 올리기" className="mx-auto" outline />
        </div>
      </section>
    </main>
  );
}

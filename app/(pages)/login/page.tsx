import Header from '@/app/components/header/header'
import Image from 'next/image'
import React from 'react'

const images = [
  {
    top:  'top-[95px]',
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
]
const Login = () => {
  return (
    <section className='w-[187.5rem] h-[87.5rem] bg-white relative'>
      <Header />
      {images.map((img, idx) => (
        <div className={`${img.width} ${img.height} absolute ${img.top} ${img.left} p-20 overflow-hidden`} key={`login_${idx + 1}`}>
          <Image
            src={`/images/login_${idx + 1}.png`}
            sizes='210px'
            priority
            width={100}
            height={100}
            className='opacity-50 relative rounded-lg w-full h-full'
            alt={`login_${idx + 1}`}
          />
        </div>
      ))}
    </section>
  )
}

export default Login
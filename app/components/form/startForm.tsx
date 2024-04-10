import { type List, modalStatus } from '@/app/recoil/startModalStatus';
import { Fragment } from 'react';
import { useSetRecoilState } from 'recoil';
import Naver from '@/public/svg/naver.svg'
import Image from 'next/image';
import api from '@/app/api/axios';


const StartForm = () => {
  const setModalStatus = useSetRecoilState(modalStatus);
  function handleClick(item: List) {
    setModalStatus(item.value)
  }

  const snsLogin = [
    {
      label: 'Google 계정으로 로그인',
      value: 'google',
      icon: <Image
        src='/images/google.png'
        sizes='24px'
        priority
        width={24}
        height={24}
        className='p-1'
        alt='google'
      />,
      classes: 'border border-gray02 text-gray09',
      onClick: () => {}
    },
    {
      label: '네이버 계정으로 로그인',
      value: 'naver',
      icon: <Naver />,
      classes: 'bg-[#03C75A] text-white',
      onClick: async () => {
        try {
          const res = await api.get('oauth2/callback/naver')
          console.log(res)
        } catch (error) {
          
        }
      }
    },
  ]

  const functionList: List[] = [
    {
      label: '이메일로 로그인',
      value: 'emailLogin',
    },
    {
      label: '회원가입',
      value: 'join',
    },
  ];
  return (
    <>
      <p className='-tracking-[0.5px] leading-6 text-gray07 mb-8'>
        간편하게 로그인하고 반려동물과의 소중한 추억을<br />
        기록하고 공유해보세요!
      </p>
      <form className='flex flex-col gap-3'>
        {snsLogin.map((btn) =>
          <button 
            key={btn.value} 
            type='button'
            onClick={btn.onClick} 
            className={`inline-flex rounded-lg h-[52px] items-center justify-center gap-2 font-semibold -tracking-[0.25px] ${btn.classes}`}
          >
            {btn.icon}
            {btn.label}
          </button>
        )}
        <ul className='function-button__with-divider justify-center'>
          {functionList.map((item, idx) =>
            <Fragment key={`${item.value}-start`}>
              <li onClick={() => handleClick(item)}>{item.label}</li>
              {idx < (functionList.length - 1) && <div className='mx-5'></div>}
            </Fragment>
          )}
        </ul>
      </form>
      <p className='text-[13px] -tracking-[0.25px] mt-8 text-gray09'>
        로그인은 <a className='text-gray05 underline'>개인 정보 보호 정책</a> 
        및 <a className='text-gray05 underline'>서비스 이용약관</a>
        에 동의하는 것을 의미하며, 서비스 이용을 위해 이메일과 이름을 수집합니다.
      </p>
    </>
  )
}

export default StartForm
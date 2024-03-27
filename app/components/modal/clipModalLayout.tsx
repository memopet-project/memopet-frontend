import ClipSVG from '@/public/svg/clipTop.svg'
import CloseSVG from '@/public/svg/close_24.svg'
import { type ReactNode, useMemo } from 'react';

type Props = {
  handleClose: (arg: boolean) => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}

const ClipModalLayout = ({ handleClose, title, children, maxWidth = '480px' }: Props) => {
  const useMaxWidth = useMemo(() => maxWidth === '480px' ? 'max-w-[480px]' : 'max-w-[400px]', [maxWidth])
  
  return (
    <section className='fixed bg-[#0000004D] flex justify-center items-center top-0 left-0 w-full h-full z-50'>
      <aside className={`relative bg-white w-full ${useMaxWidth} h-fit max-h-[905px] min-h-fit rounded-2xl p-10 border border-gray07 shadow-[0px_4px_4px_0px_#00000040]`}>
        <ClipSVG className='absolute -top-[17px] -left-[14px]' />
        <button className='absolute w-6 h-6 top-4 right-4' onClick={() => handleClose(false)}>
          <CloseSVG className='text-gray09' />
        </button>
        <h1 className='text-gray09 text-[28px] font-medium leading-9 font-gothic mb-8'>{title}</h1>
        {children}
      </aside>
    </section>
  )
}

export default ClipModalLayout
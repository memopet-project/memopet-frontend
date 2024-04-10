import { type Dispatch, type SetStateAction, type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Button {
  label: string;
  useOk: boolean;
}

interface Props {
  handleCancel?: () => void;
  handleOk?: () => void;
  open: boolean;
  children: ReactNode;
  buttons: Button[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Confirm = ({ handleCancel, handleOk, children, buttons, open, setOpen }: Props) => {
  if (!open) return null;
  
  // useEffect(() => {
  //   const root = document.getElementById('modal-root')
  //   const confirmModal = document.getElementById('confirmModal');
  //   const child = root!.childNodes[0] as Node
    
  //   if (open && confirmModal !== child) {
  //     root!.removeChild(child)
  //   }
  // }, [open])

  function handleClose(isOk: boolean) {
    setOpen(false)

    if (isOk && handleOk) {
      handleOk()
      return;
    }

    handleCancel && handleCancel()
  }

  return createPortal(
    <section id='confirmModal' className='fixed bg-[#0000004D] flex justify-center items-center top-0 left-0 w-full h-full z-50'>
      <aside className={`relative bg-white w-[320px] h-fit max-h-[905px] min-h-fit rounded-2xl p-5 border border-gray07 shadow-[0px_4px_4px_0px_#00000050]`}>
        {children}
        <div className='flex justify-end gap-1 mt-4'>
          {buttons.map((btn) => 
          <button 
            key={btn.label} 
            onClick={() => handleClose(btn.useOk)}
            className={`${btn.useOk ? 'text-white bg-red05' : 'text-gray07 bg-white border border-gray04'} rounded-[999px] -tracking-[0.25px] text-sm font-medium px-4 py-[5.5px]`}
          >
            {btn.label}
          </button>)}
        </div>
      </aside>
    </section>,
    document.getElementById('modal-root') as HTMLDivElement
  )
}

export default Confirm
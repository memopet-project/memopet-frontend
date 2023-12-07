import WriteSVG from '@/public/svg/write.svg'

const WriteBtn = () => {
  return (
    <button 
      className='px-5 py-1 rounded-full bg-gray02 hover:bg-gray03 text-gray06 flex items-center h-[40px]'
    >
      <WriteSVG className='mr-1'/>한마디 남기기
    </button>
  )
}

export default WriteBtn
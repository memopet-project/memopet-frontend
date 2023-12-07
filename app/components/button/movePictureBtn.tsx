import PicRightSVG from '@/public/svg/picRight.svg'

const MovePictureBtn = () => {
  return (
    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-solid border-gray07 bg-gray02 hover:bg-gray03">
      <PicRightSVG />
    </button>
  )
}

export default MovePictureBtn
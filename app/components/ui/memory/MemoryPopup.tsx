import Image from "next/image";
import Devider from "../../template/Devider";
import IconBtn from "../button/IconBtn";
import MemoryActionBtn from "./MemoryActionBtn";

interface Props {
  open: boolean;
  onClose?: () => void;
}

const MemoryPopup = ({ open, onClose }: Props) => {
  return (
    <div
      // onClick={onClose}
      className="z-[60] fixed top-0 left-0 w-screen h-screen bg-[#00000030] flex justify-center items-center"
    >
      <div
        // onClick={(e) => e.stopPropagation()}
        className="w-[864px] h-[640px] bg-white border border-[#525252] rounded-2xl p-5 flex gap-6 relative"
      >
        <div className="absolute top-4 right-3">
          <IconBtn icon="close" />
        </div>
        <div className="w-[400px] flex items-center">
          <img
            src="/images/memory/2.jpeg"
            alt="photo"
            className="rounded-lg object-contain w-full"
          />
        </div>
        <div className="flex flex-col justify-end gap-2">
          <div className="py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[13px] text-[#949494]">2023. 05. 24.</p>
              <p className="text-lg font-bold">입만 웃는 기묘한 뇨속..</p>
            </div>
            <p className="whitespace-pre-wrap">
              어제 복실이랑 또아 인증샷 찍는데 끼어든 ’입만 웃는 그놈‘ 그리고
              끝까지 카메라에 나오려고 애쓰는 짱플루언서…{"\n\n"}“그 애는 항상
              웃고 있었어요, 근데 눈은 웃질 않았죠… 기묘한 아이였어요…🙂”
            </p>
          </div>
          <Devider />
          <div className="py-2 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <MemoryActionBtn type="flower" amount={123} />
              <MemoryActionBtn type="comment" amount={123} />
              <button>
                <Image
                  src={`/svg/share.svg`}
                  alt="share"
                  width={24}
                  height={24}
                  objectFit="contain"
                />
              </button>
            </div>
            <IconBtn icon="moreVertical" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryPopup;

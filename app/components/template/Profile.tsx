import FavoriteTag from "../ui/profile/FavoriteTag";

const Profile = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-white">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold">코코</span>
            <div className="flex items-center gap-2">
              <button className="h-10 flex items-center gap-2 border border-white py-1 px-6 rounded-[999px]">
                <span>icon</span>
                <span>123</span>
              </button>
              <button className="w-10 h-10">∙∙∙</button>
            </div>
          </div>
          <ul className="flex items-center gap-2 opacity-60">
            <li>웰시코기</li>
            <li className="bg-white w-px h-4"></li>
            <li>성별</li>
            <li className="bg-white w-px h-4"></li>
            <li>2007. 03. 24. -</li>
          </ul>
          <p className="whitespace-pre-wrap text-lg">
            마이 네임 이즈 코코. 해버 굿 데이. 땡쿠.{"\n"}max height : 54px
            (최대 2줄) / 고정 width : 560px
          </p>
        </div>
        <ul className="flex gap-2">
          <li>
            <FavoriteTag bgColor="#FF91B9">꽃냄새_맡기</FavoriteTag>
          </li>
          <li>
            <FavoriteTag bgColor="#73E390">무한산책</FavoriteTag>
          </li>
          <li>
            <FavoriteTag bgColor="#FFD223">눈밭에서_뒹굴기</FavoriteTag>
          </li>
        </ul>
      </div>
      <div className="w-80 h-80 flex justify-center items-center">photo</div>
    </div>
  );
};

export default Profile;

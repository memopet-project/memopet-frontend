import Banner from "@/app/components/template/Banner";
import Comments from "@/app/components/template/Comments";
import Devider from "@/app/components/template/Devider";
import Memories from "@/app/components/template/Memories";
import Profile from "@/app/components/template/Profile";

const TemplatePage = () => {
  return (
    <div className="flex justify-center pt-20 bg-[#F7F5F1]">
      <Banner />
      <div className="w-[1160px] px-4 z-10 text-[#171717] flex flex-col gap-10">
        <Profile />
        <Comments />
        <Devider />
        <Memories />
      </div>
    </div>
  );
};

export default TemplatePage;

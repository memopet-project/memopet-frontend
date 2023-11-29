import RoundedBtn from "./components/button/roundedBtn";
import Header from "./components/header/header";
import CommentAll from "./components/modal/commentAll";
import CommentEach from "./components/modal/commentEach";
import ReplyComponent from "./components/modal/reply";

/** 메인 페이지 */
export default function Home() {
  return (
    <main className="h-[2000px]">
      {/* <Header /> */}
      {/* <ReplyComponent /> */}
      <CommentAll />
    </main>
  )
}

import CommentEach from "./commentEach"


const CommentAll = () => {
  return (
    <div className="border border-solid px-6 py-8 flex flex-col gap-6 bg-white">
      <div className="items-center text-2xl font-bold">
        <span className="text-borderBlack">따뜻한 한마디</span>
        <span className="text-mainRed ml-2">48</span>
      </div>
      <section className="p-6 w-full h-[480px] gap-6 bg-surfaceComment flex flex-col">
        <CommentEach commentor="콜리" comment="안녕 코코야 ^_^"/>
        <CommentEach commentor="소금이" comment="안녕 코코야 :)"/>
      </section>
    </div>
  )
}

export default CommentAll
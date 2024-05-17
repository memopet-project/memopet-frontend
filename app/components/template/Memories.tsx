import MemoryItem from "../memory/MemoryItem";
import Timeline from "../ui/dropdown/Timeline";
import Months from "./Months";

const Memories = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex gap-2">
          <span>모든 추억</span>
          <span className="text-[#F15139]">115</span>
        </h2>
        <Timeline />
      </div>
      <div className="relative">
        <ul className="grid grid-cols-3 gap-6">
          <li>
            <MemoryItem
              thumb="/images/memory/1.png"
              date="2023. 05. 24."
              title="입만 웃는 기묘한 녀석"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/2.jpeg"
              date="2023. 04. 21."
              title="코코야 여기 좀 봐줘..코코야 여기 좀 봐줘..코코야 여기 좀 봐줘..코코야 여기 좀 봐줘..코코야 여기 좀"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/3.jpeg"
              date="2023. 04. 01."
              title="코오...잘 잔다..."
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/4.jpeg"
              date="2023. 03. 16."
              title="욜~ 분위기 있어~"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/5.jpeg"
              date="2023. 02. 01."
              title="간식이 제일 쭈아!"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/6.jpeg"
              date="2023. 01. 31."
              title="겨울이니까 분위기 쫌 내보까ㅎ"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/7.jpeg"
              date="2022. 12. 01."
              title="코코는 늠름해"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/8.jpeg"
              date="2022. 10. 31."
              title="단풍놀이"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/9.jpeg"
              date="2022. 09. 21."
              title="하트 뿜뿜"
            />
          </li>
          <li>
            <MemoryItem
              thumb="/images/memory/10.jpeg"
              date="2022. 09. 10."
              title="가취가욥~~~"
            />
          </li>
        </ul>
        <div className="absolute top-0 right-[-64px]">
          <Months />
        </div>
      </div>
    </div>
  );
};

export default Memories;

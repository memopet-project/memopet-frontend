type ButtonProps = {
  text: string
  bgColor: "red" | "blue"

}
const ButtonDefault = ({
  text,
  bgColor
}:ButtonProps) => {
  return (
    <div>
      <button className={`p-5 ${bgColor==='red' ? 'bg-red-300' : 'bg-blue-300'} text-white`}>{text}</button>
    </div>
  )
}

export default ButtonDefault
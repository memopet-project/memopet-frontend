import Edit from "@/public/svg/edit.svg";
import Bell from "@/public/svg/bell.svg";
import Image from "next/image";

type Props = {
  iconContainerClass: string
}

const Login = ({ iconContainerClass }: Props) => {
  return (
    <>
      <li className={iconContainerClass}>
        <Bell className="text-gray07" />
      </li>
      <li>
        <Image width={40} height={40} src={""} alt="user" className="border border-gray07 mx-2 rounded-full" />
      </li>
      <li className="ml-3">
        <button className="flex font-semibold text-base text-white bg-red05 px-5 py-2 flex-nowrap whitespace-nowrap rounded-full items-center justify-between">
          <Edit className="w-6 h-6 text-white mr-2" /> 추억 올리기
        </button>
      </li>
    </>
  )
}

export default Login
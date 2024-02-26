type ButtonGroup = {
  color: string;
  onClick: ()=> void;
  label: string;
  display?: boolean;
}

type ButtonProps = {
  buttonGroup: ButtonGroup[]
}

const ActionBtn = ({ buttonGroup }: ButtonProps) => {
  const buttons = buttonGroup.filter((btn) => btn.display !== false)

  return (
    <div className='border border-gray05 rounded-lg px-3 py-2 flex flex-row flex-nowrap items-center w-fit shadow-[0px_2px_4px_0px_#0000000D]'>
      {buttons.map(
        (btn, idx) => (
          <>
            <span className={`text-${btn.color} text-sm py-[3.5px] px-2 cursor-pointer`}>{btn.label}</span>
            {
              ((buttons.length - 1) !== idx) && 
                <div className='bg-gray03 h-3 w-[1px] min-w-[1px] mx-[2px]'></div>
            }
          </>
        )
      )}
    </div>
  )
}

export default ActionBtn
import common from '@/styles/common';

const WritingIcon = ({
  color = common.colors.gray[900],
  size = 24,
}: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 21H21'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4.5 13.5L14.5 3.49998C15.3284 2.67155 16.6716 2.67155 17.5 3.49998C18.3284 4.32841 18.3284 5.67155 17.5 6.49998L7.5 16.5L3.5 17.5L4.5 13.5Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default WritingIcon;

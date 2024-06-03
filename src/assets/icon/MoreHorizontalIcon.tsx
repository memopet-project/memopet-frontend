import common from '@/styles/common';

const MoreHorizontalIcon = ({
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
        d='M6 13.25C6.69036 13.25 7.25 12.6904 7.25 12C7.25 11.3096 6.69036 10.75 6 10.75C5.30964 10.75 4.75 11.3096 4.75 12C4.75 12.6904 5.30964 13.25 6 13.25Z'
        fill={color}
      />
      <path
        d='M12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z'
        fill={color}
      />
      <path
        d='M18 13.25C18.6904 13.25 19.25 12.6904 19.25 12C19.25 11.3096 18.6904 10.75 18 10.75C17.3096 10.75 16.75 11.3096 16.75 12C16.75 12.6904 17.3096 13.25 18 13.25Z'
        fill={color}
      />
    </svg>
  );
};

export default MoreHorizontalIcon;

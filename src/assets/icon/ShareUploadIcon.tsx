import common from '@/styles/common';

const ShareUploadIcon = ({
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
        d='M4 13.5V18.75C4 19.7165 4.79594 20.5 5.77778 20.5H18.2222C19.2041 20.5 20 19.7165 20 18.75V13.5'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 15.5V3.5M12 3.5L7.5 8.16668M12 3.5L16.5 8.16666'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ShareUploadIcon;

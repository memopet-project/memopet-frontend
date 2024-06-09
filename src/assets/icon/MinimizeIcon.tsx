const MinimizeIcon = ({
  color = 'var(--grey-900)',
  size = 24,
}: IconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5 13.5L3 21M10.5 13.5V19.1M10.5 13.5H4.9'
        stroke={color}
        stroke-opacity='0.95'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M13.5 10.5L21 3M13.5 10.5V4.84315M13.5 10.5H19.1568'
        stroke={color}
        stroke-opacity='0.95'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default MinimizeIcon;

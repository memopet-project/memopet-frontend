const MaximizeIcon = ({
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
        d='M3 21L10.5 13.5M3 21V15.4M3 21H8.6'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M21.0711 3L13.5 10.5M21.0711 3V8.65685M21.0711 3H15.4142'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default MaximizeIcon;

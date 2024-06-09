const LogoutIcon = ({
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
        d='M9 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H9'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
      />
      <path
        d='M3 12H13M13 12L9.11111 8M13 12L9.11111 16'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default LogoutIcon;

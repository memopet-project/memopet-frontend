const ChangeIcon = ({ color = 'var(--grey-900)', size = 24 }: IIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.7769 14C19.8674 18.008 16.2831 21 11.9999 21C7.71671 21 4.13236 18.008 3.2229 14M3.2229 14L2 17M3.2229 14L6 15.5M3.2229 10C4.13236 5.99202 7.71671 3 11.9999 3C16.2831 3 19.8674 5.99202 20.7769 10M20.7769 10L18 8.5M20.7769 10L22 7'
        stroke='black'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ChangeIcon;

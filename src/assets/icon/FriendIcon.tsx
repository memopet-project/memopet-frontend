const FriendIcon = ({
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16 8.5C17.3807 8.5 18.5 7.38071 18.5 6C18.5 4.61929 17.3807 3.5 16 3.5C14.6193 3.5 13.5 4.61929 13.5 6C13.5 7.38071 14.6193 8.5 16 8.5ZM16 10C18.2091 10 20 8.20914 20 6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6C12 8.20914 13.7909 10 16 10Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.4816 12.5763C12.3924 12.6421 12.2354 12.5284 12.2705 12.4233C12.4195 11.9759 12.5002 11.4974 12.5002 11C12.5002 10.8919 12.5593 10.7911 12.658 10.7471C13.3734 10.4276 14.1661 10.25 15.0002 10.25H17.0002C20.1758 10.25 22.7502 12.8244 22.7502 16C22.7502 16.4142 22.4144 16.75 22.0002 16.75C21.586 16.75 21.2502 16.4142 21.2502 16C21.2502 13.6528 19.3474 11.75 17.0002 11.75H15.0002C14.0575 11.75 13.1864 12.0569 12.4816 12.5763Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8 13.5C9.38071 13.5 10.5 12.3807 10.5 11C10.5 9.61929 9.38071 8.5 8 8.5C6.61929 8.5 5.5 9.61929 5.5 11C5.5 12.3807 6.61929 13.5 8 13.5ZM8 15C10.2091 15 12 13.2091 12 11C12 8.79086 10.2091 7 8 7C5.79086 7 4 8.79086 4 11C4 13.2091 5.79086 15 8 15Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M1.25 21C1.25 17.8244 3.82436 15.25 7 15.25H9C12.1756 15.25 14.75 17.8244 14.75 21C14.75 21.4142 14.4142 21.75 14 21.75C13.5858 21.75 13.25 21.4142 13.25 21C13.25 18.6528 11.3472 16.75 9 16.75H7C4.65279 16.75 2.75 18.6528 2.75 21C2.75 21.4142 2.41421 21.75 2 21.75C1.58579 21.75 1.25 21.4142 1.25 21Z'
        fill={color}
      />
    </svg>
  );
};

export default FriendIcon;
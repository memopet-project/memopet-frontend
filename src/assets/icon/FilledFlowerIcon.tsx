import common from '@/styles/common';

const FilledFlowerIcon = ({
  color = common.colors.gray[900],
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
        d='M11.6918 11.8671L7.31999 7.31462C6.08858 6.03234 6.16612 3.92978 7.48835 2.74961C8.8001 1.57878 10.789 1.80614 11.8256 3.2454L11.9999 3.48736L12.1742 3.2454C13.2108 1.80614 15.1997 1.57878 16.5115 2.74961C17.8337 3.92978 17.9113 6.03234 16.6798 7.31462L12.308 11.8671C12.1379 12.0443 11.862 12.0443 11.6918 11.8671Z'
        fill='#F15139'
        stroke='#171717'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.3082 12.1329L16.68 16.6854C17.9114 17.9677 17.8339 20.0702 16.5116 21.2504C15.1999 22.4212 13.211 22.1939 12.1744 20.7546L12.0001 20.5126L11.8258 20.7546C10.7892 22.1939 8.80028 22.4212 7.48849 21.2504C6.16627 20.0702 6.08871 17.9677 7.32016 16.6854L11.692 12.1329C11.8621 11.9557 12.138 11.9557 12.3082 12.1329Z'
        fill='#F15139'
        stroke='#171717'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M11.8671 12.3081L7.31462 16.6799C6.03234 17.9113 3.92978 17.8338 2.74961 16.5115C1.57878 15.1998 1.80614 13.2108 3.2454 12.1742L3.48736 12L3.2454 11.8257C1.80614 10.7891 1.57878 8.80016 2.74961 7.48837C3.92978 6.16614 6.03234 6.08859 7.31462 7.32004L11.8671 11.6918C12.0443 11.862 12.0443 12.1379 11.8671 12.3081Z'
        fill='#F15139'
        stroke='#171717'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.1329 11.6919L16.6854 7.32011C17.9677 6.0887 20.0702 6.16624 21.2504 7.48847C22.4212 8.80022 22.1939 10.7892 20.7546 11.8258L20.5126 12L20.7546 12.1743C22.1939 13.2109 22.4212 15.1998 21.2504 16.5116C20.0702 17.8339 17.9677 17.9114 16.6854 16.68L12.1329 12.3082C11.9557 12.138 11.9557 11.8621 12.1329 11.6919Z'
        fill='#F15139'
        stroke='#171717'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92894 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92894 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z'
        fill='#FFD223'
        stroke='#171717'
        stroke-width='1.5'
      />
    </svg>
  );
};

export default FilledFlowerIcon;

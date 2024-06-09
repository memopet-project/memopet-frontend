import IconButton from './IconButton';
import Image from 'next/image';
import arrowNextIcon from '@/assets/icon/arrowNextIcon.png';
import arrowPrevIcon from '@/assets/icon/arrowPrevIcon.png';

interface PropsType {
  type: 'prev' | 'next';
}

const PhotoArrowButton = ({ type }: PropsType) => {
  return (
    <IconButton>
      <Image
        src={type === 'prev' ? arrowPrevIcon : arrowNextIcon}
        alt={type}
        width={24}
        height={24}
      />
    </IconButton>
  );
};

export default PhotoArrowButton;

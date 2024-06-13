import { css } from '@emotion/react';

export type TProfileShape =
  | 'oval1'
  | 'oval2'
  | 'circle'
  | 'rectangle1'
  | 'rectangle2'
  | 'square'
  | 'diamond'
  | 'clover'
  | 'love'
  | 'blob1'
  | 'blob2'
  | 'blob3'
  | 'blob4';

interface IMainUserProfileProps {
  shape: TProfileShape;
  size: 'lg' | 'md' | 'sm';
  isMobile?: boolean;
}

const styles1 = {
  oval1: {
    lg: {
      width: '240px',
    },
    md: {
      width: '200px',
    },
    sm: {
      width: '180px',
    },
  },
  oval2: {
    lg: {
      width: '320px',
    },
    md: {
      width: '280px',
    },
    sm: {
      width: '250px',
    },
  },
  circle: {
    lg: {
      width: '280px',
    },
    md: {
      width: '240px',
    },
    sm: {
      width: '220px',
    },
  },
  rectangle1: {
    lg: {
      width: '200px',
      height: '300px',
    },
    md: {
      width: '184px',
      height: '264px',
    },
    sm: {
      width: '164px',
    },
  },
  rectangle2: {
    lg: {
      width: '300px',
      height: '200px',
    },
    md: {
      width: '264px',
      height: '184px',
    },
    sm: {
      width: '236px',
      height: '!64px',
    },
  },
  square: {
    lg: {
      width: '260px',
      height: '260px',
    },
    md: {
      width: '224px',
      height: '224px',
    },
    sm: {
      width: '200px',
      height: '200px',
    },
  },
  diamond: {
    lg: {
      width: '240px',
    },
    md: {
      width: '200px',
    },
    sm: {
      width: '180px',
    },
  },
  clover: {
    lg: {
      width: '300px',
    },
    md: {
      width: '256px',
    },
    sm: {
      width: '228px',
    },
  },
  love: {
    lg: {
      width: '280px',
    },
    md: {
      width: '256px',
    },
    sm: {
      width: '228px',
    },
  },
  blob1: {
    lg: {
      width: '280px',
    },
    md: {
      width: '248px',
    },
    sm: {
      width: '220px',
    },
  },
  blob2: {
    lg: {
      width: '300px',
    },
    md: {
      width: '256px',
    },
    sm: {
      width: '228px',
    },
  },
  blob3: {
    lg: {
      width: '260px',
    },
    md: {
      width: '216px',
    },
    sm: {
      width: '192px',
    },
  },
  blob4: {
    lg: {
      width: '320px',
    },
    md: {
      width: '264px',
    },
    sm: {
      width: '236px',
    },
  },
};

const styles2 = {
  lg: {
    container: '400px',
  },
  md: {
    container: '360px',
  },
  sm: {
    container: '320px',
  },
};
// mobile img size
const styles3 = {
  oval1: {
    md: {
      width: '135px',
    },
    sm: {
      width: '90px',
    },
  },
  oval2: {
    md: {
      width: '187.5px',
    },
    sm: {
      width: '125px',
    },
  },
  circle: {
    md: {
      width: '165px',
    },
    sm: {
      width: '110px',
    },
  },
  rectangle1: {
    md: {
      width: '123px',
    },
    sm: {
      width: '82px',
    },
  },
  rectangle2: {
    md: {
      width: '177px',
    },
    sm: {
      width: '118px',
    },
  },
  square: {
    md: {
      width: '150px',
    },
    sm: {
      width: '100px',
    },
  },
  diamond: {
    md: {
      width: '135px',
    },
    sm: {
      width: '90px',
    },
  },
  clover: {
    md: {
      width: '171px',
    },
    sm: {
      width: '114px',
    },
  },
  love: {
    md: {
      width: '171px',
    },
    sm: {
      width: '114px',
    },
  },
  blob1: {
    md: {
      width: '165px',
    },
    sm: {
      width: '110px',
    },
  },
  blob2: {
    md: {
      width: '171px',
    },
    sm: {
      width: '114px',
    },
  },
  blob3: {
    md: {
      width: '144px',
    },
    sm: {
      width: '96px',
    },
  },
  blob4: {
    md: {
      width: '177px',
    },
    sm: {
      width: '118px',
    },
  },
};
// mobile container
const styles4 = {
  md: {
    container: '240px',
  },
  sm: {
    container: '160px',
  },
};

const MainUserProfile: React.FC<IMainUserProfileProps> = ({
  shape = 'oval1',
  size = 'lg',
  isMobile = false,
}) => {
  const isRectangle = Boolean(
    shape === 'rectangle1' || shape === 'rectangle2' || shape === 'square',
  );

  return (
    <div
      css={css`
        position: relative;
        width: ${isMobile ? styles4[size].container : styles2[size].container};
        height: ${isMobile ? styles4[size].container : styles2[size].container};
        overflow: hidden;
      `}
    >
      <img
        src='https://i.namu.wiki/i/y6W0OH7GqooENkCR85O2s1sfbN3F9iC7KTk2goSwgpSFdKNyLVzgHCGB_PPWzfckLKfq-sjxdTyAFwZKEAUlI7F4ZgIseBrfQFPtcj1oPi2Z8u2aZbaayfy_hXJYmiI89ZvVZVR49VUFZlVASFOZXQ.webp'
        alt='img'
        css={css`
          width: 100%;
          height: 100%;
          -webkit-mask-image: url('/profile-frame/shape-${shape}.png');
          -webkit-mask-position: center center;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: ${isMobile
              ? styles3[shape][size].width
              : styles1[shape][size].width}
            ${isRectangle ? styles1[shape][size]['height'] : ''};
        `}
      />
      {isRectangle ? (
        <div
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: ${styles1[shape][size].width};
            height: ${styles1[shape][size]['height']};
            border: 2px solid var(--grey-900);
          `}
        />
      ) : (
        <img
          alt='frame'
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: ${isMobile
              ? styles3[shape][size].width
              : styles1[shape][size].width};
          `}
          src={`/profile-frame/frame-${shape}.png`}
        />
      )}
    </div>
  );
};

export default MainUserProfile;

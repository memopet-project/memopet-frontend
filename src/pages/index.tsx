import Image from 'next/image';
import BannerImage from '@/assets/images/slideBanner.png';
import BannerImage2 from '@/assets/images/slideBanner2.png';
import { css, useTheme } from '@emotion/react';
import ThemedText from '@/components/atoms/ThemedText';
import RollingScrollBanner from '@/components/organisms/RollingScrollBanner';

export default function Home() {
  const theme = useTheme();

  return (
    <div
      css={css`
        color: var(--grey-900);
        background: ${theme.colors.primary['100']};
        height: calc(100vh - 96px);
      `}
    >
      <div css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
        margin: 0 auto;
      `}>
        <ThemedText type={'displaySmall'}>환영합니다.</ThemedText>
        <ThemedText
          css={css`
            text-align: center;
          `}
          type={'bodyLarge'}
        >
          memopet의 소중한 회원이 되어주셔서 감사합니다! <br />
          간단히 프로필을 만들고 반려동물과의 추억을 공유해 보세요
        </ThemedText>
      </div>
      <RollingScrollBanner
        css={css`
          height: 442px;
        `}
      />
    </div>
  );
}

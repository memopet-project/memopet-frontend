import { css, useTheme } from '@emotion/react';
import ThemedText from '@/components/atoms/ThemedText';
import RollingScrollBanner from '@/components/organisms/RollingScrollBanner';
import MainButton from '@/components/atoms/buttons/MainButton';

export default function Home() {
  const theme = useTheme();

  return (
    <div
      css={css`
        color: var(--grey-900);
        height: calc(100vh - 96px);
      `}
    >
      <div css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 160px 0 0;
        margin: 0 auto;
      `}>
        <div css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 32px;
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
        <MainButton
          type={'filled'}
          // onClick={() => {
          //   console.log('프로필 만들기 버튼 클릭');
          // }}
          // css={css`
          //   width: 320px;
          // `}
        >
          프로필 만들기
        </MainButton>
      </div>
      <RollingScrollBanner
        css={css`
          height: 442px;
          margin-top: 120px;
        `}
      />
    </div>
  );
}

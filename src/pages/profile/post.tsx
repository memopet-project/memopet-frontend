import React from 'react';
import Image from 'next/image';
import ClipSVG from '@/assets/images/clip.svg';
import { css, useTheme } from '@emotion/react';
import Logo from '@/components/atoms/Logo';
import PostProfile from '@/components/organisms/profile/PostProfile';

const Post = () => {

  return (
    <div css={css`
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 48px;
      gap: 72px;
    `}>
      <Logo color={'grey'} size={'md'} />
      <section css={css`
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 64px 20px 32px 20px;
        border: 1px solid #1717171A;
        border-radius: 16px;
        position: relative;
        box-shadow: 0 2px 0 0 #00000000;
        background: #ffffff;
        align-items: center;
        min-width: 520px;
      `}>
        <Image
          src={ClipSVG}
          alt={'clip image'}
          css={css`
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            top: -36px;
          `}
          priority={true}
        />
        <PostProfile />
      </section>
    </div>
  );
};

export default Post;
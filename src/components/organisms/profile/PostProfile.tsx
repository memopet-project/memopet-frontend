'use client';

import React from 'react';
import { useRecoilState } from 'recoil';
import { postProfileStepState } from '@/recoil/store';
import ProgressIndicatorDot from '@/components/atoms/ProgressIndicatorDot';
import ProfileMoveButton from '@/components/atoms/buttons/ProfileMoveButton';
import { css } from '@emotion/react';
import ThemedText from '@/components/atoms/ThemedText';


const headerText = {
  1: '반려동물의 이름과 종류를 알려주세요',
};

const PostProfile = () => {
  const [postProfileStep, setPostProfileStep] = useRecoilState(postProfileStepState);

  console.log(postProfileStep);
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      gap: 3rem;
    `}>
      <div css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      `}>
        <ThemedText type={'titleMedium'}>{headerText[postProfileStep.step]}</ThemedText>
      </div>

      {postProfileStep.step === 1}


      <div css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
      `}>
        <ProfileMoveButton type={'prev'} disabled={true} />
        <div css={css`
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        `}>
          {Array.from({ length: postProfileStep.maxStep }).map((_, index) => (
            <ProgressIndicatorDot
              type={index + 1 === postProfileStep.step ? 'primaryPresent' : (index + 1 < postProfileStep.step ? 'primaryAfter' : 'greyAfter')}
              key={index}
              cssStyle={css`
                position: relative;
              `}
            />
          ))}
        </div>
        <ProfileMoveButton type={'next'} disabled={true} />
      </div>

    </div>
  );
};

export default PostProfile;

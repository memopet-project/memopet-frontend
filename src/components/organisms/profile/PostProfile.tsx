'use client';

import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { firstStep, postProfileStepState } from '@/recoil/store';
import ProgressIndicatorDot from '@/components/atoms/ProgressIndicatorDot';
import ProfileMoveButton from '@/components/atoms/buttons/ProfileMoveButton';
import { css } from '@emotion/react';
import ThemedText from '@/components/atoms/ThemedText';
import ProfileSettingStep1 from '@/components/organisms/profile/ProfileSettingStep1';
import { theme } from '@/types/theme';

type Props = {
  isMobile: boolean;
}

const headerText = {
  1: '반려동물의 이름과 종류를 알려주세요',
};

const PostProfile = ({ isMobile }: Props) => {
  const [postProfileStep, setPostProfileStep] = useRecoilState(postProfileStepState);
  const firstStepState = useRecoilValue(firstStep);

  const buttonDisabled = (type: 'prev' | 'next') => {
    if (type === 'prev') {
      return postProfileStep.step === 1;
    } else {
      if (postProfileStep.step === 1) {
        return !firstStepState.petName || !firstStepState.petSpecM || !firstStepState.petSpecS;
      }
      return postProfileStep.step === postProfileStep.maxStep;
    }
  };

  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      gap: 3rem;
      @media ${theme.device.mobile} {
        padding: 4rem 20px 0 20px;
        gap: 2rem;
        align-items: flex-start;
        justify-content: flex-start;
      }
    `}>
      <div css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        @media ${theme.device.mobile} {
          align-items: flex-start;
        }
      `}>
        <ThemedText type={'titleMedium'}>{headerText[postProfileStep.step]}</ThemedText>
      </div>

      {postProfileStep.step === 1 && <ProfileSettingStep1 isMobile={isMobile} />}

      <div css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        @media ${theme.device.mobile} {
          width: 100%;
          position: fixed;
          left: 0;
          bottom: 40px;
        }
      `}>
        <ProfileMoveButton
          type={'prev'}
          disabled={buttonDisabled('prev')}
          onClick={() => {
            setPostProfileStep({
              ...postProfileStep,
              step: postProfileStep.step - 1,
            });
          }}
        />
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
        <ProfileMoveButton
          type={'next'}
          disabled={buttonDisabled('next')}
          onClick={() => {
            setPostProfileStep({
              ...postProfileStep,
              step: postProfileStep.step + 1,
            });
          }}
        />
      </div>

    </div>
  );
};

export default PostProfile;

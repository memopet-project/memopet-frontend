'use client';

import React, { useState } from 'react';
import ArrowLeftSVG from '@/public/svg/arrowLeft.svg';
import DefaultInputField from '@/app/components/molecules/fieldset/defaultInputField';
import PetTypeForm from '@/app/components/organisms/petTypeForm';
import regex from '@/app/constants/regex';
import { TIndicatorStep, TInputState } from '@/types/common';
import IconBase from '@/app/components/atom/icon/iconBase';
import ClipSVG from '@/public/svg/clip.svg';
import { useRecoilState } from 'recoil';
import { indicatorState } from '@/app/recoil/recoilContextProvider';

type TFirstStep = {
  petName: string;
  petType: string;
}

const Page = () => {
  // next 버튼 활성화 여부 useState
  const [nextBtnActive, setNextBtnActive] = useState<boolean>(false);
  const [val, setVal] = useState('');
  const [petNameValidate, setPetNameValidate] = useState<TInputState>({ state: 'default', msg: '' });
  const [step, setStep] = useRecoilState<TIndicatorStep>(indicatorState);
  const [firstStep, setFirstStep] = useState<TFirstStep>({
    petName: '',
    petType: '',
  });

  const nextBtnClass = (cur: number) => {
    let common = 'flex gap-2 items-center justify-center';
    if (cur === step.maxStep) return `${common} ${val.length === 0 ? 'opacity-0 pointer-events-none' : ''}`;
    if (!nextBtnActive) return `${common} pointer-events-none`;
    return common;
  };

  const textColorType = (textColor: string): string => {
    switch (textColor) {
      case 'black':
        return 'text-gray07 stroke-gray07';
      case 'gray':
        return 'text-gray04 stroke-gray04';
      case 'red':
        return 'text-red05 stroke-red05';
      case 'white':
        return 'text-white stroke-white';
      default:
        return '';
    }
  };

  const onBlur = () => {
    const validate = regex.petName.test(val);

    if (!validate) {
      setPetNameValidate({
        state: 'error', msg: (
          <div className="flex">
            <IconBase
              src={'/svg/icon-error.svg'}
              alt={'errorIcon'}
              width={16}
              height={16}
              size={'md'}
            />
            <span className="text-errorRed">한글 또는 영문만 입력할 수 있어요.</span>
          </div>
        ),
      });
      return;
    } else {
      setPetNameValidate({
        state: 'default',
        msg: '',
      });
    }
  };

  const handleCurrentStep = (direction: 'prev' | 'next') => {
    if (step.currentStep === step.maxStep && direction === 'next') return;
    if (step.currentStep === 1 && direction === 'prev') return;

    if (direction === 'prev') {
      setStep({ ...step, currentStep: step.currentStep - 1 });
      return;
    }

    if (direction === 'next') {
      setStep({ ...step, currentStep: step.currentStep + 1 });
      return;
    }
  };

  return (
    <div className="bg-white border border-[#17171710] w-[520px] form-shadow rounded-2xl relative pb-8">
      <ClipSVG className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3" />
      <div className="flex flex-col gap-8 px-20">
        <h2 className="font-bold text-2xl inline-block mt-16">반려동물의 이름과 종류를 알려주세요</h2>
        {step.currentStep === 1 && (
          <>
            <DefaultInputField
              label="이름"
              placeholder="한글 또는 영문만 입력해주세요."
              value={val}
              onChange={(value) => setVal(value)}
              type={'text'}
              name={'name'}
              state={petNameValidate.state}
              description={petNameValidate.msg}
              onBlur={onBlur}
            />
            <PetTypeForm />
          </>
        )}
      </div>
      <div className="w-full px-5 mt-12 flex">
        <button
          className="flex gap-2 items-center justify-center"
          onClick={() => handleCurrentStep('prev')}
        >
          <ArrowLeftSVG className={`${textColorType('gray')}`} />
          <span className={textColorType('gray')}>이전</span>
        </button>
        <div className="flex-grow flex justify-center items-center">
          {Array.from({ length: step.maxStep }).map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${step.currentStep === idx + 1 ? 'bg-[#F15139]' : step.currentStep > idx + 1 ? 'bg-[#F69888]' : 'bg-[#E3E3E3]'} mx-1`}
            />
          ))}
        </div>
        <button
          className={nextBtnClass(step.currentStep)}
          onClick={() => handleCurrentStep('next')}
        >
          <span className={textColorType(nextBtnActive ? 'red' : 'gray')}>다음</span>
          <ArrowLeftSVG className={`rotate-180 ${textColorType(nextBtnActive ? 'red' : 'gray')}`} />
        </button>
      </div>
    </div>
  );
};

export default Page;

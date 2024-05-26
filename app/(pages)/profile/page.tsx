'use client';

import React, { useState } from 'react';
import ArrowLeftSVG from '@/public/svg/arrowLeft.svg';
import ClipSVG from '@/public/svg/clip.svg';
import { TIndicatorStep } from '@/types/common';
import { useRecoilState } from 'recoil';
import { indicatorState, petTypeState } from '@/app/recoil/recoilContextProvider';
import PetProfileStep1Template from '@/app/components/templates/petProfileStep1Template';
import PetProfileStep2Template from '@/app/components/templates/petProfileStep2Template';
import { TPetTypeParam } from '@/types/petProfile';
import PetProfileStep3Template from '@/app/components/templates/petProfileStep3Template';
import dynamic from 'next/dynamic';

const Page = () => {
  // next 버튼 활성화 여부 useState
  const [nextBtnActive, setNextBtnActive] = useState<boolean>(false);
  const [step, setStep] = useRecoilState<TIndicatorStep>(indicatorState);
  const [petTypeParam, setPetTypeParam] = useRecoilState<TPetTypeParam>(petTypeState);


  const nextBtnClass = (cur: number) => {
    let common = 'flex gap-2 items-center justify-center';
    if (cur === step.maxStep) return `${common} ${petTypeParam.pet_spec_m.length === 0 ? 'opacity-0 pointer-events-none' : ''}`;
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
    <div
      className="bg-white h-screen md:h-auto mx-auto md:border md:border-[#17171710] md:w-[520px] md:form-shadow md:rounded-2xl relative md:pb-8">
      {window.innerWidth > 768 && (
        <ClipSVG className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3" />
      )}
      {step.currentStep === 1 && (
        <PetProfileStep1Template
          petTypeParam={petTypeParam}
          setPetTypeParam={setPetTypeParam}
          setNextBtnActive={setNextBtnActive}
        />
      )}
      {step.currentStep === 2 && (
        <PetProfileStep2Template
          petTypeParam={petTypeParam}
          setPetTypeParam={setPetTypeParam}
          setNextBtnActive={setNextBtnActive}
        />
      )}
      {step.currentStep === 3 && (
        <PetProfileStep3Template
          petTypeParam={petTypeParam}
          setPetTypeParam={setPetTypeParam}
          setNextBtnActive={setNextBtnActive}
        />
      )}
      <div
        className="h-[120px] fixed bottom-0 md:relative md:h-auto w-full px-5 md:mt-12 flex items-center justify-center">
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

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});

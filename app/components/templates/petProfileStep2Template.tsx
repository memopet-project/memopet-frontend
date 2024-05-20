'use client';

import React, { useEffect } from 'react';
import { TIndicatorStep } from '@/types/common';
import { TPetTypeParam } from '@/types/petProfile';

type Props = {
  step: TIndicatorStep;
  petTypeParam: TPetTypeParam;
  setPetTypeParam: (param: TPetTypeParam) => void;
  setNextBtnActive: (active: boolean) => void;
}

const PetProfileStep1Template = ({ step, setPetTypeParam, petTypeParam, setNextBtnActive }: Props) => {


  useEffect(() => {

  }, [petTypeParam.pet_gender, petTypeParam.birth_dt]);

  return (
    <div className="flex flex-col gap-8 px-20">
      <h2 className="font-bold text-2xl inline-block mt-16 text-center">{petTypeParam.pet_nm}의 성별과 생일을 알려주세요</h2>

    </div>
  );
};

export default PetProfileStep1Template;

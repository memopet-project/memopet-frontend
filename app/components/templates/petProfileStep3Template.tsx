'use client';

import React from 'react';
import { TPetTypeParam } from '@/types/petProfile';
import TextareaField from '@/app/components/molecules/textareaField';
import TagInput from '@/app/components/atom/tagInput';

type Props = {
  petTypeParam: TPetTypeParam;
  setPetTypeParam: (param: TPetTypeParam) => void;
  setNextBtnActive: (active: boolean) => void;
}

const PetProfileStep1Template = ({ setPetTypeParam, petTypeParam, setNextBtnActive }: Props) => {

  return (
    <div className="flex flex-col gap-8 px-20">
      <h2 className="font-bold text-2xl inline-block mt-16 text-center">반려동물의 이름과 종류를 알려주세요</h2>
      <TextareaField
        placeholder="간단한 소개글을 입력해 주세요"
        max={90}
        name="소개"
        id="pet-name"
        value={petTypeParam.pet_desc}
        onChange={(value) => {
          setPetTypeParam({
            ...petTypeParam,
            pet_desc: value,
          });
        }}
      />

      <div className="relative">
        <TagInput />

      </div>
    </div>
  );
};

export default PetProfileStep1Template;

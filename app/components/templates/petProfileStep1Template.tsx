'use client';

import React, { useEffect, useState } from 'react';
import DefaultInputField from '@/app/components/molecules/defaultInputField';
import PetSpeciesForm from '@/app/components/organisms/petSpeciesForm';
import { TInputState } from '@/types/common';
import { TPetTypeParam } from '@/types/petProfile';
import regex from '@/app/constants/regex';
import IconBase from '@/app/components/atom/icon/iconBase';

type Props = {
  petTypeParam: TPetTypeParam;
  setPetTypeParam: (param: TPetTypeParam) => void;
  setNextBtnActive: (active: boolean) => void;
}

const PetProfileStep1Template = ({ setPetTypeParam, petTypeParam, setNextBtnActive }: Props) => {
  const [petNameValidate, setPetNameValidate] = useState<TInputState>({ state: 'default', msg: '' });

  const onBlur = () => {
    const validate = regex.petName.test(petTypeParam.pet_nm);

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

  useEffect(() => {
    if (petNameValidate.state === 'error') return setNextBtnActive(false);

    if (petTypeParam.pet_nm.length > 0 && petTypeParam.pet_spec_m.length > 0) {
      console.log(petTypeParam.pet_spec_s.length, petTypeParam.dont_know);
      if (petTypeParam.pet_spec_s.length > 0 || petTypeParam.dont_know) {
        setNextBtnActive(true);
      } else {
        setNextBtnActive(false);
      }
    } else {
      setNextBtnActive(false);
    }
  }, [petTypeParam.pet_nm, petTypeParam.pet_spec_m, petTypeParam.pet_spec_s, petTypeParam.dont_know]);

  return (
    <div className="flex flex-col gap-8 px-20">
      <h2 className="font-bold text-2xl inline-block mt-16 text-center">반려동물의 이름과 종류를 알려주세요</h2>
      <DefaultInputField
        label="이름"
        placeholder="한글 또는 영문만 입력해주세요."
        value={petTypeParam.pet_nm}
        onChange={(value) => setPetTypeParam({ ...petTypeParam, pet_nm: value })}
        type={'text'}
        name={'name'}
        state={petNameValidate.state}
        description={petNameValidate.msg}
        onBlur={onBlur}
      />
      <PetSpeciesForm
        petTypeParam={petTypeParam}
        setPetTypeParam={setPetTypeParam}
      />
    </div>
  );
};

export default PetProfileStep1Template;

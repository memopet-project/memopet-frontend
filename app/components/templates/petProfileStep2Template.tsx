'use client';

import React, { useEffect } from 'react';
import { TPetTypeParam } from '@/types/petProfile';
import Calendar from '@/app/components/atom/calendar';
import LabeledCheckBox from '@/app/components/molecules/labeledCheckBox';

type Props = {
  petTypeParam: TPetTypeParam;
  setPetTypeParam: (param: TPetTypeParam) => void;
  setNextBtnActive: (active: boolean) => void;
}

type PetGender = {
  id: number;
  label: string;
}

const petGenders: PetGender[] = [
  {
    id: 1,
    label: '수컷',
  },
  {
    id: 2,
    label: '암컷',
  },
  {
    id: 3,
    label: '기타',
  },
];

const PetProfileStep1Template = ({ setPetTypeParam, petTypeParam, setNextBtnActive }: Props) => {

  const labelClass = (state: boolean): string => {
    let commonClass = 'h-[52px] w-full justify-center items-center relative flex border border-[#525252] rounded-[6px] cursor-pointer';

    if (state) return `${commonClass} bg-[#525252] text-white`;
    return `${commonClass} hover:bg-[#1717170D]`;
  };

  useEffect(() => {
    if (petTypeParam.pet_gender.length > 0) {
      setNextBtnActive(true);
    } else {
      setNextBtnActive(false);
    }
  }, [petTypeParam.pet_gender]);

  return (
    <div className="flex flex-col gap-8 px-20">
      <h2 className="font-bold text-2xl inline-block mt-16 text-center">{petTypeParam.pet_nm}의 성별과 생일을 알려주세요</h2>
      <div className="flex flex-col gap-8">
        <div role="group" className="flex flex-col gap-1">
          <legend className="inline-block mb-1">성별</legend>
          <div className="flex items-center gap-2">
            {petGenders.map((petGender: PetGender) => (
                <React.Fragment key={petGender.id}>
                  <input
                    type="radio"
                    name="petGender"
                    id={'petGender-' + petGender.id}
                    checked={petTypeParam.pet_gender === petGender.label}
                    onChange={() => {
                      setPetTypeParam({ ...petTypeParam, pet_gender: petGender.label });
                      document.getElementById('pet-birth')?.focus();
                    }}
                    className={'hidden'}
                  />
                  <label htmlFor={'petGender-' + petGender.id}
                         className={labelClass(petTypeParam.pet_gender === petGender.label)}>{petGender.label}</label>
                </React.Fragment>
              ),
            )}
          </div>
        </div>
        <div role="group" className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <legend className="inline-block">생일</legend>
            <div className="flex-grow border-t border-[#E6E6E6]"></div>
            <span className="text-sm text-[#949494]">알 수 없는 경우 건너뛰기</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar
              id={'pet-birth'}
              placeholder={'YYYY.MM.DD'}
              value={petTypeParam.birth_dt}
              onChange={(value) => setPetTypeParam({ ...petTypeParam, birth_dt: value })}
              onBlur={() => setNextBtnActive(true)}
              onFocus={() => {
                console.log('focus');
              }}
            />
            <div className="divide" />
            <Calendar
              id={'pet-death'}
              placeholder={'YYYY.MM.DD'}
              value={petTypeParam.death_dt}
              onChange={(value) => setPetTypeParam({ ...petTypeParam, death_dt: value })}
              onBlur={() => setNextBtnActive(true)}
              onFocus={() => {
                console.log('focus');
              }}
              disabled={!petTypeParam.is_dead}
            />
          </div>
          <div className="flex justify-end">
            <LabeledCheckBox
              id={'is-dead'}
              label={'무지개 다리를 건넜나요?'}
              checked={petTypeParam.is_dead}
              onChange={() => {
                setPetTypeParam({ ...petTypeParam, is_dead: !petTypeParam.is_dead });
                if (!petTypeParam.is_dead) {
                  document.getElementById('pet-death')?.focus();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
    ;
};

export default PetProfileStep1Template;

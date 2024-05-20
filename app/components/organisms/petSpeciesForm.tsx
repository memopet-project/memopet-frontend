'use client';

import React, { useState } from 'react';

import DogSVG from '@/public/svg/animal-type/dog.svg';
import CatSVG from '@/public/svg/animal-type/cat.svg';
import PiscesSVG from '@/public/svg/animal-type/pisces.svg';
import SmallAnimalSVG from '@/public/svg/animal-type/small_animal.svg';
import ReptileSVG from '@/public/svg/animal-type/reptile.svg';
import AmphibianSVG from '@/public/svg/animal-type/amphibian.svg';
import FootPrintSVG from '@/public/svg/animal-type/foot_print.svg';
import SelectBox from '@/app/components/atom/selectBox';
import { TPetType, TPetTypeParam } from '@/types/petProfile';
import IconBase from '@/app/components/atom/icon/iconBase';
import LabeledCheckBox from '@/app/components/molecules/labeledCheckBox';


export const petTypes: TPetType[] = [
  {
    id: 1,
    name: '강아지',
    icon: (className) => <DogSVG fill={className} />,
    species: ['푸들', '말티즈', '시츄', '요크셔테리어', '포메라니안', '치와와', '닥스훈트', '비글', '시바이누', '진돗개', '시베리안 허스키', '골든 리트리버', '래브라도 리트리버', '보더 콜리', '저먼 셰퍼드', '불독', '퍼그', '불테리어', '말라뮤트', '허스키', '말라노이즈', '프렌치 불독', '불리'],
  },
  {
    id: 2,
    name: '고양이',
    icon: (className) => <CatSVG fill={className} />,
    species: ['샴', '페르시안', '러시안블루', '스코티쉬폴드', '먼치킨', '시암', '아비시니안', '뱅갈', '노르웨이숲', '러그돈', '스핑크스'],
  },
  {
    id: 3,
    name: '어류',
    icon: (className) => <PiscesSVG fill={className} />,
    species: ['금붕어', '메추리', '콩고페더'],
  },
  {
    id: 4,
    name: '소동물',
    icon: (className) => <SmallAnimalSVG fill={className} />,
    species: ['햄스터', '토끼', '고슴도치', '기니피그'],
  },
  {
    id: 5,
    name: '파충류',
    icon: (className) => <ReptileSVG fill={className} />,
    species: ['뱀', '도마뱀', '거북이'],
  },
  {
    id: 6,
    name: '양서류',
    icon: (className) => <AmphibianSVG fill={className} />,
    species: ['개구리', '도롱뇽'],
  },
  {
    id: 7,
    name: '기타',
    icon: (className) => <FootPrintSVG fill={className} />,
    species: [],
  },
];

type Props = {
  petTypeParam: TPetTypeParam;
  setPetTypeParam: (param: TPetTypeParam) => void;
}

const PetSpeciesForm = ({ petTypeParam, setPetTypeParam }: Props) => {
  const [petTypeSpeciesError, setPetTypeSpeciesError] = useState<boolean>(false);

  const iconColor = (color: string, returnType: 'hex' | 'class'): string => {
    if (returnType === 'hex') {
      switch (color) {
        case 'black':
          return '#404040';
        case 'gray':
          return '#A3A3A3';
        case 'red':
          return '#F15139';
        case 'white':
          return '#FFFFFF';
        default:
          return '';
      }
    } else {
      let className = 'border rounded-md flex flex-col items-center justify-center gap-[6px] p-2';

      switch (color) {
        case 'black':
          return `${className} text-gray07 border-gray07`;
        case 'gray':
          return `${className} text-gray04 border-gray04`;
        case 'red':
          return `${className} text-red05 border-red05`;
        case 'white':
          return `${className} text-white border-white`;
        default:
          return className;
      }
    }
  };

  return (
    <fieldset className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <span>종류</span>
        <div className="grid grid-cols-4 grid-rows-2 gap-2">
          {
            petTypes.map((petType: TPetType) => (
              <label
                htmlFor={'pet-type-' + petType.id}
                key={petType.id}
                className={iconColor(petTypeParam.pet_spec_m === petType.name ? 'black' : 'gray', 'class')}
              >
                <input
                  type="radio"
                  id={'pet-type-' + petType.id}
                  name="petType"
                  value={petType.id}
                  checked={petTypeParam.pet_spec_m === petType.name}
                  onChange={() => setPetTypeParam({
                    ...petTypeParam,
                    pet_spec_m: petType.name,
                  })}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-2">
                  {petType.icon(iconColor(petTypeParam.pet_spec_m === petType.name ? 'black' : 'gray', 'hex'))}
                  <span>{petType.name}</span>
                </div>
              </label>
            ))
          }
        </div>
      </div>
      {petTypeSpeciesError && (
        <div className="flex">
          <IconBase
            src={'/svg/icon-error.svg'}
            alt={'errorIcon'}
            width={16}
            height={16}
            size={'md'}
          />
          <span className="text-errorRed">종류를 먼저 선택해주세요!</span>
        </div>
      )}
      <SelectBox
        id="pet-species"
        options={petTypes.find((petType) => petTypeParam.pet_spec_m === petType.name)?.species || []}
        onSelect={(option) => setPetTypeParam({
          ...petTypeParam,
          pet_spec_s: option,
        })}
        value={petTypeParam.pet_spec_s}
        placeholder="종류를 선택해주세요."
        canFocus={() => {
          if (petTypeParam.pet_spec_m === '') {
            setPetTypeSpeciesError(true);
            return false;
          } else {
            setPetTypeSpeciesError(false);
            return true;
          }
        }}
      />
      <div>
        <LabeledCheckBox
          id="pet-type-unknown"
          label="품종을 알 수 없어요!"
          checked={petTypeParam.dont_know}
          onChange={(e) => {
            setPetTypeParam({
              ...petTypeParam,
              dont_know: e.target.checked,
              pet_spec_s: e.target.checked ? '' : petTypeParam.pet_spec_s,
            });
          }}
        />
      </div>
    </fieldset>
  );
};

export default PetSpeciesForm;

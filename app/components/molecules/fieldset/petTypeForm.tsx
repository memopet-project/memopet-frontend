'use client';

import React, { useState } from 'react';

import DogSVG from '@/public/svg/animal-type/dog.svg';
import CatSVG from '@/public/svg/animal-type/cat.svg';
import PiscesSVG from '@/public/svg/animal-type/pisces.svg';
import SmallAnimalSVG from '@/public/svg/animal-type/small_animal.svg';
import ReptileSVG from '@/public/svg/animal-type/reptile.svg';
import AmphibianSVG from '@/public/svg/animal-type/amphibian.svg';
import FootPrintSVG from '@/public/svg/animal-type/foot_print.svg';

type TPetType = {
  id: number;
  name: string;
  icon: (className: string) => JSX.Element;
}

type TPetTypeParam = {
  id: number;
  pet_spec_m: string;
  pet_spec_s: string;
}

export const petTypes: TPetType[] = [
  {
    id: 1,
    name: '강아지',
    icon: (className) => <DogSVG fill={className} />,
  },
  {
    id: 2,
    name: '고양이',
    icon: (className) => <CatSVG fill={className} />,
  },
  {
    id: 3,
    name: '어류',
    icon: (className) => <PiscesSVG fill={className} />,
  },
  {
    id: 4,
    name: '소동물',
    icon: (className) => <SmallAnimalSVG fill={className} />,
  },
  {
    id: 5,
    name: '파충류',
    icon: (className) => <ReptileSVG fill={className} />,
  },
  {
    id: 6,
    name: '양서류',
    icon: (className) => <AmphibianSVG fill={className} />,
  },
  {
    id: 7,
    name: '기타',
    icon: (className) => <FootPrintSVG fill={className} />,
  },
];


const PetTypeForm = () => {
  const [petTypeParam, setPetTypeParam] = useState<TPetTypeParam>({
    id: 0,
    pet_spec_m: '',
    pet_spec_s: '',
  });

  const iconColor = (color: string, returnType: 'hex' | 'class'): string => {
    // switch (color) {
    //   case 'black':
    //     return returnType === 'hex' ? '#404040' : 'text-gray07 border-gray07';
    //   case 'gray':
    //     return returnType === 'hex' ? '#A3A3A3' : 'text-gray04 border-gray04';
    //   case 'red':
    //     return returnType === 'hex' ? '#F15139' : 'text-red05 border-red05';
    //   case 'white':
    //     return returnType === 'hex' ? '#FFFFFF' : 'text-white border-white';
    //   default:
    //     return '';
    // }
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
    <fieldset>
      <span>종류</span>
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {
          petTypes.map((petType) => (
            <label
              htmlFor={'pet-type-' + petType.id}
              key={petType.id}
              className={iconColor(petTypeParam.id === petType.id ? 'black' : 'gray', 'class')}
            >
              <input
                type="radio"
                id={'pet-type-' + petType.id}
                name="petType"
                value={petType.id}
                checked={petTypeParam.id === petType.id}
                onChange={() => setPetTypeParam({
                  ...petTypeParam,
                  id: petType.id,
                  pet_spec_m: petType.name,
                })}
                className="hidden"
              />
              <div className="flex flex-col items-center gap-2">
                {petType.icon(iconColor(petTypeParam.id === petType.id ? 'black' : 'gray', 'hex'))}
                <span>{petType.name}</span>
              </div>
            </label>
          ))
        }
      </div>
    </fieldset>
  );
};

export default PetTypeForm;

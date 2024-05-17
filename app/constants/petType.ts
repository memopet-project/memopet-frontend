type PetType = {
  id: number;
  name: string;
  icon: string;
}

export const petTypes: PetType[] = [
  {
    id: 1,
    name: '강아지',
    icon: '/svg/animal-type/dog.svg',
  },
  {
    id: 2,
    name: '고양이',
    icon: '/svg/animal-type/cat.svg',
  },
  {
    id: 3,
    name: '어류',
    icon: '/svg/animal-type/pisces.svg',
  },
  {
    id: 4,
    name: '소동물',
    icon: '/svg/animal-type/small_animal.svg',
  },
  {
    id: 5,
    name: '파충류',
    icon: '/svg/animal-type/reptile.svg',
  },
  {
    id: 6,
    name: '양서류',
    icon: '/svg/animal-type/amphibian.svg',
  },
  {
    id: 8,
    name: '기타',
    icon: '/svg/animal-type/foot_print.svg',
  },
];

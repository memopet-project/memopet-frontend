export type TPetType = {
  id: number;
  name: string;
  icon: (className: string) => JSX.Element;
  species: string[];
}

export type TPetTypeParam = {
  pet_nm: string
  pet_desc: string
  pet_spec_m: string
  pet_spec_s: string
  is_dead: boolean
  dont_know: boolean
  pet_gender: string
  pet_profile_url: string
  back_img_url: string
  birth_dt: string
  death_dt: string
  like_behaviour: string[]
}

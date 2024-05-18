export type TPetType = {
  id: number;
  name: string;
  icon: (className: string) => JSX.Element;
  species: string[];
}



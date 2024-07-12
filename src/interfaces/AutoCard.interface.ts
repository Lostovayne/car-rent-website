export interface AutoCardProps {
  id: string;
  model: string;
  type: string;
  image: string;
  price: number;
  isFavorite: boolean;
  specs: {
    fuel: string;
    transmission: string;
    capacity: number;
  };
}

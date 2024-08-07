export interface AutoCardProps {
  id: string;
  model: string;
  type: string;
  image: string;
  price: number;
  specs: {
    fuel: string;
    transmission: string;
    capacity: number;
  };
}

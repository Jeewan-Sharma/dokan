export interface IProducts {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IRating;
  title: string;
}

export interface IRating {
  rate: number;
  count: number;
}

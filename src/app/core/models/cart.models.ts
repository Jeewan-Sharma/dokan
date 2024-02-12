import { IProducts } from './'

export interface ICart extends IProducts {
  quantity: number;
}

export interface ICheckout {
  shipping: IShipping;
  payment: IPayment;
}

export interface IShipping {
  locationType: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  postalCode: number;
}

export interface IPayment {
  nameInCard: string;
  cardNumber: number;
  expiryDate: Date;
  cvc: number;
}

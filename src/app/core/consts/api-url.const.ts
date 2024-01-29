import { environment } from "src/environments/environment";

const BASE_URL = environment.base_url + 'fakestoreapi.com';

const PRODUCTS = {
  // this function is not necessary for this project  but if we have a search API
  // we can use the same function
  GET_PRODUCTS_LIST(searchKeyword: string): string {
    return `${BASE_URL}/products/${searchKeyword}`
  }
};

export const API_URL = {
  PRODUCTS
};

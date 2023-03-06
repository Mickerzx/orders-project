import { Product } from '@/typespaces/interfaces/product.interface';

export interface State {
  products: Product[];
}

export const state: State = {
  products: [],
};

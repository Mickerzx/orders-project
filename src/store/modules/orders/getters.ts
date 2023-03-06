import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { Product } from '@/typespaces/interfaces/product.interface';
import { State } from './state';

export type Getters = {
  getProducts(state: State): Product[];
};

export const getters: GetterTree<State, RootState> & Getters = {
  getProducts: (state: State) => state.products,
};

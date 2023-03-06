import { MutationTree } from 'vuex';
import { Product, ProductResponse } from '@/typespaces/interfaces/product.interface';
import { State } from './state';
import { OrdersMutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [OrdersMutationTypes.FETCH_PRODUCTS](state: S, payload: ProductResponse): void;
  [OrdersMutationTypes.CREATE_ORDER](state: S, payload: Product[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [OrdersMutationTypes.FETCH_PRODUCTS](state: State, payload: ProductResponse) {
    state.products = payload.products;
  },

  [OrdersMutationTypes.CREATE_ORDER](state: State, payload: Product[]) {
    state.products = payload;
  },
};

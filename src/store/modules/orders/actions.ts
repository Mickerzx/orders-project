import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store';
import OrderClient from '@/api/order.api';
import ProductsClient from '@/api/products.api';
import { CreateOrder } from '@/typespaces/types/create-order.type';
import { State } from './state';
import { Mutations } from './mutations';
import { OrdersMutationTypes } from './mutation-types';
import { OrdersActionTypes } from './action-types';

const orderClient = new OrderClient();
const productsClient = new ProductsClient();

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload?: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
  [OrdersActionTypes.FETCH_PRODUCTS]({ commit }: AugmentedActionContext): void;

  [OrdersActionTypes.CREATE_ORDER]({ commit }: AugmentedActionContext, payload: CreateOrder): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [OrdersActionTypes.FETCH_PRODUCTS]({ commit }) {
    try {
      const response = await productsClient.fetchProducts();
      commit(OrdersMutationTypes.FETCH_PRODUCTS, response);
    } catch (err) {
      throw new Error(err as string);
    }
  },

  async [OrdersActionTypes.CREATE_ORDER]({ commit }, payload: CreateOrder) {
    try {
      await orderClient.createOrder(payload);
      commit(OrdersMutationTypes.CREATE_ORDER, payload.products);
    } catch (err) {
      throw new Error(err as string);
    }
  },
};

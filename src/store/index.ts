import { createStore } from 'vuex';
import { OrdersStore, State as IOrdersStore, store as orders } from './modules/orders';

export type RootState = {
  orders: IOrdersStore;
};

export type Store = OrdersStore<Pick<RootState, 'orders'>>;

export const store = createStore({
  modules: {
    orders,
  },
});

export default function useStore(): Store {
  return store as Store;
}

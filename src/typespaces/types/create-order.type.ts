import { Product } from '@/typespaces/interfaces/product.interface';

export type CreateOrder = {
  products: Product[];
  product_id: number;
  quantity: number;
};

export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface ProductResponse {
  success: boolean;
  products: Product[];
}

import { PRODUCTS_ENDPOINT } from "../../../shared/constansts/api";

// src/features/products/api.ts
export interface Product {
  image: any;
  id: number;
  title: string;
  price: number;
}

// export const fetchProducts = async (): Promise<Product[]> => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   if (!res.ok) throw new Error("Failed to fetch products");
//   return res.json();
// };

// helper function to add delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(PRODUCTS_ENDPOINT);
  if (!res.ok) throw new Error("Failed to fetch products");

  const data: Product[] = await res.json();

  // simulate 2 seconds delay
  await delay(2000);

  return data;
};


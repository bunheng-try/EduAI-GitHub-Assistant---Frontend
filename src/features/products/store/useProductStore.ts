// src/features/products/store.ts
import { create } from "zustand";
import type { Product } from "../services/api";

interface ProductState {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
  clearSelectedProduct: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
}));

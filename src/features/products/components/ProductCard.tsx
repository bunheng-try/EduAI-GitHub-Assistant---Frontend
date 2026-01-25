import React from "react";
import type { Product } from "../services/api";
import { useProductStore } from "../store/useProductStore";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);
  const selectedProduct = useProductStore((state) => state.selectedProduct);

  const isSelected = selectedProduct?.id === product.id;

  return (
    <div
      className={`product-card ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedProduct(product)}
    >
      {product.image && <img src={product.image} alt={product.title} className="product-image" />}
      <h3>{selectedProduct?.title}</h3>
      <p>${selectedProduct?.price}</p>
    </div>
  );
};

export default ProductCard;
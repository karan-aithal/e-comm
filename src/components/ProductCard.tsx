// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
    category: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <h2 className="text-xl mt-4">{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;

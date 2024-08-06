// src/pages/Contents.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const Contents: React.FC = () => {
  const products = [
    { id: 1, name: 'Glass Jar Chocolates', image: '/path/to/jar.jpg', description: 'Chocolates in a glass jar', category: 'jar' },
    { id: 2, name: 'Celebration Box', image: '/path/to/celebration-box.jpg', description: '5 varieties in ecofriendly box', category: 'celebration-box' },
    { id: 3, name: 'Jewelry Box Chocolates', image: '/path/to/jewelry-box.jpg', description: '4 exotic flavours in jewelry box', category: 'jewelry-box' }
  ];

  return (
    <div>
      <h1 className="text-3xl text-center my-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Contents;

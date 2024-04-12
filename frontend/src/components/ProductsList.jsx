import React from 'react'
import ProductCard from './ProductCard';
import productsData from './produits';

const ProductsList = () => {
    return (
        <div className="products-list">
        
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      );
    };

export default ProductsList

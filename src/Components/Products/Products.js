import React from 'react'
import Data from '../../get_products.json';
import ProductList from './ProductList';

export default function Products() {
  return (
    <div>
      {Data.GTS.map((prod) => (
        <ProductList
          key={prod.product_id}
          id={prod.product_id}
          image={prod.product_image}
          name={prod.product_name}
          price={prod.product_price.map((p) => p.product_price)}
        />
      ))}
    </div>
  );
}

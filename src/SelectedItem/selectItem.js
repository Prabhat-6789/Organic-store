import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDescr from './productDescr';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDescr productId={product.id} prod={product.image} productName={product.name} productRate={product.price}/>
    </div>
  );
};

export default ProductDetails;
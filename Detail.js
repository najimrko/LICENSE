import React from 'react';

const Detail = ({ item }) => {
  const product = item || {
    name: 'Plant 1',
    description: 'This is a beautiful indoor plant that purifies the air.',
    price: '$12',
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <strong>Price: {product.price}</strong>
    </div>
  );
};

export default Detail;

import React from 'react';

const Home = () => {
  const items = [
    { id: 1, name: 'Plant 1', price: '$12' },
    { id: 2, name: 'Plant 2', price: '$15' },
    { id: 3, name: 'Plant 3', price: '$10' },
  ];

  return (
    <div>
      <header>
        <h1>🌿 Plant Shop</h1>
      </header>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

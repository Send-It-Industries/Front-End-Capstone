import React from 'react';

const SKUSelector = () => {
  const name = 'Sku Selector';
  return (
    <div>
      <h5>{name}</h5>
      <select>
        <option>size</option>
      </select>
      <select>
        <option>Quantity</option>
      </select>
      <button type="button">Add to Bag</button>
      <button type="button">Social Media? outfit?</button>
    </div>
  );
};

export default SKUSelector;

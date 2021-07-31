import React, { useContext, useState, useEffect } from 'react';
import { range } from 'underscore';

import AppContext from '../Contexts/AppContext';

const SKUSelector = () => {
  const name = 'Sku Selector';
  const { selectedStyle } = useContext(AppContext);

  const [inStock, setInStock] = useState(true);
  const [selectedSku, setSelectedSku] = useState('sizeSelect');
  const [sizeSelected, setSizeSelected] = useState(false);
  const [wantedQuantity, setWantedQuantity] = useState('-');
  const [maxQuantity, setMaxQuantity] = useState(15);

  const handleSizeSelect = (e) => {
    let maxQ;
    setSelectedSku(e.target.value);
    setSizeSelected(true);
    if (selectedStyle.skus[e.target.value].quantity < 15) {
      maxQ = selectedStyle.skus[e.target.value].quantity;
    } else {
      maxQ = 15;
    }
    setMaxQuantity(maxQ);
    if (wantedQuantity === '-') {
      setWantedQuantity(1);
    } else if (wantedQuantity > maxQ) {
      setWantedQuantity(maxQ);
    }
  };

  const handleQuantitySelect = (e) => {
    setWantedQuantity(e.target.value);
  };

  const selectedStyleInStock = () => {
    // Two ways an item can be out of stock:
    //   1. skus object contains 1 key value pair containing null instead of a sku
    //                                           { null: { quantity: null,
    //                                                     size: null } }
    //   2. skus abject contains key values pairs with sizes and zero values
    //                                           { <sku#>: { quantity: 0,
    //                                                       size: "One Size" } }
    // Check the current style has skus available by checking if the skus object has keys
    // then if the skus are available sum the number of available items per style.
    // convert truthy/falsy to boolean with !!
    const skusAvailable = !!(Object.keys(selectedStyle.skus).length);
    return (skusAvailable ? !!(
      Object.values(selectedStyle.skus).reduce((sum, { quantity }) => (
        sum + quantity
      ), 0)
    ) : false);
  };

  useEffect(() => {
    if (selectedStyleInStock()) {
      setInStock(true);
      setSelectedSku('sizeSelect');
    } else {
      setInStock(false);
      setSelectedSku('outOfStock');
    }
    setSizeSelected(false);
    setWantedQuantity('-');
  }, [selectedStyle]);

  return (
    <div>
      <h5>{name}</h5>
      {/* Size Select */}
      <form>

        <select
          value={selectedSku}
          id="sizes"
          onChange={(e) => (handleSizeSelect(e, selectedSku))}
          disabled={!inStock}
        >
          {
            inStock ? (
              <>
                <option disabled value="sizeSelect">Select Size</option>
                {
                Object.entries(selectedStyle.skus)
                  .filter(([, { quantity }]) => (quantity))
                  .map(([sku, { size }]) => (
                    <option value={sku} key={sku}>{size}</option>
                  ))
                }
              </>
            ) : (
              <option value="outOfStock">Out Of Stock</option>
            )
          }
        </select>
        {/* Quantity select */}
        <select
          value={wantedQuantity}
          id="quantity"
          disabled={!sizeSelected}
          onChange={handleQuantitySelect}
        >
          {
            sizeSelected ? (
              range(1, maxQuantity + 1).map((possibleQuantity) => (
                <option value={possibleQuantity} key={possibleQuantity}>{possibleQuantity}</option>
              ))
            ) : (
              <option value>{wantedQuantity}</option>
            )
          }
        </select>
        {wantedQuantity !== '-' ? (
          <button type="submit">Add to Bag</button>
        ) : (
          null
        )}
        <button type="button">Social Media? outfit?</button>
      </form>
    </div>
  );
};

export default SKUSelector;

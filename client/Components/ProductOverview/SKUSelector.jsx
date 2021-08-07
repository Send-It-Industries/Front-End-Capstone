import React, {
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { range } from 'underscore';
import SizeDropdown from './SizeDropdown';

import AppContext from '../Contexts/AppContext';

const SKUSelector = () => {
  const { selectedStyle, setCart } = useContext(AppContext);

  const [inStock, setInStock] = useState(true);
  const [selectedSku, setSelectedSku] = useState('sizeSelect');
  // boolean for if a sku is selected
  const [skuSelected, setSkuSelected] = useState(false);
  const [wantedQuantity, setWantedQuantity] = useState('-');
  const [maxQuantity, setMaxQuantity] = useState(15);
  // boolean for if a add to cart was attempted without a skuquantitySelectored this
  const [skuNeeded, setSkuNeeded] = useState(false);

  const quantitySelector = useRef(null); //I dontThink I need this

  const handleSkuSelect = (e) => {
    let maxQ;
    setSelectedSku(e.target.id); // change value to name
    setSkuSelected(true);
    setSkuNeeded(false);
    if (selectedStyle.skus[e.target.id].quantity < 15) {
      maxQ = selectedStyle.skus[e.target.id].quantity;
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

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (!skuSelected) {
      e.target.skuSelect.focus();
      setSkuNeeded(true);
      // quantitySelector.current.focus();
    } else {
      setCart((currentCart) => (
        currentCart.concat({
          sku: e.target.skuSelect.value,
          quantityWanted: e.target.quantitySelect.value,
        })
      ));
    }

    setSelectedSku('sizeSelect');
    setSkuSelected(false);
    setWantedQuantity('-');
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

    // debugger;
    const stockAvail = Object.entries(selectedStyle.skus)
      .filter(([sku, { quantity }]) => {
        // debugger;
        return sku && quantity;
      })
      .length;
    return !!stockAvail;


    // const skusAvailable = !!(Object.keys(selectedStyle.skus).length);
    // return (skusAvailable ? !!(
    //   Object.values(selectedStyle.skus).reduce((sum, { quantity }) => (
    //     sum + quantity
    //   ), 0)
    // ) : false);
  };

  useEffect(() => {
    if (selectedStyleInStock()) {
      setInStock(true);
      setSelectedSku('sizeSelect');
    } else {
      setInStock(false);
      setSelectedSku('outOfStock');
    }
    setSkuSelected(false);
    setWantedQuantity('-');
  }, [selectedStyle]);

  const skuSelectorStyle = {
    overflow: 'visible',
    // position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    // gridTemplateColumns: '50% 50%',
    // gridTemplateRows: '70% 20%',
    // columnGap: '.5vw',
    // rowGap: '.5vw',
  };

  const sizeSelectStyle = {
    width: '63%',
    height: '3rem',
    margin: '5% 0',
  };
  const quantitySelectStyle = {
    width: '30%',
    height: '3rem',
    margin: '5% 0',
  };
  const addToCartStyle = {
    width: '78%',
    height: '3rem',
    margin: '5% 0',
  };
  const starBtnStyle = {
    width: '15%',
    height: '3rem',
    margin: '5% 0',
  };

  return (
    <div id="skuSelector" style={{ overflow: 'visible' }}>
      {/* Size Select */}
      {
        skuNeeded ? <div>Please select a size</div> : null
      }
      <form style={skuSelectorStyle} onSubmit={handleProductSubmit}>
        {selectedStyle.skus ? (
          <SizeDropdown
            open={skuNeeded}
            skus={selectedStyle.skus}
            disabled={!inStock}
            selectedSku={selectedSku}
            onSelect={handleSkuSelect}
            style={sizeSelectStyle}
            showDefault={!skuSelected}
          />
        ) : (null)}

        {/* <select
          style={sizeSelectStyle}
          value={selectedSku}
          id="skuSelect"
          onChange={(e) => (handleSkuSelect(e, selectedSku))}
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
        </select> */}
        {/* Quantity select */}
        <select
          style={quantitySelectStyle}
          value={wantedQuantity}
          id="quantitySelect"
          disabled={!skuSelected}
          onChange={handleQuantitySelect}
        >
          {
            skuSelected ? (
              range(1, maxQuantity + 1).map((possibleQuantity) => (
                <option style={{fontSize: '1rem', boxShadow: '0px 10px 10px grey'}} value={possibleQuantity} key={possibleQuantity}>{possibleQuantity}</option>
              ))
            ) : (
              <option value>{wantedQuantity}</option>
            )
          }
        </select>
        {inStock ? (
          <button style={addToCartStyle} type="submit">Add to Bag</button>
        ) : (
          null
        )}
        <button style={starBtnStyle} type="button">Social Media? outfit?</button>
      </form>
    </div>
  );
};

export default SKUSelector;

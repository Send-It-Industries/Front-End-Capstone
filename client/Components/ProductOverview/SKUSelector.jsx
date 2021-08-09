import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import { range } from 'underscore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

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

  const handleSkuSelect = (e) => {
    let maxQ;
    setSelectedSku(e.target.id);
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

  // Two ways an item can be out of stock:
  //   1. skus object contains 1 key value pair containing null instead of a sku
  //                                           { null: { quantity: null,
  //                                                     size: null } }
  //   2. skus abject contains key values pairs with sizes and zero values
  //                                           { <sku#>: { quantity: 0,
  //                                                       size: "One Size" } }
  // check if selected style has at least one valid sku with a quantity greater than 0
  const selectedStyleInStock = () => (
    !!Object.entries(selectedStyle.skus)
      .filter(([sku, { quantity }]) => (sku && quantity))
      .length
  );

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
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '3rem 3rem',
    rowGap: '10%',
  };

  const row1Style = {
    columnGap: '5%',
    display: 'grid',
    gridTemplateColumns: '65% 30%',
  };

  const row2Style = {
    columnGap: '5%',
    display: 'grid',
    gridTemplateColumns: '70% 25%',
  };
  const sizeSelectStyle = {
    height: '3rem',
    gridColumn: '1 / 2',
    border: '1px solid grey',
  };
  const quantitySelectStyle = {
    height: '3rem',
    background: 'white',
    gridColumn: '2 / 3',
    color: 'black',
    border: '2px solid grey',
    cursor: 'pointer',
  };
  const addToCartStyle = {
    height: '3rem',
    background: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gridColumn: '1 / 2',
    color: 'black',
    cursor: 'pointer',
  };
  const shareBtnStyle = {
    height: '3rem',
    background: 'white',
    color: 'black',
    gridColumn: '2 / 3',
    cursor: 'pointer',
  };

  return (
    <div id="skuSelector" style={{ overflow: 'visible'}}>
      {/* Select a Size warning */}
      {
        skuNeeded ? <div style={{ height: '.8rem', color: 'red', fontSize: '.8rem', margin: '1%' }}>Please select a size</div> : <div style={{ height: '.8rem', color: 'red', margin: '1%' }} />
      }
      <form style={skuSelectorStyle} onSubmit={handleProductSubmit}>
        <div style={row1Style}>

          {/* Size Select */}
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
                  <option
                    style={{ fontSize: '1rem', boxShadow: '0px 10px 10px grey' }}
                    value={possibleQuantity}
                    key={possibleQuantity}
                  >
                    {possibleQuantity}
                  </option>
                ))
              ) : (
                <option value>{wantedQuantity}</option>
              )
            }
          </select>
        </div>

        <div style={row2Style}>

          {/* Add To Bag */}
          {inStock ? (
            <button
              style={addToCartStyle}
              type="submit"
            >
              ADD TO BAG
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </button>
          ) : (
            <div style={addToCartStyle} />
          )}

          {/* Social Share Button */}
          <button
            style={shareBtnStyle}
            type="button"
          >
            <FontAwesomeIcon icon={faShareAlt} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SKUSelector;

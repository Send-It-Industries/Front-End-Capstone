import React, { useState, useEffect } from 'react';

const SizeDropdown = ({ open, skus, disabled, selectedSku, onSelect, style, showDefault }) => {
  const [displayMessage, setDisplayMessage] = useState('SELECT SIZE');
  const [openFromClick, setOpenFromClick] = useState(open);

  const selectorStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    cursor: 'pointer',
  };

  const btnStyle = {
    ...selectorStyle,
    background: 'transparent',
    border: 'none',
    fontSize: 0,
  };

  const selectStyle = {
    position: 'relative',
    top: '100%',
    backgroundColor: 'white',
    border: '1px solid grey',
    fontSize: '1rem',
    boxShadow: '0px 10px 10px lightgrey',
  };

  const selectionStyle = {
    padding: '0 6px',
  };

  const handleSelectionEnter = (e) => {
    e.target.style.backgroundColor = '#2B90FB';
    e.target.style.color = 'white';
  };
  const handleSelectionOut = (e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
  };

  useEffect(() => {
    if (disabled) {
      setDisplayMessage('OUT OF STOCK');
    } else {
      setDisplayMessage('SELECT SIZE');
    }
  }, [disabled]);

  // useEffect(() => {
  //   if (disabled) {
  //     setDisplayMessage('Out Of Stock');
  //   }
  // }, [skus]);
  const closeDropdown = () => (setOpenFromClick(false));

  // can't reclick after this

  // useEffect(() => {
  //   if (open || openFromClick) {
  //     document.addEventListener('click', closeDropdown);
  //   } else {
  //     // window.removeEventListener('click', closeDropdown);
  //   }
  // }, [open, openFromClick]);

  useEffect(() => {
    if (showDefault) {
      if (disabled) {
        setDisplayMessage('OUT OF STOCK');
      } else {
        setDisplayMessage('SELECT SIZE');
      }
    }
  }, [showDefault]);

  const handleDropdownClick = (e, sku, size) => {
    onSelect(e, sku);
    setOpenFromClick(false);
    setDisplayMessage(size);
  };

  return (
    <div style={{ ...style, position: 'relative', cursor: 'pointer' }}>
      <select
        disabled={disabled}
        id="skuSelect"
        value={selectedSku}
        style={selectorStyle}
      >
        <option
          disabled={disabled}
          value={selectedSku}
        >
          {displayMessage}
        </option>
      </select>
      <button
        type="button"
        style={btnStyle}
        onClick={disabled ? (null) : (
          () => (
            setOpenFromClick((isOpen) => (!isOpen))
          )
        )}
      />
      {/* if open render divs with options */}
      {(open || openFromClick) && !disabled ? (
        <div style={selectStyle}>
          {
            Object.entries(skus)
              .filter(([, { quantity }]) => (quantity))
              .map(([sku, { size }]) => (
                <div
                  role="button"
                  onMouseEnter={handleSelectionEnter}
                  onMouseOut={handleSelectionOut}
                  onClick={(e) => (handleDropdownClick(e, sku, size))}
                  id={sku}
                  key={sku}
                  style={selectionStyle}
                >
                  {size}
                </div>
              ))
          }
        </div>
      ) : (null)}
    </div>
  );
};

export default SizeDropdown;

import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';

const StyleSelector = () => {
  const name = 'Style Selector';
  const {
    productInfo,
    selectedStyle,
    displayImageIndex,
    setSelectedStyle,
  } = useContext(AppContext);
  const selected = { border: '5px solid blue' };

  const handleStyleChange = (newStyle) => {
    setSelectedStyle(newStyle);
  };

  return (
    <div>
      <h5>{name}</h5>
      <div>
        <span>STYLE &gt; </span>
        {selectedStyle.name}
      </div>
      {productInfo.styles.map((style, i) => (
        <img
          style={(style.style_id === selectedStyle.style_id) ? selected : null}
          src={style.photos[displayImageIndex].thumbnail_url}
          alt={`Style Thumbnail for style ID: ${style.style_id}`}
          key={i}
          onClick={() => (handleStyleChange(style, i))} />
      ))}
    </div>
  );
};

export default StyleSelector;

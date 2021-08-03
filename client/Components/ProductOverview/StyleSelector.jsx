import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';

const StyleSelector = () => {
  const {
    productInfo,
    selectedStyle,
    displayImageIndex,
    setSelectedStyle,
  } = useContext(AppContext);

  const styleSelectStyle = {
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    gridTemplateRows: '2em',
    gridAutoRows: '8vmin',
    /* gridAutoRows: 'repeat(4, 25%'), */
    alignItems: 'center',
    justifyItems: 'center',
  };

  const styleNameStyle = {
    gridColumn: '1 / 5',
    justifySelf: 'left',
  };

  const styleThumbnailStyle = {
    height: '90%',
    // gridRow: '2 / 3',
    width: '90%',
    borderRadius: '50%',
    boxSizing: 'border-box',
  };

  const selected = { border: '5px solid blue' };

  const handleStyleChange = (newStyle) => {
    setSelectedStyle(newStyle);
  };

  return (
    <div id="StyleSelect" style={styleSelectStyle}>
      <div style={styleNameStyle}>
        STYLE &gt;
        {selectedStyle.name}
      </div>
      {productInfo.styles.map((style, i) => (
        <img
          style={(style.style_id === selectedStyle.style_id) ? ({ ...styleThumbnailStyle, ...selected }) : (styleThumbnailStyle)}
          src={style.photos[displayImageIndex].thumbnail_url}
          alt={`Style Thumbnail for style ID: ${style.style_id}`}
          key={i}
          onClick={() => (handleStyleChange(style))} />
      ))}
    </div>
  );
};

export default StyleSelector;

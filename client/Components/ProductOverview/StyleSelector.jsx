import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';
import useElementSizeById from './Hooks/useElementSizeById';

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
    gridTemplateColumns: '100%',
    // gridTemplateRows: '2em',
    gridTemplateRows: '2em auto', // 8vmin
    /* gridAutoRows: 'repeat(4, 25%'), */
    alignItems: 'center',
    justifyItems: 'left',
  };

  // const styleNameStyle = {
  //   // gridColumn: '1 / 5',
  //   justifySelf: 'left',
  // };

  const styleThumbnailStyle = {
    // height: '90%',
    // gridRow: '2 / 3',
    // width: '90%',
    // height: '2em',
    // width: '2em',
    flex: '0 1 23%',
    borderRadius: '50%',
    boxSizing: 'border-box',
    width: '23%', // based off of 4 images update with margins
    height: `${0.25 * useElementSizeById('ProductSelect')[0]}%`,
    minWidth: '25px',
    minHeight: '25px',
    maxWidth: '70px',
    maxHeight: '70px',
    objectFit: 'cover',
    margin: '1%',
  };

  const stylesImagesStyle = {
    // fontSize: '3vw', // really need to media query to
    // properly size the images, instead I base it off of,
    // a font size that is related to vw
    width: '100%',
    maxWidth: '280px', //based off of 4 images update with margins
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    alignContent: 'space-around',
    // gridTemplateColumns: 'repeat(4, 20%)',
    height: '60%',
  };

  const selected = { border: '5px solid blue' };

  const handleStyleChange = (newStyle) => {
    setSelectedStyle(newStyle);
  };

  return (
    <div id="StyleSelect" style={styleSelectStyle}>
      <div>
        STYLE &gt;
        {selectedStyle.name}
        {useElementSizeById('ProductSelect')[0]}
      </div>
      <div style={stylesImagesStyle}>
        {productInfo.styles.map((style, i) => (
          <img
            style={(style.style_id === selectedStyle.style_id) ? ({ ...styleThumbnailStyle, ...selected }) : (styleThumbnailStyle)}
            src={style.photos[displayImageIndex].thumbnail_url}
            alt={`Style Thumbnail for style ID: ${style.style_id}`}
            key={i}
            onClick={() => (handleStyleChange(style))} />
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;

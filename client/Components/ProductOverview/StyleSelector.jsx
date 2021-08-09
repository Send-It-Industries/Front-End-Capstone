import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../Contexts/AppContext';
import useElementSizeById from '../Helpers/Hooks/useElementSizeById';

const StyleSelector = () => {
  const {
    productInfo,
    selectedStyle,
    displayImageIndex,
    setSelectedStyle,
  } = useContext(AppContext);
  const [prodectSelectWidth] = useElementSizeById('ProductSelect');

  const styleSelectStyle = {
    overflow: 'visible',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '1.5em auto',
    alignItems: 'center',
    justifyItems: 'left',
    rowGap: '2%',

  };

  const styleThumbnailStyle = {
    flex: '0 1 20%',
    borderRadius: '50%',
    boxSizing: 'border-box',
    width: 0.18 * prodectSelectWidth, // based off of 4 images update with margins
    height: 0.18 * prodectSelectWidth,
    minWidth: '25px',
    minHeight: '25px',
    maxWidth: '70px',
    maxHeight: '70px',
    objectFit: 'cover',
    margin: '1%',
    border: '1px solid black',
  };

  const stylesImagesStyle = {
    width: '100%',
    maxWidth: '280px', // based off of 4 images update with margins
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    height: '60%',
  };

  const selected = {
    position: 'absolute',
    right: '0',
    borderRadius: '50%',
    boxSizing: 'border-box',
    objectFit: 'contain',
    color: 'rgb(117, 129, 107)',
  };

  const handleStyleChange = (newStyle) => {
    setSelectedStyle(newStyle);
  };

  return (
    <div id="StyleSelect" style={styleSelectStyle}>
      <div style={{ whiteSpace: 'nowrap' }}>
        <b>
          STYLE &gt;
        </b>
        <span>
          {` ${selectedStyle.name}`}
        </span>
      </div>
      <div style={stylesImagesStyle}>
        {productInfo.styles.map((style, i) => (
          <div style={{ margin: '0 2%', position: 'relative', cursor: 'pointer' }}>
            {
              (style.style_id === selectedStyle.style_id) ? (
                <div className="fa-layers fa-fw" style={selected}>
                  <span style={{ color: 'white' }}>
                    <FontAwesomeIcon icon={faCircle} />
                  </span>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
              ) : (null)
            }
            <img
              style={styleThumbnailStyle}
              src={style.photos[displayImageIndex].thumbnail_url}
              alt={`${style.style_id}`}
              key={i}
              onClick={() => (handleStyleChange(style))}
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;

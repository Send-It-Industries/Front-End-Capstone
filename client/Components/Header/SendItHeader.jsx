import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCircle } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../Contexts/AppContext';

const SendItHeader = () => {
  const { productId, setProductId, cart } = useContext(AppContext);
  const releventProducts = ['18078', '18079', '18083', '18092', '18100'];
  const headerStyle = {
    backgroundColor: 'rgba(31, 47, 22, .8)',
    width: '100%',
    position: 'relative',
  };

  const incrementCurrentProduct = () => {
    // const currIndex = releventProducts.indexOf(productId);
    // setProductId(releventProducts[(currIndex + 1) % releventProducts.length]);
  };

  const decrementCurrentProduct = () => {
    // let currIndex = releventProducts.indexOf(productId);
    // if (currIndex < 0) {
    //   currIndex = releventProducts.length;
    // }
    // setProductId(releventProducts[(currIndex - 1) % releventProducts.length]);
  };

  const changeCurrentProduct = () => {
    // setProductId((currentId) => ((parseInt(currentId) + 1).toString()));
  };

  return (
    <div style={headerStyle}>
      <img
      style={{height: '90%', objectFit: 'contain', margin: '3px'}}
      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1RoL7Zefr2aZuKPY0ik1Yq5I2eegyUG8uw&usqp=CAU`} />
      {/* <div style={{ position: 'absolute', top: '0', right: '45%', fontSize: '2rem' }} onClick={incrementCurrentProduct}>{'>'}</div>
      <div style={{ position: 'absolute', top: '0', right: '50%', fontSize: '2rem' }} onClick={changeCurrentProduct}>{'+'}</div>
      <div style={{ position: 'absolute', top: '0', left: '45%', fontSize: '2rem' }} onClick={decrementCurrentProduct}>{'<'}</div> */}
      <div style={{ position: 'absolute', top: '30%', right: '2%', fontSize: '2rem', color: 'white' }}>
        <div style={{ position: 'relative' }}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span style={{ position: 'absolute', top: 0, right: 0, fontSize: '1rem' }}><FontAwesomeIcon icon={faCircle} /><span style={{ position: 'absolute', color: 'red', top: 0, right: '20%' }}>{cart.length}</span></span>
        </div>
      </div>
    </div>
  );
};

export default SendItHeader;

import React from 'react';

const SendItHeader = () => {
  const headerStyle = {
    backgroundColor: 'rgba(31, 47, 22, .8)',
    width: '100%',
  };

  const logoStyle = {
    fontSize: '',
    color: 'white',
  };

  return (
    <div style={headerStyle}>
      <img
      style={{height: '90%', objectFit: 'contain', margin: '3px'}}
      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1RoL7Zefr2aZuKPY0ik1Yq5I2eegyUG8uw&usqp=CAU`} />
    </div>
  );
};

export default SendItHeader;

import React from 'react';

const characteristic = ({ characteristic, id, changeHandler }) => {
  const adjectives = {
    Size: ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    width: '20%',
  };
  // console.log(characteristic, id);
  return (
    <>
      <br margin="5px 0" />
      <div fontSize="25px" style={{ alignSelf: 'flex-start' }}>
        {`${characteristic}:`}
      </div>
      {/* <br /> */}
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center',
      }}
      >
        <div style={buttonStyle}>
          <input type="radio" name={id} value="1" onChange={changeHandler} style={{ justifySelf: 'center' }} />
          <label style={{ display: 'block', fontSize: '12px', marginTop: '0.5rem' }}>{adjectives[characteristic][0]}</label>
        </div>
        <div style={buttonStyle}>
          <input type="radio" name={id} value="2" onChange={changeHandler} />
          <label style={{ display: 'block', fontSize: '12px', marginTop: '0.5rem' }}>{adjectives[characteristic][1]}</label>
        </div>
        <div style={buttonStyle}>
          <input type="radio" name={id} value="3" onChange={changeHandler} />
          <label style={{ display: 'block', fontSize: '12px', marginTop: '0.5rem' }}>{adjectives[characteristic][2]}</label>
        </div>
        <div style={buttonStyle}>
          <input type="radio" name={id} value="4" onChange={changeHandler} />
          <label style={{ display: 'block', fontSize: '12px', marginTop: '0.5rem' }}>{adjectives[characteristic][3]}</label>
        </div>
        <div style={buttonStyle}>
          <input type="radio" name={id} value="5" onChange={changeHandler} />
          <label style={{ display: 'block', fontSize: '12px', marginTop: '0.5rem' }}>{adjectives[characteristic][4]}</label>
        </div>

      </div>
    </>
  );
};

export default characteristic;

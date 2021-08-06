import React from 'react';

const characteristic = ({ characteristic }) => {
  const adjectives = {
    Size: ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
  };

  return (
    <>
      <br margin="5px 0" />
      <div fontSize="25px">
        {`${characteristic}:`}
      </div>
      {/* <br /> */}
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center',
      }}
      >
        <div>
          <input type="radio" />
          <label style={{ display: 'block', fontSize: '12px'}}>{adjectives[characteristic][0]}</label>
        </div>
        <div>
          <input type="radio" />
          <label style={{ display: 'block', fontSize: '12px'}}>{adjectives[characteristic][1]}</label>
        </div>
        <div>
          <input type="radio" />
          <label style={{ display: 'block', fontSize: '12px' }}>{adjectives[characteristic][2]}</label>
        </div>
        <div>
          <input type="radio" />
          <label style={{ display: 'block', fontSize: '12px' }}>{adjectives[characteristic][3]}</label>
        </div>
        <div>
          <input type="radio" />
          <label style={{ display: 'block', fontSize: '12px' }}>{adjectives[characteristic][4]}</label>
        </div>

      </div>
      <br margin="5px 0" />
    </>
  );
};

export default characteristic;

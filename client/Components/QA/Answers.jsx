/* eslint-disable linebreak-style */
import React from 'react';
import Helpful from './Helpful';

const Answers = ({ answer }) => (
  <div>
    <span style={{ fontWeight: 'bold' }}>A: </span>
    {answer.body}
    <br />
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      by
      {' '}
      {answer.answerer_name}
      , date |
      <Helpful value={answer.helpfulness} />
      |
      <span
        onClick={() => { console.log('click'); }}
        style={{ textDecorationLine: 'underline' }}
      >
        Report
      </span>
    </div>
  </div>
);
export default Answers;

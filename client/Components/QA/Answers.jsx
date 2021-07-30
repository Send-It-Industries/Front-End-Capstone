/* eslint-disable linebreak-style */
import React from 'react';
import Helpful from '../Helpers/Helpful';
import Report from '../Helpers/Report';

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
    <Report />

    </div>
  </div>
);
export default Answers;

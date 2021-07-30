/* eslint-disable linebreak-style */
import React from 'react';
import Helpful from './Helpful';

const Answers = ({ answer }) => (
  <div>
    <span style={{ fontWeight: 'bold' }}>A: </span>
    {answer.body}
    <br />
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      by (
      {answer.answerer_name}
      ) | DATE |
      <Helpful value={answer.helpfulness} />
      {/* <button type="button">Report</button> */}
    </div>
  </div>
);
export default Answers;

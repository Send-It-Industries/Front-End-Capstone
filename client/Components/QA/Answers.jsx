/* eslint-disable linebreak-style */
import React from 'react';

const Answers = ({ answer }) => (
  <div>
    <span style={{ fontWeight: 'bold' }}>A: </span>
    {answer.body}
    <br />
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      by (
      {answer.answerer_name}
      ) | DATE | Helpful?
      <button type="button">Yes(99)</button>
      <button type="button">Report</button>
    </div>
  </div>
);

export default Answers;

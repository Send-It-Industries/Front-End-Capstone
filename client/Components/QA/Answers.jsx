/* eslint-disable linebreak-style */
import React from 'react';
import Helpful from '../Helpers/Helpful';
import Report from '../Helpers/Report';

const Answers = ({ answer }) => {
  const date = answer.date.slice(0, 10);
  const newDate = (() => {
    const monthsArr = [
      'placeholder',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dateArr = date.split('-');
    const month = parseInt(dateArr[1], 10);
    const result = `${monthsArr[month]} ${dateArr[2]}, ${dateArr[0]}`;
    return result;
  })();

  // console.log(answer)

  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>A: </span>
      {answer.body}
      <br />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {newDate}
        {' '}
        |
        <Helpful value={answer.helpfulness} component={'answers'} componentId={answer.id} />
        |
        <Report component={'qa'} componentId={answer.id} />
      </div>
    </div>
  );
};
export default Answers;

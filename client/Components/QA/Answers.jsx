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
      <span id="text">
        {answer.body}
      </span>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        by&nbsp;
        <span style={{ fontWeight: answer.answerer_name.toLowerCase() === 'seller' ? 'bold' : null }}>{answer.answerer_name}</span>
        ,&nbsp;
        {newDate}
        &nbsp;|&nbsp;
        <Helpful value={answer.helpfulness} component="answers" componentId={answer.id} />
        &nbsp;|&nbsp;
        <Report component="qa" componentId={answer.id} />
      </div>
    </div>
  );
};
export default Answers;

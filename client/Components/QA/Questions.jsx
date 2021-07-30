/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import AddAnswer from './AddAnswer';
import Answers from './Answers';
import Helpful from './Helpful';

const Questions = ({ Q }) => {
  const [answers, setAnswers] = useState('');

  useEffect(() => {
    setAnswers(Q.answers);
  }, [answers]);
console.log(Q)
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: '1px solid black',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>
          Q:
          {Q.question_body}
        </span>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Helpful value={Q.question_helpfulness}/>
          |
          <AddAnswer question_id={Q.question_id} />
        </div>
      </div>
      <div style={{ border: '1px solid black' }}>
        {Object.entries(Q.answers)
          .slice(0, 2)
          .map((answer) => (
            <Answers answer={answer[1]} key={answer[0]} />
          ))}
          {/* load more answers */}
      </div>
    </div>
  );
};

export default Questions;

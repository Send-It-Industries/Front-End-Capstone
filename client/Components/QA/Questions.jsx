/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import AddAnswer from './AddAnswer';
import Answers from './Answers';
import Helpful from '../Helpers/Helpful';

const Questions = ({ Q }) => {
  const [answers, setAnswers] = useState([]);
  const [answerCount, setAnswerCount] = useState(2);
  const [totalAnswers, setTotalAnswers] = useState('');

  useEffect(() => {
    setAnswers(Q.answers);
    setTotalAnswers(Object.values(answers).length);
  }, [Q, answers]);

  const moreAnswers = () => {
    setAnswerCount(answerCount + 2);
  };

  // console.log(Object.entries(Q.answers)[1][1]);
  // console.log(Object.entries(answers));

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
        <span id="text" style={{ fontWeight: 'bold' }}>
          Q:
          {Q.question_body}
        </span>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Helpful value={Q.question_helpfulness} component="qa" componentId={Q.question_id} />
          |
          <AddAnswer question_id={Q.question_id} question={Q.question_body} />
        </div>
      </div>
      <div
        style={{ border: '1px solid black', maxHeight: '200px', overflowY: 'auto' }}
      >
        {Object.entries(answers)
          .sort((a, b) => b[1].helpfulness - a[1].helpfulness)
          .reduce((acc, element) => {
            if (element[1].answerer_name.toLowerCase() === 'seller') {
              return [element, ...acc];
            }
            return [...acc, element];
          }, [])
          .slice(0, answerCount)
          .map((answer) => (
            <Answers answer={answer[1]} key={answer[0]} />
          ))}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            onClick={moreAnswers}
            style={{
              visibility: answerCount >= totalAnswers ? 'hidden' : 'visible',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Load More Answers
          </span>
          <span
            style={{
              visibility: (answerCount >= totalAnswers && answerCount > 2) ? 'visible' : 'hidden',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => {
              setAnswerCount(2);
            }}
          >
            Collapse Answers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Questions;

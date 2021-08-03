/* eslint-disable linebreak-style */

import React, { useContext, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import AddQuestion from './AddQuestion';
import AppContext from '../Contexts/AppContext';
import Questions from './Questions';

const QA = () => {
  const { QAs, productId } = useContext(AppContext);
  const [questionCount, setQuestionCount] = useState(4);

  const moreQuestions = () => {
    setQuestionCount(questionCount + 2);
  };

  // console.log(count);

  return (
    <div style={{ width: '100vh' }}>
      <h2>QA Section</h2>
      <SearchBar />
      <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
        {QAs.slice(0, questionCount).map((Q) => (
          <Questions Q={Q} key={Q.question_id} />
        ))}
      </div>
      <button type="button" onClick={moreQuestions}>
        More Answered Questions
      </button>
      <AddQuestion PId={productId} />
    </div>
  );
};

export default QA;

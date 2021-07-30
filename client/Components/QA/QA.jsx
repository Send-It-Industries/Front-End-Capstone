/* eslint-disable linebreak-style */

import React, { useContext, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import MoreQ from './MoreQ';
import AddQuestion from './AddQuestion';
import AppContext from '../Contexts/AppContext';
import Questions from './Questions';

const QA = () => {
  const { QAs } = useContext(AppContext);
  const [Qs, setQs] = useState([]);
  const { productId } = useContext(AppContext);
  const [id, setId] = useState('');
  const [questionCount, setQuestionCount] = useState(4);

  const moreQuestions = () => {
    setQuestionCount(questionCount + 2);
  };

  useEffect(() => {
    setQs(QAs);
    setId(productId);
    setQuestionCount(questionCount);
  });

  // console.log(count);

  return (
    <div style={{ width: '100vh' }}>
      <h2>QA Section</h2>
      <SearchBar />
      {Qs.slice(0, questionCount).map((Q) => (
        <Questions Q={Q} key={Q.question_id} />
      ))}
      <button type="button" onClick={moreQuestions}>
        More Answered Questions
      </button>
      <AddQuestion PId={id} />
    </div>
  );
};

export default QA;

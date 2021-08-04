/* eslint-disable linebreak-style */

import React, { useContext, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import AddQuestion from './AddQuestion';
import AppContext from '../Contexts/AppContext';
import Questions from './Questions';

const QA = () => {
  const { QAs, productId } = useContext(AppContext);
  const [questionCount, setQuestionCount] = useState(4);
  const [searchTerm, setSeachTerm] = useState('');
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    setQuestionList(QAs.data);
  });

  const moreQuestions = () => {
    setQuestionCount(questionCount + 2);
  };

  const handleOnChange = (e) => {
    setSeachTerm(e.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
    // const searchList = QAs.data.filter((Q) => {
    //   if (!searchTerm) {
    //     return Q;
    //   }
    //   return Q.question_body
    //     .toLowerCase()
    //     .inclues(searchTerm.toLocaleLowerCase());
    // });

    // setQuestionList(searchList);
  };

  // console.log(questionList);

  return (
    <div style={{ width: '80vh' }}>
      <h2>QA Section</h2>
      {/* <SearchBar /> */}
      <input
        placeholder="search"
        name="search"
        value={searchTerm}
        onChange={handleOnChange}
      />
      <button onClick={handleSearch} type="button">Search</button>
      {/* Q Feed   */}
      <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
        {/* {setQuestionList(QAs.data.filter((Q) => {
          if (!searchTerm) {
            return Q;
          }
          return Q.body
            .toLowerCase()
            .inclues(searchTerm.toLocaleLowerCase());
        }))} */}

        {questionList.slice(0, questionCount).map((Q) => (
          <Questions Q={Q} key={Q.question_id} />
        ))}
      </div>

      {/* More Qs     */}
      <button type="button" onClick={moreQuestions}>
        More Answered Questions
      </button>
      <AddQuestion PId={productId} />
    </div>
  );
};

export default QA;

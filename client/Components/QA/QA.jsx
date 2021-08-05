/* eslint-disable linebreak-style */

import React, { useContext, useEffect, useState } from 'react';
import AddQuestion from './AddQuestion';
import AppContext from '../Contexts/AppContext';
import Questions from './Questions';

const QA = () => {
  const { QAs, productId } = useContext(AppContext);
  const [questionCount, setQuestionCount] = useState(4);
  const [searchTerm, setSeachTerm] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  // default questionList to live filter

  useEffect(() => {
    setQuestionList(QAs.data);
  }, []);

  useEffect(() => {
    const newData = searchList === [] ? QAs.data : searchList;
    setQuestionList(newData);
    // console.log(newData);
    console.log(questionList);
  }, [searchList, questionList]);

  useEffect(() => {
    // debugger;
    if (QAs.data) {
      const searchRender = QAs.data.filter((Q) => (
        !searchTerm ? Q : Q.question_body
          .toLowerCase()
          .includes(searchTerm.toLowerCase())));
      setSearchList(searchRender);
      console.log(searchRender);
    }
  }, [searchTerm]);

  const moreQuestions = () => {
    setQuestionCount(questionCount + 2);
  };

  const handleOnChange = (e) => {
    setSeachTerm(e.target.value);
  };

  // as opposed to filtering IN PLACE....
  // consider function that creates new array of resulting search
  // if condition passes (x>3)
  // setQuestionList

  const handleSearch = () => {
    // console.log(searchTerm);
    // // console.log(QAs.data);
    // const searchRender = QAs.data.filter((Q) => (
    //   !searchTerm ? Q : Q.question_body
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase())));
    // setSearchList(searchRender);
  };

  console.log(questionList);

  return (
    Object.keys(QAs).length && Object.keys(productId).length ? (
      <div style={{ width: '90vh' }}>
        <h2>QA Section</h2>
        {/* <SearchBar /> */}
        <input
          style={{ width: '90vh' }}
          placeholder="Have a question? Search for answers…"
          name="search"
          value={searchTerm}
          onChange={handleOnChange}
        />
        <button onClick={handleSearch} type="button">Search</button>
        {/* <div style={{ visibility: !questionList ? 'visible' : 'hidden' }}> */}
        {/* <AddQuestion PId={productId} /> */}
        {/* </div> */}
        {/* Q Feed   */}
        <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>

          {questionList.slice(0, questionCount).map((Q) => (
            <Questions Q={Q} key={Q.question_id} />
          ))}
        </div>

        {/* More Qs     */}
        <button type="button" onClick={moreQuestions}>
          More Answered Questions
        </button>
        {/* <div style={{ visibility: !questionList ? 'hidden' : 'visible' }}> */}
        <AddQuestion PId={productId} />
        {/* </div> */}
      </div>
    ) : (<div>Loading...</div>)
  );
};

export default QA;

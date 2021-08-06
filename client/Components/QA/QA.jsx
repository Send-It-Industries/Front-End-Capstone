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
  // const [highlight, setHighlight] = useState('');

  useEffect(() => {
    setQuestionList(QAs.data);
  }, [QAs.data]);

  useEffect(() => {
    const newData = searchTerm.length >= 3 ? searchList : QAs.data;
    setQuestionList(newData);
  }, [searchList, questionList, searchTerm]);

  useEffect(() => {
    if (QAs.data.length && searchTerm.length >= 3) {
      const searchRender = QAs.data.filter((question) => {
        const doesQuestionMatch = question.question_body
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const doesAnswersMatch = Object.values(question.answers)
          .some((answer) => answer.body.toLowerCase().includes(searchTerm.toLowerCase()));
        return doesQuestionMatch || doesAnswersMatch;
      });
      setSearchList(searchRender);
    }
  }, [searchTerm]);

  const moreQuestions = () => {
    setQuestionCount(questionCount + 2);
  };

  const handleOnChange = (e) => {
    setSeachTerm(e.target.value);
    // const searched = searchTerm;
    // if (searched !== '') {
    //   const text = document.getElementById('text').innerHTML;
    //   const re = new RegExp(searched, 'g'); // search for all instances
    //   const newText = text.replace(re, `<mark>${searched}</mark>`);
    //   document.getElementById('text').innerHTML = newText;
    // }
  };

  return (
    QAs && productId ? (
      <div style={{ width: '90vh' }}>
        <h2>QA Section</h2>
        {/* <SearchBar /> */}
        <input
          style={{ width: '90vh' }}
          placeholder="Have a question? Search for answers…"
          name="search"
          value={searchTerm}
          onChange={handleOnChange}
          autoComplete="off"
          id="search"
          type="text"
        />
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

        <AddQuestion PId={productId} setQuestionList={setQuestionList}/>
        {/* </div> */}
      </div>
    ) : (<div>Loading...</div>)
  );
};

export default QA;

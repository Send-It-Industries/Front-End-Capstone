/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Modal from '../Helpers/Modal';
import AppContext from '../Contexts/AppContext';

const AddQuestion = (props) => {
  const { QAs, productInfo, setQAs } = useContext(AppContext);
  const [isOpen, setOpen] = useState(false);
  const [errors, setErrors] = useState('');
  const [question, setQuestion] = useState({
    product_id: Number(props.PId),
    name: '',
    email: '',
    body: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  // console.log(question);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    if (validateForm()) {
      setQuestion({
        ...question,
        name: question.name,
        email: question.email,
        body: question.body,
      });
      // console.log(question);
      QAs.createQuestion(question, () => {
        setQuestion({
          ...question,
          name: '',
          email: '',
          body: '',
        });
        setErrors(' ');
        setOpen(false);
        // console.lol(question);
        axios.get(`/api/qa/questions?count=1000&product_id=${question.product_id}`)
          .then(({ data }) => {
            const updatedQuestions = data.results;
            setQAs({
              ...QAs, data: updatedQuestions,
            });
            console.log(updatedQuestions);
          });
      });
    }
  };

  const validateForm = () => {
    let errors = '';
    if (!question.name) {
      errors += 'Nickname required \n';
    }
    if (!question.email || validateEmail(question.email) === false) {
      errors += 'Valid email required \n';
    }
    if (!question.body) {
      errors += 'Answer required \n';
    }
    setErrors(errors);
    return !errors;
  };

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Add question
      </button>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        {/* Header     */}
        <h2>Ask Your Question</h2>
        <div>
          About the
          <span> </span>
          {productInfo.name}
        </div>
        <br />
        {/* Name     */}
        <label>What is your nickname:</label>
        <input
          name="name"
          type="text"
          style={{ width: '35%' }}
          onChange={handleInputChange}
          value={question.name}
          maxLength={60}
          placeholder="Example: jackson11!"
        />
        <div>For privacy reasons, do not use your full name or email address</div>
        <br />
        {/* Email     */}
        <label>Your Email:</label>
        <input
          name="email"
          type="text"
          style={{ width: '35%' }}
          onChange={handleInputChange}
          value={question.email}
          maxLength={60}
          placeholder="Why did you like the product or not?"
        />
        <div>For authentication reasons, you will not be emailed</div>
        <br />
        {/* Answer     */}
        <label>Question:</label>
        <input
          name="body"
          type="text"
          style={{ width: '35%', height: '300px' }}
          onChange={handleInputChange}
          value={question.body}
          maxLength={1000}
        />
        <button onClick={handleSubmit} type="button" style={{ width: '35%' }}>
          Submit
        </button>

        <div style={{ visibility: errors === '' ? 'hidden' : 'visible', color: 'red', whiteSpace: 'pre' }}>
          Please enter the following:
          <br />
          { errors }
        </div>
      </Modal>
    </div>
  );
};

export default AddQuestion;

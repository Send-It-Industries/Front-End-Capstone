/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Modal from '../Helpers/Modal';

const AddAnswer = ({ question_id }) => {
  const [isOpen, setOpen] = useState(false);
  const [answer, setAnswer] = useState({
    question_id: '',
    name: '',
    email: '',
    body: '',
  });

  useEffect(() => {
    setAnswer({ ...answer, question_id: { question_id } });
  }, []);

  // console.log(question_id);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswer({ ...answer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer.question_id.question_id);
  };

  return (
    <div>
      <div
        style={{ textDecorationLine: 'underline', cursor: 'pointer' }}
        onClick={() => setOpen(true)}
      >
        Add Answer
      </div>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        <h2>Add Answer</h2>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          style={{ width: '35%' }}
          onChange={handleInputChange}
          value={answer.name}
        />
        <label>Email:</label>
        <input
          name="email"
          type="text"
          style={{ width: '35%' }}
          onChange={handleInputChange}
          value={answer.email}
        />
        <label>Answer:</label>
        <input
          name="body"
          type="text"
          style={{ width: '35%', height: '300px' }}
          onChange={handleInputChange}
          value={answer.body}
        />
        <button onClick={handleSubmit} type="button" style={{ width: '35%' }}>
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default AddAnswer;

/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Modal from '../Helpers/Modal';

const AddQuestion = ({ PId }) => {
  const [isOpen, setOpen] = useState(false);
  const [question, setQuestion] = useState({
    product_id: '',
    name: '',
    email: '',
    body: '',
  });

  useEffect(() => {
    setQuestion({ ...question, product_id: { PId } });
  }, []);

  console.log(PId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(question.product_id);
  };

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Add question
      </button>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        <h2>Add a question</h2>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          style={{ width: '35%' }}
          onChange={handleInputChange}
          value={question.name}
        />
        <label>Email:</label>
        <input
          name="email"
          type="text"
          style={{ width: '35%' }}
          onChange={handleInputChange}
          value={question.email}
        />
        <label>Question:</label>
        <input
          name="body"
          type="text"
          style={{ width: '35%', height: '300px' }}
          onChange={handleInputChange}
          value={question.body}
        />
        <button onClick={handleSubmit} type="button" style={{ width: '35%' }}>
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default AddQuestion;

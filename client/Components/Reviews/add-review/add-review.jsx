/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState, useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import StarRatings from 'react-star-ratings';
import Modal from '../../Helpers/Modal';
import AppContext from '../../Contexts/AppContext';
import Characteristic from './addcharacteristics';

const AddReview = () => {
  const {
    reviewMeta, productInfo, productId, createReview,
  } = useContext(AppContext);

  const blankForm = {
    product_id: Number(productId),
    rating: 0,
    name: '',
    email: '',
    summary: '',
    body: '',
  };

  const [isOpen, setOpen] = useState(false);
  const [errors, setErrors] = useState(' ');
  const [newReview, setNewReview] = useState(blankForm);
  const [characteristics, setCharacteristics] = useState([]);
  const [starRating, setStarRating] = useState(0);

  const characteristicArr = (() => {
    let keys = [];
    if (!reviewMeta.characteristics) { return keys; }
    const characterObj = reviewMeta.characteristics;
    keys = Object.keys(characterObj);
    return keys;
  })();

  useEffect(() => { setCharacteristics(characteristicArr); }, [reviewMeta]);
  // console.log(characteristics);

  // CLICK HANDLERS

  const handleStarClick = (rating) => {
    // console.log(rating);
    setStarRating(rating);
  };
  // console.log(starRating);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // VALIDATION

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    // returns boolean
    let errors = '';
    if (!newReview.name) {
      errors += 'Nickname required \n';
    }
    if (!newReview.email || validateEmail(newReview.email) === false) {
      errors += 'Valid email required \n';
    }
    if (!newReview.body) {
      errors += 'Answer required \n';
    }
    // console.log(errors);
    setErrors(errors);
    return !errors;
  };

  // HANDLE SUBMIT

  const handleSubmit = (e) => {
    if (validateForm()) {
      setNewReview({
        ...newReview,
        rating: starRating,
        name: newReview.name,
        email: newReview.email,
        body: newReview.body,
      });
      // console.log(newReview);
      createReview(newReview);
      setNewReview({
        blankForm,
      });
      setErrors(' ');
    }
  };

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Add Review
      </button>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        {/* Header     */}
        <h2>Submit a Review!</h2>
        <div>
          Review of:
          <span> </span>
          {productInfo.name}
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div>
            <label>What is your nickname:</label>
            <input
              name="name"
              type="text"
              style={{ width: '35%' }}
              onChange={handleInputChange}
              value={newReview.name}
              maxLength={60}
              placeholder="Example: jackson11!"
            />
            <div>For privacy reasons, do not use your full name or email address</div>
          </div>
          {/* <br /> */}
          {/* Email     */}
          <div>
            <label>Your Email:</label>
            <input
              name="email"
              type="text"
              style={{ width: '35%' }}
              onChange={handleInputChange}
              value={newReview.email}
              maxLength={60}
              placeholder="Example: EmailAddress@domain.com"
            />
            <div>For authentication reasons, you will not be emailed</div>
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <label> Overall Rating: </label>
            <StarRatings starDimension="25px" name="stars" isSelectable="true" changeRating={handleStarClick} rating={starRating} starHoverColor="rgb(109, 122, 130)" starSpacing="0px" />
          </div>
          <div onChange={handleInputChange}>
            <label>Would you recommend this product?</label>
            <input type="radio" name="recommended" value="yes" id="choice-yes" />
            Yes
            <input type="radio" name="recommended" value="no" id="choice-no" />
            No
          </div>
        </div>
        <br />
        {characteristics.map((characteristic, Idx) => (
          <Characteristic characteristic={characteristic} key={Idx} onChange={handleInputChange} />))}
        <br />
        <label>Review Summary</label>
        <input
          name="summary"
          type="text"
          style={{ width: '35%', height: '20px' }}
          onChange={handleInputChange}
          value={newReview.summary}
          maxLength={60}
        />
        <br />
        {/* Answer     */}
        <label>Review:</label>
        <textarea
          name="body"
          rows={16}
          style={{ width: '35%', height: '300px' }}
          onChange={handleInputChange}
          value={newReview.body}
          maxLength={1000}
        />
        <div>
          Upload Photos
          <br />
          <input type="file" />
        </div>
        <br />
        <button onClick={handleSubmit} type="button" style={{ width: '35%' }}>
          Submit
        </button>

        <div style={{ visibility: errors === ' ' ? 'hidden' : 'visible', color: 'red', whiteSpace: 'pre' }}>
          Please enter the following:
          <br />
          { errors }
        </div>
      </Modal>
    </div>
  );
};

export default AddReview;

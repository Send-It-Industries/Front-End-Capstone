/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState, useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import StarRatings from 'react-star-ratings';
import Modal from '../../Helpers/ReviewModal';
import AppContext from '../../Contexts/AppContext';
import Characteristic from './addcharacteristics';

const AddReview = () => {
  const {
    reviewMeta, productInfo, productId, createReview,
  } = useContext(AppContext);

  const blankForm = {
    product_id: Number(productId),
    rating: '',
    name: '',
    email: '',
    summary: '',
    body: '',
    recommend: '',
    characteristics: {},
    photos: [],
  };

  const [isOpen, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState('');
  const [newReview, setNewReview] = useState(blankForm);
  const [characteristics, setCharacteristics] = useState([]);
  const [starRating, setStarRating] = useState(0);
  const [addCharacteristics, setAddCharacteristics] = useState({});
  const [photos, setPhotos] = useState([]);
  const [starDescriber, setStarDescriber] = useState('');
  const [bodyCount, setBodyCount] = useState(50);

  const characteristicArr = (() => {
    let twoples = [];
    if (!reviewMeta.characteristics) { return twoples; }
    const characterObj = reviewMeta.characteristics;
    twoples = Object.entries(characterObj);
    const ids = (() => (
      twoples.map((twople) => {
        const obj = { characteristic: twople[0], id: twople[1].id };
        // console.log(obj);
        return obj;
      })
    ))();
    // console.log ('characteristicID: ', ids);
    return ids;
  })();

  useEffect(() => { setCharacteristics(characteristicArr); }, [reviewMeta]);
  // console.log(characteristics);

  // CLICK HANDLERS

  const handleStarClick = (rating) => {
    // console.log(rating);
    const adjArr = ['null', 'Poor', 'Fair', 'Average', 'Good', 'Great'];
    setStarDescriber(adjArr[rating]);
    setStarRating(rating);
    setNewReview({ ...newReview, rating });
    console.log(newReview);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewReview({ ...newReview, [name]: value });
    if (name === 'body') {
      setBodyCount(50 - value.length);
    }
    console.log(newReview);
  };

  const handleCharacteristicChange = (e) => {
    const { name, value } = e.target;
    const num = parseInt(value, 10);
    // console.log(name, value);
    setAddCharacteristics({ ...addCharacteristics, [name]: num });
    console.log('into set review ', addCharacteristics);
    setNewReview({ ...newReview, characteristics: addCharacteristics });
    // console.log(addCharacteristics, newReview);
  };

  const fileChangeHandler = (e) => {
    const { files } = e.target;
    console.log(files[0].name);
    const photo = files[0].name;
    setPhotos(files);
    setNewReview({ ...newReview, photos: [photo] });
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
      errors += 'Review Body required \n';
    }
    // if (newReview.body.length < 60) {
    //   errors += 'Minimum review length not reached \n';
    // }
    if (!newReview.rating) {
      errors += 'Star Rating required \n';
    }
    if (!newReview.recommend) {
      errors += 'Recommendation required \n';
    }
    // console.log(errors);
    // console.log(errors);
    if (errors) {
      setFormErrors(errors);
      return errors;
    }
    return 'noErrors';
  };

  // HANDLE SUBMIT

  const handleSubmit = () => {
    if (validateForm() === 'noErrors') {
      const queryReady = newReview;
      if (newReview.recommend === 'yes') {
        queryReady.recommend = true;
      } else { queryReady.recommend = false; }
      queryReady.characteristics = addCharacteristics;
      console.log('query Ready: ', queryReady);
      createReview(queryReady);
      setNewReview(
        blankForm,
      );
      setOpen(false);
      setStarRating(0);
      setFormErrors('');
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          width: '10rem',
          height: '3.5rem',
          margin: '0.5rem 0.85rem',
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '1.25rem',
          color: 'rgb(109, 122, 130)',
          // fontWeight: 'bold',
        }}
      >
        Add a Review +
      </button>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        {/* Header     */}
        {/* <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}> */}
        <h2>Submit a Review!</h2>
        <div>
          Review of:
          <span style={{ fontWeight: 'bold', marginLeft: '0.75rem' }}>
            {productInfo.name}
          </span>
        </div>
        <br />
        <div style={{
          // display: 'flex',
          // flexDirection: 'row',
          // justifyContent: 'space-between',
        }}
        >
          <div>
            <label>What is your nickname:</label>
            <input
              name="name"
              type="text"
              style={{ width: '35%', margin: '0.5rem 0.75rem' }}
              onChange={handleInputChange}
              value={newReview.name}
              maxLength={60}
              placeholder="Example: jackson11!"
            />
            <div style={{ fontWeight: 'lighter', marginBottom: '01rem' }}>For privacy reasons, do not use your full name or email address</div>
          </div>
          {/* <br /> */}
          {/* Email     */}
          <div>
            <label>Your Email:</label>
            <input
              name="email"
              type="text"
              style={{ width: '35%', margin: '0.5rem 0.75rem' }}
              onChange={handleInputChange}
              value={newReview.email}
              maxLength={60}
              placeholder="Example: EmailAddress@domain.com"
            />
            <div style={{ fontWeight: 'lighter', marginBottom: '0.5rem' }}>For authentication reasons, you will not be emailed</div>
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <label> Overall Rating: </label>
            <StarRatings starDimension="25px" name="stars" isSelectable="true" changeRating={handleStarClick} rating={starRating} starHoverColor="rgb(109, 122, 130)" starSpacing="0px" />
          </div>
          <div>
            {starDescriber}
          </div>
        </div>
        <div onChange={handleInputChange} style={{ marginTop: '0.75rem' }}>
          <label>Would you recommend this product?</label>
          <input type="radio" name="recommend" value="yes" id="choice-yes" />
          Yes
          <input type="radio" name="recommend" value="no" id="choice-no" />
          No
        </div>

        <br />
        {characteristics.map((mapCharacteristic) => (
          <Characteristic
            characteristic={
            mapCharacteristic.characteristic
            }
            id={mapCharacteristic.id}
            key={mapCharacteristic.id}
            changeHandler={handleCharacteristicChange}
          />
        ))}
        <br />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <label>Review Summary</label>
          <input
            name="summary"
            type="text"
            style={{ width: '65%', height: '20px', marginTop: '0.25rem' }}
            onChange={handleInputChange}
            value={newReview.summary}
            placeholder="Example: Best purchase Ever!"
            maxLength={60}
          />
          <br />
          <label>Review:</label>
          <textarea
            name="body"
            rows={16}
            style={{
              width: '65%', height: '250px', resize: 'none', minHeight: '10vh', marginTop: '0.25rem',
            }}
            onChange={handleInputChange}
            value={newReview.body}
            placeholder="Why did you like this product or... not?"
            maxLength={1000}
          />
          {bodyCount > 0
            ? (
              <div style={{ fontSize: '12px' }}>
                Minimum required character left:
                {' '}
                {bodyCount}
              </div>
            ) : <div style={{ fontSize: '12px' }}> Sufficient Characters </div>}
          <br />
          <div>
            Upload Photos
          </div>
          <div>
            <input type="file" onChange={fileChangeHandler} style={{ marginTop: '0.25rem' }} />
          </div>
          <br />
          <button onClick={handleSubmit} type="button" style={{ width: '35%', marginLeft: '4rem' }}>
            Submit
          </button>

          <div style={{ visibility: formErrors === '' ? 'hidden' : 'visible', color: 'red', whiteSpace: 'pre' }}>
            Please enter the following:
            <br />
            { formErrors }
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </div>
  );
};

export default AddReview;

/* eslint-disable linebreak-style */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from './Contexts/AppContext';

import ReviewSummary from './Reviews/summary-reviews';
// import ProductFeed from './RelatedProducts/ProductFeed';
import QA from './QA/QA';
import ProductOverview from './ProductOverview/ProductOverview';
import reviewAvg from './Helpers/AvgFunction';

const App = () => {
  // ------------------------------------------------------------------------------------
  // ------------------                State                 ----------------------------
  // ------------------------------------------------------------------------------------
  const [productId, setProductId] = useState('18083');
  const [selectedStyle, setSelectedStyle] = useState({});
  const [productInfo, setProductInfo] = useState({});

  const [cart, setCart] = useState([]);
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const [QAs, setQAs] = useState({ /*createQuestion, createAnswer, data: []*/ });
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  const [avgReview, setAvgReview] = useState(0);
  const [filteredReviews, setFilteredReviews] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const toggleExpandedView = () => (
    setExpanded((isExpanded) => (!isExpanded))
  );

  // ------------------------------------------------------------------------------------
  // ------------------            HTTP Requests             ----------------------------
  // ------------------------------------------------------------------------------------
  // ------------------                Create                ----------------------------

  const createQuestion = (question) => {
    axios.post('/api/qa/questions', question)
      .then(() => {
        console.log('do something.... I just posted a QUESTION');
      });
  };

  const createAnswer = (answer, id) => {
    axios.post(`/api/qa/questions/${id}/answers`, answer)
      .then(() => {
        console.log('do something.... I just posted an ANSWER');
      });
  };

  // ------------------                 Read                 ----------------------------
  const fetchProduct = (id) => (
    Promise.all([axios.get(`/api/products/${id}`), axios.get(`/api/products/${id}/styles`)])
      .then(([infoRes, styleRes]) => ([infoRes.data, styleRes.data]))
      .then(([productInfo, productStyles]) => {
        setProductInfo({ ...productInfo, styles: productStyles.results });
        setSelectedStyle(() => (
          (productStyles.results.filter((style) => (style['default?']))[0]) || (productStyles.results[0])
        ));
        setDisplayImageIndex(0);
      })
  );
  // const fetchProductInfo = (id) => axios.get(`/api/products/${id}`);
  // const fetchProductStyles = (id) => axios.get(`/api/products/${id}/styles`);
  const fetchQA = (id) => (
    axios.get(`/api/qa/questions?count=1000&product_id=${id}`)
      .then(({ data }) => setQAs({ ...QAs, data: data.results, createQuestion, createAnswer }))
  );

  const fetchReviews = (id, sort = 'relevant') => (
    axios.get(`/api/reviews?count=1000&product_id=${id}&sort=${sort}`)
      .then(({ data }) => setReviews(data.results))
      // .then(setFilteredReviews(reviews))
  );

  const fetchMetaReview = (id) => (
    axios.get(`/api/reviews/meta?product_id=${id}`)
      .then(({ data }) => setReviewMeta(data))
  );
  // ------------------                Update                ----------------------------
  const updateHelpful = () => { };

  const updateReport = () => { };
  // ------------------                Delete                ----------------------------

  // ------------------------------------------------------------------------------------
  // ------------------              Initialize              ----------------------------
  // ------------------------------------------------------------------------------------
  useEffect(() => {
    fetchProduct(productId)
      .then(() => (
        Promise.all([fetchQA(productId), fetchReviews(productId), fetchMetaReview(productId)])
      ));
  }, []);

  useEffect(() => {
    if (reviewMeta.product_id) {
      const avg = reviewAvg(reviewMeta.ratings);
      setAvgReview(avg);
    }
  }, [reviewMeta]);

  // ------------------------------------------------------------------------------------
  // ------------------                Render                ----------------------------
  // ------------------------------------------------------------------------------------
  const contextVal = {
    productId,
    setProductId,
    productInfo,
    QAs,
    fetchQA,
    reviews,
    filteredReviews,
    setFilteredReviews,
    reviewMeta,
    fetchReviews,
    avgReview,
    updateHelpful,
    updateReport,
    selectedStyle,
    setSelectedStyle,
    displayImageIndex,
    setDisplayImageIndex,
    cart,
    setCart,
    expanded,
    toggleExpandedView,
  };

  return (
    <AppContext.Provider value={contextVal}>
      <ProductOverview />
      {/* <ProductFeed />
      <ProductFeed /> */}
      <QA />
      <ReviewSummary />
    </AppContext.Provider>
  );
};

export default App;
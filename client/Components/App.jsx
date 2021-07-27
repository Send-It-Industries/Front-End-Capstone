import React from 'react';
import ReviewSummary from './Reviews/summary-reviews';
import ProductFeed from './RelatedProducts/ProductFeed';
import QA from './QA/QA';

const App = () => (
  <div>
    <h1>Hello World!</h1>
    <ProductFeed />
    <ProductFeed />
    <QA />
    <ReviewSummary />
  </div>
);

export default App;

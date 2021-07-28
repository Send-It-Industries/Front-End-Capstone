import React from 'react';
import ReviewSummary from './Reviews/summary-reviews';
import ProductFeed from './RelatedProducts/ProductFeed';
import QA from './QA/QA';
import ProductOverview from './ProductOverview/ProductOverview';

const App = () => (
  <div>
    <h1>APP GOES HERE</h1>
    <ProductOverview />
    <ProductFeed />
    <ProductFeed />
    <QA />
    <ReviewSummary />
  </div>
);

export default App;

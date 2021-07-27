/* eslint-disable arrow-body-style */
import React from 'react';
import SearchBar from './SearchBar';
import MoreQ from './MoreQ';
import AddQ from './AddQ';

const QA = () => {
  return (
    <div>
      <h2>QA Section</h2>
      <SearchBar />
      <div>😉 QA FEED HERE 😉</div>
      {/* Map to QA_IND */}
      <MoreQ />
      <AddQ />
    </div>
  );
};

export default QA;

/* eslint-disable arrow-body-style */
import React from 'react';
import SearchBar from './SearchBar';
import MoreQ from './MoreQ';
import AddQ from './AddQ';

const QA = () => {
  return (
    <div>
      <SearchBar />
      {/* Map to QA_IND */}
      <MoreQ />
      <AddQ />
    </div>
  );
};

export default QA;

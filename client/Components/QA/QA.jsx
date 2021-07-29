/* eslint-disable arrow-body-style */
import React from 'react';
// import { AppContext } from '../../App'
import SearchBar from './SearchBar';
import MoreQ from './MoreQ';
import AddQ from './AddQ';

const QA = () => {
  // const { QAs } = useContext(AppContext)

  return (
    <div>
      <h2>QA Section</h2>
      <SearchBar />
      <div>😉 QA FEED HERE 😉</div>
      {/* <div>{QAs.product_id}</div> */}
      {/* Map to QA_IND */}
      <MoreQ />
      <AddQ />
    </div>
  );
};

export default QA;

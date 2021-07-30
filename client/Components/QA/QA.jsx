/* eslint-disable linebreak-style */

import React, { useContext, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import MoreQ from './MoreQ';
import AddQ from './AddQ';
import AppContext from '../Contexts/AppContext';
import Questions from './Questions';

const QA = () => {
  const { QAs } = useContext(AppContext);
  const [Qs, setQs] = useState([]);

  useEffect(() => {
    setQs(QAs);
  });

  return (
    <div style={{ width: '100vh' }}>
      <h2>QA Section</h2>
      <SearchBar />
      {Qs.slice(0, 4).map((Q) => <Questions Q={Q} key={Q.question_id} />)}
      <MoreQ />
      <AddQ />
    </div>
  );
};

export default QA;

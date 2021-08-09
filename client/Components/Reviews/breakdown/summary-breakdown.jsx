import React from 'react';
import AverageRating from './average-rating';
import Recommended from './recommended-breakdown';
import StarBreakdown from './star-breakdown';
import CharacteristicBreakdown from './characteristics-breakdown';

const Breakdown = () => (
  <div
    style={{
      width: '20vw',
    }}
  >
    <div style={{ fontSize: '1rem', fontWeight: 'lighter' }}>RATINGS & REVIEWS </div>
    <AverageRating />
    <Recommended />
    <StarBreakdown />
    <CharacteristicBreakdown />
  </div>
);

export default Breakdown;

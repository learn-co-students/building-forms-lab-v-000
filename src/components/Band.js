import React from 'react';

const Band = bands => (
  <div>
    <ul>
      {bands.name.map(band => <li>{band.name}</li>)}
    </ul>
  </div>
)

export default Band;

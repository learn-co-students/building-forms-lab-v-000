import React from 'react';

const BandList = ({ bands }) => {

  const renderBands = bands.map((band) => {
    return <li>{band.name}</li>;
  });

  return (
    <div>
      {renderBands}
    </div>
  )
}

export default BandList;

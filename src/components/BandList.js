import React from "react";

const BandList = props => {
  const allBands = props.bands.map((band, id) => {
    <ul>
      <li key={id}>{band.name}</li>
    </ul>;
  });

  return <div>{allBands}</div>;
};

export default BandList;

import React from 'react';

// Once you've got a form successfully dispatching actions and adding bands to your Redux store,
// write the necessary code to display each band name from the store. Band names should be
// listed in individual li elements.

const Band = props => {
  return <li>{props.name}</li>
}

export default Band

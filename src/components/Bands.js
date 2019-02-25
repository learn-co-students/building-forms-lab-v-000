import React from 'react';

const Bands = props => {
  const lisArray = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });

  return (
    <div>
      {lisArray}
    </div>
  );

};

export default Bands;

/*
// Bands is a stateless functional presentational component
// used to display <li>s for the band names entered in the form
// Bands arrow function accepts props object as its argument
// and renders valid JSX code
// props.bands is the array of band objects
// We iterate over this array of band objects using .map()
// For each band object in the array,
// generate an <li> element with key attribute (unique string identifier)
// = the index position of that band object in the array
// and the inner text of the <li> = the string band name corresponding to
// the name key of the band object
// We inject the array of <li>s into the <div>, which is returned by Bands stateless functional component
*/
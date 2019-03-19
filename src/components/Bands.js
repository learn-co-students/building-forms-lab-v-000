import React from 'react';

// const ListBand = (props) => { 
//   <li>{ props.value }</li> 
//   console.log(props.value)
// }

const Bands = props => {
  const ListBands = props.bands.map((band, index) => {
    return <li key={index}> {band.name} </li>
  });

  return (
    <div>
      <ul>
        {ListBands}
      </ul>
    </div>
    );
};

export default Bands;

// or this -- diff in syntax? 

// renderBands = () => this.props.bands.map((index, band ) => {
//   return <li key={index}>{band.name}</li>;
//   });
import React from 'react';

 const Bands = ({bands}) => {
   const bandcard = bands.map((band, index) => {
     return <li key={index}>{band.name}</li>;
   });
   return (
     <div>
     < br/> List of Bands
       {bandcard}
     </div>
   );
 };

export default Bands;

// equivalent to above
 // const Bands = props => {
 //   const bands = props.bands.map((band, index) => {
 //     return <li key={index}>{band.name}</li>;
 //   });
 //   return (
 //     <div>
 //     < br/> List of Bands
 //       {bands}
 //     </div>
 //   );
 // };

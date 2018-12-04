import React from "react";
import Band from "./Band";
 const Bands = props => {

  const bands = props.bands.map((band, index) => {
    return <Band key={index} band={band} />;
  });
   return <ul>{bands}</ul>;
};
 export default Bands;
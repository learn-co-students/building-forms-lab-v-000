import React, { Component } from 'react';

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    });

    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;

/*
You will need to write the Bands component. This component should display a ul with a list element for each of the bands in the store's state. Each list element should have text with the corresponding name of the band.
*/

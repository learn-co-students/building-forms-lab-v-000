import React, { Component } from 'react';
import BandInput from './BandInput'

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map((band, index) => {
      //console.log(band)
      return (<li>{band}</li>) /* code changed */
    });

    //console.log(bands)

    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;

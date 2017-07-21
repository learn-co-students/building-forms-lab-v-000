import React, { Component } from 'react';
import BandInput from './BandInput';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <BandInput text={band.text} key={index} />
      });
    return (
      <div>
        //<li>{Object.keys(this.props)}</li>
        <li>{bands}</li>
      </div>
    );
  }
};

export default Bands;

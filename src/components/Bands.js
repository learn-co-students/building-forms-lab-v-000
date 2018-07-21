import React, { Component } from 'react';
import BandInput from './BandInput';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li>{band}</li>
    });
    return (
      <ul>
      {bands}
      </ul>
    );
  }
};

export default Bands;

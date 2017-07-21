import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map((band, index) => <li key={index} >{band}</li>)

    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;

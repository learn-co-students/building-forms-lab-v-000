import React, { Component } from 'react';

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })
    // Should render or display an <ul> with <li> for each band in state
    // Each <li> should have text with the bands name - and the index used as a key
    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;

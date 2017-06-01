import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const { bands } = this.props.store.getState();
    return (
      <ul>
        {bands.map((el, index) => <li key={index}>{el}</li>)}
      </ul>
    );
  }
};

export default Bands;

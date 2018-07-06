import React, { Component } from 'react';

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index} >{band}</li>
    })
    return (
      <div>
        <h3>Bands Display</h3>
        {bands}
      </div>
    );
  }
};

export default Bands;

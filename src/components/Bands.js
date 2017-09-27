import React, { Component } from 'react';

class Bands extends Component {
  render(){
    return (
      <ul>
        {this.props.store.getState().bands.map((band, i) =>
          <li key={i}>{band}</li>
        )}
      </ul>
    );
  }
};

export default Bands;

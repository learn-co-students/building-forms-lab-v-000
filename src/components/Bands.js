import React, { Component } from 'react';

class Bands extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.store.getState().bands.map(function(band) {
            return <li key={band}>{band}</li>
          })}
        </ul>
      </div>
    );
  }
};

export default Bands;

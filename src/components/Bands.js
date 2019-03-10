import React, { Component } from 'react';

class Bands extends Component {
  render() {
    return (
      <div>
        { this.props.bands.map((band,i) => <li key={i}>{band.name}</li>) }
      </div>
    )
  }
}

export default Bands;

import React, { Component } from 'react';

class Bands extends Component {

  render() {
    const bands = this.props.store.getState().bands.map((band, i) => {
      return <li key={i} >{band}</li>;
    });

    return <ul>{bands}</ul>;
  }
}

export default Bands;

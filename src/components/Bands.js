import React, { Component } from 'react';

class Bands extends Component {
  render() {
    let bands = this.props.store.getState().bands.map((band) => {
      return <li>{band}</li>;
    });

    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;

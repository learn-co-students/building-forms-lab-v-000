import React, { Component } from 'react';
// import Band from './Band';

class Bands extends Component {
  render() {
    // const bandLIs = this.props.store.getState().bands.map((band, index) => <Band text={band} key={index}/> );
    const bandLIs = this.props.store.getState().bands.map((bandName, index) => <li key={index}>{bandName}</li> );

    return (
      <ul>
        {bandLIs}
      </ul>
    );
  }
};

export default Bands;

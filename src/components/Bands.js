import React, { Component } from 'react';


class Bands extends Component {
  render(){
    const band = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}> {band} </li>
    })
    return (
        <ul>
          {band}
        </ul>

    );
  }
};

export default Bands;

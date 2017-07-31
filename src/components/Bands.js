import React, { Component } from 'react';

class Bands extends Component {
  render(){

    var bands = this.props.store.getState().bands.map((band,index) => {
      return <li key={index}>{band}</li>
    })

    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;

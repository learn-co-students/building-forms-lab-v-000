import React, { Component } from 'react';

class Bands extends Component {


  render(){

    const lis = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })
  

    return (
      <ul>
        {lis}
      </ul>
    );
  }
};

export default Bands;

import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const band = this.props.store.getState().bands.map((band, index) =>{
    return <li key={index}>{band}</li>
  })
  return (
      <div>
        <ul>
          {band}
        </ul>
      </div>
    );
  }
};

export default Bands;

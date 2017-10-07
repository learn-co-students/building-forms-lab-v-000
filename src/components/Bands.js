import React, { Component } from 'react';

class Bands extends Component {
  render(){
    let bandLIs = this.props.store.getState().bands.map(band=> <li>{band}</li>)
    return (
      <div>
        <ul>
          {bandLIs}
        </ul>
      </div>
    );
  }
};

export default Bands;

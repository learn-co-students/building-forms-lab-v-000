import React, { Component } from 'react';

class Bands extends Component {
  render(){

    const lis = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}> {band} </li>
    });

    return (
      <div>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
};

export default Bands;

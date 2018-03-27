import React, { Component } from 'react';

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li>{band}</li>
    })

    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;

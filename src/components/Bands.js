import React, { Component } from 'react';

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map((band, index) => {
      return <ul><li key={index}>{band}</li></ul>
    })
    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;

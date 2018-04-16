import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const state = this.props.store.getState()
    const bands = state.bands.map( (band, index) => <li key={index} >{band}</li>)

    return (
      <div>
        <ul>
          {bands}
        </ul>
      </div>
    );
  }
};

export default Bands;

import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map(((band, index) => {
      return <li>{band}</li>
    }
      
  ))
    return (
      <div>
        <ul>{bands}</ul>
      </div>
    );
  }
};

export default Bands;

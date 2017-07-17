import React, { Component } from 'react';


const Band = props => <li>{props.name}</li>

class Bands extends Component {


  render(){
    const bands = this.props.store.getState().bands.map((band, index) => <li key={index}>{band}</li>)
    return (
        <ul>
          {bands}
        </ul>
    );
  }
};

export default Bands;

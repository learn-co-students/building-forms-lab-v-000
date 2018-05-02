import React, { Component } from 'react';

class Bands extends Component {

  render(){
    const Band = this.props.store.getState().bands.map((band,index) =>{
      return <li>{band}</li>
    } )
    return (
      <ul>
        {Band}
      </ul>
    );
  }
};

export default Bands;

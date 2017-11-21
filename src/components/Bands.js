import React, { Component } from 'react';

class Bands extends Component {


  render(){
    let x = this.props.store.getState().bands

    return (
      <div>
      <ul>
        {x.map((band, index) => <li key={index}>{band}</li> )}

      </ul>
      </div>
    );
  }
};

export default Bands;

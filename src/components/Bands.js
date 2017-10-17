import React, { Component } from 'react';
// import BandInput from './BandInput'


class Bands extends Component {
  

  render(){
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index} >{band}</li>
    });

    {debugger}
    

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

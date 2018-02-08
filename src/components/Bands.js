import React, { Component } from 'react';
// import Band from './Band';
class Bands extends Component {
  render(){
    // debugger;
    const bands = this.props.store.getState().bands.map((band, index) => {
      // return <Band band={band} key={index} />
      return <li key={index}>{band}</li>
    })
    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;

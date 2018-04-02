import React, { Component } from 'react';

class Bands extends Component {

  render(){

  	const BANDS = this.props.store.getState().bands.map((band,index) => {
  	  return (<li key={index}>{band}</li>)
    })

    return (
      <div>
      	<ul>
        {BANDS}
        </ul>
      </div>
    );
  }
};

export default Bands;

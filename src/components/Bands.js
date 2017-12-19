import React, { Component } from 'react';

class Bands extends Component {
  render(){
  	const listBands = this.props.store.getState().bands.map((band, index) => {
			return <li key={index}>{band}</li>
	})
    return (
      <div>
        <ul>
        	{listBands}
        </ul>
      </div>
    );
  }
};

export default Bands;

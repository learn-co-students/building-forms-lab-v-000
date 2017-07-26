import React, { Component } from 'react';

class Bands extends Component {

  render(){
  	const bandList = this.props.store.getState().bands.map((band) => {
		return <li key={band}>{band}</li>
	});

    return (
      <div>
        <ul>{bandList}</ul>
      </div>
    );
  }
};

export default Bands;

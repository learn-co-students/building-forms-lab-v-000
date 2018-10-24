import React, { Component } from 'react';

class Bands extends Component {
	bands = () => {
		return this.props.bands.map((band, idx) => {
			return <li key={idx}>{band.name}</li>
		})
	}

  render(){

    return (
      <div>
				<ul>
					{this.bands()}
				</ul>
      </div>
    );
  }
};

export default Bands;
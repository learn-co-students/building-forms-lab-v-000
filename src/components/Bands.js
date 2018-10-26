import React, { Component } from 'react';
import { connect } from 'react-redux'



class Bands extends Component {
  render(){
		const bands = this.props.bands.map((bands, id) => { 
			console.log(bands)
			return <li key={id}>{bands.text}</li>
		});

const container = {
  	display: 'flex',
  	width: '100%',
  	height: '100%',
  	justifyContent: 'center',
  	alignItems: 'center',
  	textAlign: 'center',
  	flexDirection: 'row'
  }

  	return (
      <div style={{container}}>
        <ul>	
          {bands}
        </ul>
      </div>
    );
  }
};

export default connect(state => ({ bands: state.bands }))(Bands);
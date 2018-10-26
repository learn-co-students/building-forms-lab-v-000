// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';

class BandInput extends Component {
  
  state = {
  	text: ''
  }

  handleSubmit = (event) => {
  	event.preventDefault()
  	const band = {...this.state}
  	this.props.addBand(band);
  	this.setState({
  		text: ''
  	})
  }

  handleChange = (event) => {
  	this.setState({
  		text: event.target.value
  	})
  }


render() {

const container = {
  	display: 'flex',
  	width: '100%',
  	height: '100%',
  	justifyContent: 'center',
  	alignItems: 'center',
  	textAlign: 'center',
  	flexDirection: 'row'
  }
const formContainer = {
  	display: 'flex',
  	width: '25%',
  	height: '100%',
  	justifyContent: 'center',
  	alignItems: 'center',
  	textAlign: 'center',
  	flexWrap: 'wrap',
  }
const formWidth = {
  	width: "100%"
  }
const buttonWidth = {
  	width: "100%",
  	backgroundColor: "teal",
  	border: "solid black 2px",
  	cursor: "pointer"
  }
const span = {
	padding: "5px"
}
    return(
      <div style={container}>
        <form onSubmit={(event) => this.handleSubmit(event)} style={formContainer}>
        	<h1>Enter Band</h1>
        	<input type="text" onChange={(event) => this.handleChange(event)} style={formWidth} value={this.state.text} />
        	<span style={span} />
        	<input type="submit" style={buttonWidth}  />
        </form>
      </div>
    )
  }
}



export default connect(null, { addBand })(BandInput);

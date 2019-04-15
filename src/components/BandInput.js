// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
	constructor() {
		super();

		this.state = {
			name: ''
		}
	}
	
	handleOnSubmit = e => {
		e.preventDefault();
		this.props.addBand(this.state)
		this.setState({
			name: ''
		})
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value 
		})
	}

  render() {
    return(
      <div>
        <form 
        	onSubmit={this.handleOnSubmit}
        >
        	<input 
        		type="text" 
        		name='name'
        		onChange={this.handleChange}
        		value={this.state.name} />

    		<input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	addBand: formData => dispatch({
		type: 'ADD_BAND',
		payload: formData})
})

export default connect(null, mapDispatchToProps)(BandInput)

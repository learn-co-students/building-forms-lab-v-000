// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
	state = {
		name: ""
	}

	handleChange = e => {
		this.setState({
			name: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()

		this.props.addBand(this.state)
		this.setState({
			name: ''
		})
	}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
	        <input type="text" onChange={ this.handleChange }/>
	        <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput

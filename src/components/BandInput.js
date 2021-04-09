// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
	state = {
		name: ''
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addBand(this.state)
		this.setState({
			name: ''
		})
	}

	handleChange = event => {
		this.setState({
			name: event.target.value
		})
	}

  render() {
    return(
      <div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label for='name'></label>
						<input type='text' id='name' value={this.state.name} onChange={(event) => this.handleChange(event)} />
					</div>
					<input type='submit' />
				</form>
				{this.state.name}
      </div>
    )
  }
}

export default BandInput

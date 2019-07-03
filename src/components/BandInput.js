// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
	state = {
		name: ''
	};

	handleOnChange = (event) => {
		// Handle Updating Component State

		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.addBand(this.state);
		this.setState({
			name: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.handleOnSubmit}>
				<input onChange={this.handleOnChange} name="name" value={this.state.name} type="text" />
				<button type="submit">Submit </button>
			</form>
		);
	}
}

export default BandInput;

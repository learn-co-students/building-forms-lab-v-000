// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
		this.setState({
			name: ''
		});
	};
	render() {
		return (
			<form onSubmit={this.handleOnSubmit}>
				<label htmlFor="band-input"> Band Input</label>

				<input onChange={this.handleOnChange} name="band-input" type="text" />
				<button type="submit">Submit </button>
			</form>
		);
	}
}

export default connect()(BandInput);

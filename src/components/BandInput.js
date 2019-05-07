// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBand } from '../actions/actions.js';

class BandInput extends Component {

	state = {
		name: '',
	}

	handleChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addBandMapped({ name: this.state.name });
		this.setState({ name: '' });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						name="bandName"
						onChange={this.handleChange}
						placeholder="Enter a band name."
						type="text"
						value={this.state.name}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addBandMapped: band => dispatch(addBand(band)),
	}
}

export default connect(null, mapDispatchToProps)(BandInput)

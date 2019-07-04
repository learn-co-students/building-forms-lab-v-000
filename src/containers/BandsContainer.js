import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
// import { addBand } from '../actions/bands';

// import manageBand from '../reducers/manageBand';

class BandsContainer extends Component {
	render() {
		return (
			<div>
				BandsContainer
				<BandInput addBand={this.props.addBand} />
				<Bands bands={this.props.bands} />
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { bands: state.bands };
};

const mapDispatchToProps = (dispatch) => ({
	addBand: (band) =>
		dispatch({
			type: 'ADD_BAND',
			band
		})
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

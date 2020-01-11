import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
  	
  	const { bands, addBand } = this.props;
    return(
      <div>
        <BandInput addBand={addBand}/>
        {bands.map((band, idx) => <li key={idx}>{band.name}</li>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		bands: state.bands
	}
}

const mapDispatchToProps = dispatch => ({
	addBand: band => dispatch({ type: "ADD_BAND", band })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

import React, { Component } from 'react';
import BandInput from '../components/BandInput.js';
import BandList from '../components/BandList.js';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <BandList bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

// pass mapDispatchToProps down from Container Component to presentational/form component
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

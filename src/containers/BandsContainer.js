import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {

const addBand = band => {
  return {
    type: 'ADD_BAND',
    band
  };
};

const displayedBands = this.props.bands

let renderedBands = displayedBands.map(band => <li>{band.name}</li>)

    return(
      <div>
        <div>
          <BandInput addBand={this.props.addBand}/>
        </div>
        <div>
          {renderedBands}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band })})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

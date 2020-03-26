import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import { addNewBand } from '../actions/bands';

class BandsContainer extends Component {

  // updateBand = name => {
  //   this.props.addBand(name)
  // };

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        // <ul>
        //   {this.props.bands.map(band => <li>{band}</li>)}
        // </ul>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandName => dispatch(addNewBand(bandName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

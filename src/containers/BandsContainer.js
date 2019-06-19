import React, { Component } from 'react'
import Bands from '../components/Bands';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {

    return(
      <div>
      <BandInput addBand={this.props.addBand}/>
      <Bands bands={this.props.bands}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log("props", state.bands)
  return ({
    bands: state.bands
  })
}


export default connect(mapStateToProps,{ addBand })(BandsContainer)

import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands'
import { connect } from 'react-redux'


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
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formInput => dispatch({type: 'ADD_BAND', payload: formInput})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

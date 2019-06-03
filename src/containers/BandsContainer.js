import React, { Component } from 'react'
import BandInput from '../components/BandInput';

import { connect } from 'react-redux'


class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
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

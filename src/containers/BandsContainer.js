import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"

class BandsContainer extends Component {
  render() {

    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

//Accessing Redux state
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

//Gives me access to a way to connect/dispatch to my reducer
const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

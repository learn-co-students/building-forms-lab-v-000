// the state is an empty array to start

import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from "../components/Band"

class BandsContainer extends Component {
  renderBands = () =>
  this.props.bands.map((band, id) => <Band key={id} text={band.name} />)
  render() {
    return(
      <div>
        {this.renderBands()}
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

// Connection to the Redux store, should be a child of the App component.  

import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

  render() {
    return(
      <div>
        BandsContainer
        <h2>Bands:</h2>
        <ul>
          {this.renderBands()}
        </ul>
        <BandInput addBand={this.props.addBand}/>
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
    addBand: bandInfo => dispatch({type: "ADD_BAND", payload: bandInfo})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

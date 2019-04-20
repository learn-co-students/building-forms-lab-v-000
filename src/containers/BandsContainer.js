import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, i) => <li key={i}>{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <p>{this.renderBands()}</p>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return { bands: state.bands }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(mapStatetoProps, mapDispatchToProps)(BandsContainer)

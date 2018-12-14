import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => 
    <li>{band.name}</li>)
  }

  render() {
    return(
      <div>
        Bands Container
        {this.renderBands()}
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

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type: 'ADD_BAND', band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

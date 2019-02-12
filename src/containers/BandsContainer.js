import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, idx) => <Band key={idx} bandName={band.name} />)

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <ul>
         {this.renderBands()}
         {/* alternative:{this.props.bands.map((band, idx)=> <Band key={idx} bandName={band.name}/>)} */}
        </ul>
      </div>
    )
  }
}

const mapToStateProps = state => {
  return {
    bands: state.bands 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', band})
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(BandsContainer)

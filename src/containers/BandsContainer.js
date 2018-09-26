import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.props.bands.map(band => {return <li key={band.name}>{band.name}</li> })}
        </ul>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addBand: form => dispatch({type: 'ADD_BAND', band: form})
})
const mapStateToProps = state => ({
  bands: state.bands
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

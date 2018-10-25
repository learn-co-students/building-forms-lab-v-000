import React, { Component } from 'react'
import {connect} from 'react-redux';
import BandInput from '../components/BandInput.js'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map((band,index) =>
          <li key={index}>{band.name}</li>)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {addBand: formData => dispatch({ type: 'ADD_BAND', band: formData })}
)

const mapStateToProps = state => (
  {bands: state.bands} 
)

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

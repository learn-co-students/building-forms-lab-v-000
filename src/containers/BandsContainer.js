import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {


  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band, index)=> <Band name={band.name}/>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: formData => dispatch({type:"ADD_BAND", band: formData})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)

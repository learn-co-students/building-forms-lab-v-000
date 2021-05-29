import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <h2>Bands</h2>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
    return{
        bands: store.bands
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addBand: (formData) => dispatch({type: 'ADD_BAND', payload: formData})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( BandsContainer )

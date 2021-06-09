import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={band=>this.props.addBand(band)} />

      </div>
    )
  }
}


const mapStateToProps = (state)=>({
    bands: state.bands
});
const mapDispatchToProps = (dispatch)=>({
    addBand: payload=>dispatch({type: "ADD_BAND", payload})
});

export default connect (mapStateToProps,mapDispatchToProps)(BandsContainer)

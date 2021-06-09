import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {
    bandInputOnSubmit = ({name})=>{
        this.props.addBand(name)
    }

  render() {
    return(
      <div>
        <BandInput addBand={this.bandInputOnSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>({
    addBand: (name)=>dispatch({type: "ADD_BAND", name})
})
const mapStateToProps = (state)=>({
    bands: state.bands
})

export default connect (mapStateToProps,mapDispatchToProps)(BandsContainer)

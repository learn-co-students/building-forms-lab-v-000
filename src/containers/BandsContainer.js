import React, { Component } from 'react'
import {connect} from 'react-redux'
import Bands from '../components/Bands'
import BandInput from '../components/BandInput'

// function addBand(text){
//   return {
//   type: 'ADD_BAND',
//   name: text
//   }
// }

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({
      type: 'ADD_BAND',
      name: formData
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

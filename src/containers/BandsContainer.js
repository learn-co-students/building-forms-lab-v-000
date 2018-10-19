import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  //
  // showBands = () => {
  //   return this.props.bands.map(function (band, id) {
  //     return <li key={id}>{band}</li>
  //   })
  // }

  render() {
    return(
      <div>
        <BandInput AddBand={this.props.AddBand}/>
        <ul>
          <Bands bands={this.props.bands} />
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddBand: (band) => dispatch({type: "ADD_BAND", band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

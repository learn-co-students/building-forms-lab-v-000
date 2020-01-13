import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {

  addBand = band => {
    this.props.dispatch({...band, type: "ADD_BAND"})
  }


  render() {

    return(
      <div>
        BandsContainer
        <BandInput addBand={this.addBand}/>
        {
         this.props.bands.map(band => `<li key={band.name}>{band.name}</li>`)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  //debugger
  return ({
    bands: state.bands
  })
}

export default connect(mapStateToProps)(BandsContainer)

import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {

  addBand = band => {
    this.props.dispatch({...band, type: "ADD_BAND"})
  }





  render() {

    const allBands = this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>;
    });

    return(
      <div>
        BandsContainer
        <BandInput addBand={this.addBand}/>
        {allBands}
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

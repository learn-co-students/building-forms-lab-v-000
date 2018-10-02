import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {


  render() {
  	const renderBands = this.props.bands.map((band, i) => {
      return <li key={i}>{band.name}</li>;
    });
    debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {renderBands}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  render() {

  const bands = () => this.props.bands.map((band, id) => {
  	return <li key={id}> {band.name}</li>
  })


    return(
      <div>
      	<BandInput addBand={this.props.addBand} />
        {bands}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);





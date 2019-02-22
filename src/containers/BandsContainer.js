import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput bands={this.props.addBand}/>
        {this.props.bands.map((band, i) =>
          <li>{band.name}</li>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({
      type: 'ADD_BAND',
      payload: formData
    })
  };

}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)

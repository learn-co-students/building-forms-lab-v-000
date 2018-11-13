import React, { Component } from 'react';
//this component should be the connection to the Redux store
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

//BandInput is child of BandsContainer.
//Therefore, can pass props to BandInput

class BandsContainer extends Component {
  render() {
    const bandList = this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>
    })
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {bandList}
      </div>
    )
  }
}

//return the bit of the Redux store state we want
//in our case, state just has the bands property
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch({ type: 'ADD_BAND', band })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

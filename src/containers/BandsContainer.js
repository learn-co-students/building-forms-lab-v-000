import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {


  render() {
    debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { addBand: payload => dispatch({ type: 'ADD_BAND', payload }) }
}

export default connect(state => ({ bands: state.bands }), mapDispatchToProps)(BandsContainer);

import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  addBand = (band) => {
    this.props.dispatch({type: 'ADD_BAND', band});
  };

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        {this.props.bands.map( (band, index) => <li key={index}>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({ bands: state.bands })

export default connect(mapStateToProps)(BandsContainer);

import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput dispatch={this.props.dispatch}/>
        {this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProps)(BandsContainer)

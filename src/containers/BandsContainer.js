import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import uuid from 'uuid';
import { addBand } from '../actions/bands'

class BandsContainer extends Component {
  render() {
    let bandList = this.props.bands.map(band => <li key={uuid()}>{band.name}</li>)

    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <h3>Bands:</h3>
        <ul className="band-list">
        {bandList}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({ bands: state.bands }), { addBand } )(BandsContainer);

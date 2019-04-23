import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  state = {
    bands: []
  }

  render() {
    return(
      <div>
        <BandInput bands={this.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands }
}

export default connect(mapStateToProps)(BandsContainer);

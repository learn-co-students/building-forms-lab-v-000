import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    const { bands } = this.props
    // console.log(this.props)
    return(
      <div>
        BandsContainer
      <BandInput/>
      {bands.map(band => <li>band.name</li>)}
      </div>
    )
  }
}

const mapStatetoProps = state => ({bands: state.bands});

export default connect(mapStatetoProps)(BandsContainer);

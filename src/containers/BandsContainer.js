import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, index) => <li key={index}> band </li>)

  render() {
    return(
      <div>
        <BandInput />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);

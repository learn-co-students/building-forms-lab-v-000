import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';


class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} band={band} />)

  render() {
    return(
      <div>
        <BandInput />
        {this.renderBands()}
      </div>
    )
  }
}

export default connect(state => ({bands: state.bands}))(BandsContainer)

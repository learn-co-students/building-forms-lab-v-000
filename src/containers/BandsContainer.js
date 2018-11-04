import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () =>
    this.props.bands.map((band, index) => <Band key={index} name={band.name} />)
  ;

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    bands: store.bands
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', payload: band})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

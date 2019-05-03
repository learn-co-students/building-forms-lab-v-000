import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Band from '../components/Band'

class BandsContainer extends Component {

  renderBands() {
    return(
      <ul>
        {this.props.bands.map((band, index) => {
          return(
            <Band key={index} band={band} />
          )
        })}
     </ul>
    )
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <div>
          {this.renderBands()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: "ADD_BAND", payload: formData })
  }
}

const mapStateToProps = state => {
  return {
    bands: [...state.bands]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

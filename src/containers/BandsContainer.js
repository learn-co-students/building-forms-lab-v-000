import React, { Component } from 'react'
import { connect } from 'react-redux';
import Band from '../components/Band'
import BandInput from "../components/BandInput"
class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(
    (band, id) => <Band key={id} band={band} />
  )

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {console.log(this.props.addBand)}
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
};

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

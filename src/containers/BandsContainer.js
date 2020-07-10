import React, { Component } from 'react';
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderNames = () => this.props.bands.map((band, id) => {
    return <li key={id}>{band.name}</li>
  })

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderNames()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (name) => dispatch({ type: 'ADD_BAND', payload: name})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
import React, { Component } from 'react'
import {connect} from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  displayBands = () => this.props.bands.map(({name}, index) => <li key={index}>{name}</li>);

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.displayBands()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => {
      dispatch({type: "ADD_BAND", band: band })
    }
  }
}

export default connect(state=>({bands: state.bands}),mapDispatchToProps)(BandsContainer)

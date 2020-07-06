import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  
renderBands = () => this.props.bands.map(band => <li key={band.id}>{band.name}</li>)
addBand = (band) => this.props.dispatch({type: "ADD_BAND", band: band})
  
render() {
  return( 
    <div>
      <BandInput addBand={this.addBand} />
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
import React, { Component } from 'react'; 
import BandInput from '../components/BandInput'
import { addBand } from '../actions/bands';
import { connect } from 'react-redux';
import BandsDisplay from '../components/BandsDisplay'

class BandsContainer extends Component {
  

  render() {
    
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <BandsDisplay bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

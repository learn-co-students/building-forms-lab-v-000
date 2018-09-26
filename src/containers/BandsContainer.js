import React, { Component } from 'react'
import BandInput from '../components/BandInput'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    const showBands = this.props.bands.map((band, index) => {
      return <li>{band.name}</li>;
    });
    
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {showBands}
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})


const mapDispatchToProps = (dispatch) => {
  return{
    addBand: formData => dispatch({type:"ADD_BAND", payload: formData})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

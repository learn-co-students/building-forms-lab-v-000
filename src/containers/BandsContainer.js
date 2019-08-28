import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'
import manageBand from '../reducers/manageBand';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToPropgs = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({addBand: band => dispatch({ type: "ADD_BAND", band}) })
  
export default connect(mapStateToPropgs, mapDispatchToProps)(BandsContainer)

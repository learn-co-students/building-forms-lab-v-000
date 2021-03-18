import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
// import { addBand } from '../actions/bands'
import Bands from '../components/Bands';

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) }) 

const mapStateToProps = ({ bands }) => ({ bands})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

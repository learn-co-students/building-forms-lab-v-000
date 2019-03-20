import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput add={this.props.addBand} />
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {bands: state.bands}
}
//can be written as: const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer)

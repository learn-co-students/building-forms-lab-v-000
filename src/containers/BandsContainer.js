import React, { Component } from 'react'
import Bands from '../components/Bands';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'

// import App from '../App';


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

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

const mapStateToProps = ({ bands }) => ({ bands })

// export default BandsContainer
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

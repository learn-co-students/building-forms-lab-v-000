import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>
          <h3>Bands</h3>
        </div>
        <div>
          <Bands bands={this.props.bands}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

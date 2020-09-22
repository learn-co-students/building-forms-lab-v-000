import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import BandList from '../components/BandList'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <BandList bands={this.props.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

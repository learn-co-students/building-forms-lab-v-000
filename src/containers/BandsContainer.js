// Create and get bands from the store for display
import React, { Component } from "react"
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"
import { connect } from "react-redux"

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

// the mapStateToProps and mapDispatchToProps function arguments 
// are passed to connect in that order
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

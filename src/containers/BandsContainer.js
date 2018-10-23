import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput store={this.props.store} />
      </div>
    )
  }
}

export default BandsContainer

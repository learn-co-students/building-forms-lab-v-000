import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandsContainer extends Component {

  showBands = () => {
    return this.props.bands.map(function (band, id) {
      return <li key={id}>{band}</li>
    })
  }

  render() {
    return(
      <div>
        <ul>
          {this.showBands()}
        </ul>
      </div>
    )
  }
}

let stateProps = (state) => {
  return {
    bands: state.bands
  }
}

export default connect(stateProps)(BandsContainer)

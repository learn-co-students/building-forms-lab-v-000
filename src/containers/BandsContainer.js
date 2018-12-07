import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {

  bandList = () => {
    return this.props.bands.map((band, i) => <Band key={i} band={band} />)
  }

  render() {
    return(
      <div>
        <BandInput dispatch={this.props.dispatch}/>
        {this.bandList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

export default connect(mapStateToProps)(BandsContainer)

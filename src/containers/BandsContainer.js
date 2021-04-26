import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import { addBand } from '../actions/band/index'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        {this.props.bands.map(band=> (
          <li><h3>{band.name}</h3></li>
        ))}
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

export default connect(state=> ({bands: state.bands}), ({addBand}))(BandsContainer)

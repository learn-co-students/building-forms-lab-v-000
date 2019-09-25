import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  
  renderBands = () => this.props.bands.map((band, id) => <li>{band.name} </li>)

  
  render() {
    return(
      <div>
        <BandInput />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({ bands: state.bands }))(BandsContainer);


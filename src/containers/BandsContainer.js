import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    return <ul>{this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}</ul>
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        {this.renderBands}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {addBand: (nameObj) => dispatch({type: 'ADD_BAND', nameObj})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

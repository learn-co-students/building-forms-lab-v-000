import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map(band => <li key={band.id}>{band.name}</li>)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
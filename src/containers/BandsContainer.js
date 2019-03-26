import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <li>{band.name}</li>);

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
           {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type:"ADD_BAND", payload: band})
})

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);

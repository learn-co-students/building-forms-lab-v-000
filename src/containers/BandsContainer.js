import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Band from '../components/Band'
import { connect } from 'react-redux'

// You will need to write the BandsContainer component. This component should act as your
// connection to the Redux store and should be a child of the App component.

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band.name}/>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", payload: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

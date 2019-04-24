import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return(
      <div className="BandsContainer">
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map((band, index) =>
          <li key={index}>{band.name}</li>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch({type: 'ADD_BAND', band})
    }
  }
}

const mapStateToProps = ({bands}) => ({bands})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

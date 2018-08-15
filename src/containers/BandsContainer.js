import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const bandMap = this.props.bands.map((band, id) => {
      return <li key={id}>{band.name}</li>
    })

    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {bandMap}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({
    type: 'ADD_BAND',
    payload: {
      name
    }
  })
})


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

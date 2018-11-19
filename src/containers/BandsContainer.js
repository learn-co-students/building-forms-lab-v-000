import React, { Component, Fragment } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <Fragment>
        <div>
          <BandInput submitForm={this.props.submitInput}/>
        </div>
        <ul>
          {this.props.bands.map((band) =>
            <li>{band}</li>
          )}
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitInput: inputBand => {
      dispatch({
        type: 'ADD_BAND',
        band: inputBand
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

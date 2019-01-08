import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from '../components/Band'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

//  renderBands = () => this.props.bands.map((item, id) =>
//    <Band key={id} text={item}/>
//  )

  render() {

    return(
      <div>

        <BandInput addBand={this.props.addBand}/>
        <Band bands={this.props.bands}/>

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
  addBand: formData => dispatch({ type: 'ADD_BAND',
    payload: formData})
  })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

import React, { Component } from 'react'
import Band from '../components/Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => 
    <Band key={id} name={band.name} />
  )

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    bands: state.bands
  })
}

export default connect(mapStateToProps)(BandsContainer)

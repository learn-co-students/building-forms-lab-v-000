import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from '../components/Band'


class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band} />)

  render() {
    return(
      <ul>
        {this.renderBands()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

 
export default connect(mapStateToProps)(BandsContainer);

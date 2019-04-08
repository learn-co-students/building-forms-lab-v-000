import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from './band'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((name, id) => <Band key={id} name={name} />)


  render() {
    return(
      <div>
        <BandInput />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
debugger
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);

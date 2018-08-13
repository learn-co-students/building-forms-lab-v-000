import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'



class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <BandInput key={id} text={band} />)

  render() {
    return(
      <div>
        <BandInput />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}




export default connect(mapStateToProps)(BandsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';


class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)

  handleNewBand = (state) => {
    console.log(state)
    this.props.addBand(state)
  }

  render() {
    return(
      <div>

          <BandInput sendBand={this.handleNewBand}/>
          {this.renderBands()}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

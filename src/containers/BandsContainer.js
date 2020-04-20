import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = (props) => {
    return <ul>{props.bands.map((band, index) => <li key={index}>{band.name}</li>)}</ul>
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        {this.renderBands(this.props)}
      </div>
    )
  }
}


const mapStateToProps = ({bands}) => ({bands})

const mapDispatchToProps = dispatch => ({ addBand: (nameObj) => dispatch({ type: 'ADD_BAND', nameObj }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

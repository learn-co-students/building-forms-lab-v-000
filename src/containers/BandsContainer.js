import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  render() {

  const bandList = this.props.bands.map((band, id) => {
    console.log(band)
  	return <li>{band.name}</li>
  })

    return(
      <div>
      	<BandInput addBand={this.props.addBand} />
        <ul>
          {bandList}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    addBand: name => dispatch({ 
      type: 'ADD_BAND', 
      payload: { name }
    })
})

const mapStateToProps = state => {
  return ({
      bands: state.bands
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);





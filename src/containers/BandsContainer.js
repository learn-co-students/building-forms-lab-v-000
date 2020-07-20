import React, { Component } from 'react'
//should act as your connection to the Redux store
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        BandsContainer
        {this.props.bands.map(band => <li>{band.name}</li>)}
        <BandInput addBand={this.props.addBand}/>

      </div>
     
    )
  }
}


//Any values we want to use from Redux 
//as well as any actions we want to dispatch 
//should be set up and available 
// so they can be passed down to other components.

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

const mapDispatchToProps = dispatch => {
  
  return {
    addBand: (formData => dispatch({ type: 'ADD_BAND', payload: formData }))
  };
};




//export default BandsContainer
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
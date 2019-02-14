import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  
  //bandInput = () => this.props.bands.map((band, id) => { return <li key={id}>{band.name}</li>} )

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

//If something is outside the render, the 'this' is the component it is in (ie BandsContainer)
//If it is defined inside the render(), then it does not need {this.listBands()}. Instead, you can write {listBands()}.
//Inside the render, 'this' is still BandsContainer, and it does have the same props as outside the render. 'This' also has access to listBands().
//Cannot declare varaibles inside return()
//EVERYTHING underneath 'render' must be declared
//It will not hit the function if it is above the render for some reason (not sure about that - look at redux-delete-codealong)
// You will need to write the BandsContainer component. This component should act as your connection to the Redux store and should be a child of the App component.
// Once you've got a form successfully dispatching actions and adding bands to your Redux store, write the necessary code to display each band name from the store. Band names should be listed in individual li elements.
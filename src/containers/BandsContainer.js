import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import{connect} from 'react-redux'
import Bands from '../components/Band'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul><Bands bands={this.props.bands}/></ul>
        {console.log(this.props.bands)}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    bands: state.bands
  }
}

const mapDispatchToProps= (dispatch)=>({
  addBand: band=>dispatch({type: 'ADD_BAND', band})
})
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

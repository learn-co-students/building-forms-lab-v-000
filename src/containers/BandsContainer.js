import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import{connect} from 'react-redux'
import Bands from '../components/Band'

class BandsContainer extends Component {

  renderBands= () => this.props.bands.map((band, key)=> <Bands key={key} band={band}/>)


  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul>{this.renderBands()}</ul>
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

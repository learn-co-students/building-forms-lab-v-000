import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {

    renderBands=()=>{
        return this.props.bands.map(
            (band, idx) => {return <li key={idx}>{band.name}</li>}
            )
    }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
            {this.renderBands()}
        </ul>

      </div>
    )
  }
}


const mapStateToProps = (state)=>({
    bands: state.bands
});
const mapDispatchToProps = (dispatch)=>({
    addBand: band=>dispatch({type: "ADD_BAND", band})
});

export default connect (mapStateToProps,mapDispatchToProps)(BandsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from './BandInput'
import Band from './Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map( (b, id) =>
    <Band key={id} text={b} />)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
   bands: state.bands
  }
}


const mapDispatchToProps = dispatch => ({addBand: band => dispatch({type: "ADD_BAND", payload: band})})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

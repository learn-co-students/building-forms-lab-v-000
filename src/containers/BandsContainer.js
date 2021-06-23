import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'


class BandsContainer extends Component {
  

  renderBands = () => this.props.bands.map((band) =>{return(<li>{band.name}</li>)})
  
  render() {
    debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  };
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);


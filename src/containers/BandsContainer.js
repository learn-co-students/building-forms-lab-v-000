import React, { Component } from 'react'; 
import BandInput from '../components/BandInput'
import { addBand } from '../actions/bands';
import { connect } from 'react-redux';
import BandsDisplay from '../components/BandsDisplay'

class BandsContainer extends Component {
  

  render() {
    // console.log("the props that <BandContainer /> receives:")
    // console.log(this.props)
    // console.log(this.props)
    // console.log(this.props.addBand)
    
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <BandsDisplay bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('the state that mapStateToProps gets from the Redux store:')
  // console.log(state)
  // console.log('---------')
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

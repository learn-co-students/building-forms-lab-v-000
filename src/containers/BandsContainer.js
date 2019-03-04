import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Band from '../components/Band'


class BandsContainer extends Component {

  renderBand = () => this.props.bands.map(b =><Band band={b}/>)

  render() {
    return(
      <div>
        <BandInput addband={this.props.addband}/>
        {this.renderBand()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addband: formdata => dispatch({type:'ADD_BAND', band: formdata})
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer)

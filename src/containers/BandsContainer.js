import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import {addBandName} from '../reducers/manageBand'
import BandList from '../components/BandList'
class BandsContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
  }


  handleSubmit = (e,bandName) => {
    e.preventDefault()
    this.props.addBandName(bandName)
  }
  render() {
    return(
      <div>
      <BandInput
        name={this.state.name}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
        <BandList bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {bands: state.bands}
}
const mapDispatchToProps = (dispatch) => {
  return {addBandName(bandName){
    dispatch(addBandName(bandName))
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);

// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({
      name: ""
    })
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Add Band</label>
        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.name}/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default BandInput

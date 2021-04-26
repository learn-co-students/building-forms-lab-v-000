// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  state = {
    name: ""
  }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={e => { e.preventDefault(); this.props.addBand(this.state); this.setState({name: ""})} }>
          <input type="text" value={this.state.name} onChange={e=> this.setState({name: e.target.value})}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
